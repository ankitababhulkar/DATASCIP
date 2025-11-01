"use client";

import { useState, useEffect } from 'react';
import useSupabaseClient from './client';
import { supabaseErrorHandler, withErrorHandling } from './errorHandler';
import type { User, Session } from '@supabase/supabase-js';

export function useSupabaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = useSupabaseClient();

  useEffect(() => {
    let mounted = true;

    async function getInitialSession() {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          supabaseErrorHandler.handleAuthError(error);
          setError(error.message);
        } else if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to get session');
          supabaseErrorHandler.logError(err, 'useSupabaseAuth - getInitialSession');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (mounted) {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
          setError(null);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const signOut = async () => {
    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      supabaseErrorHandler.handleAuthError(error);
      setError(error.message);
    }
    
    setLoading(false);
  };

  return {
    user,
    session,
    loading,
    error,
    signOut,
  };
}

export function useSupabaseQuery<T>(
  queryFn: () => Promise<{ data: T | null; error: any }>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      if (!mounted) return;
      
      setLoading(true);
      setError(null);

      const { data: result, error: queryError } = await withErrorHandling(
        queryFn,
        'useSupabaseQuery'
      );

      if (!mounted) return;

      if (queryError) {
        setError(queryError.message || 'Query failed');
      } else {
        setData(result);
      }

      setLoading(false);
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, dependencies);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    const { data: result, error: queryError } = await withErrorHandling(
      queryFn,
      'useSupabaseQuery - refetch'
    );

    if (queryError) {
      setError(queryError.message || 'Query failed');
    } else {
      setData(result);
    }

    setLoading(false);
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
}