import { useMemo } from "react";
import { createBrowserClient } from "@supabase/ssr";

export function getSupabaseBrowserClient() {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON) {
      throw new Error('Missing Supabase environment variables');
    }
    
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON,
    );
  } catch (error) {
    console.error('Failed to create Supabase browser client:', error);
    throw error;
  }
}

function useSupabaseClient() {
  return useMemo(() => {
    try {
      return getSupabaseBrowserClient();
    } catch (error) {
      console.error('Error in useSupabaseClient:', error);
      // Return a mock client that prevents crashes
      return {
        auth: {
          signInWithOAuth: () => Promise.resolve({ error: new Error('Supabase client unavailable') }),
          getUser: () => Promise.resolve({ data: { user: null }, error: new Error('Supabase client unavailable') }),
          getSession: () => Promise.resolve({ data: { session: null }, error: new Error('Supabase client unavailable') }),
        },
        from: () => ({
          insert: () => Promise.resolve({ error: new Error('Supabase client unavailable') }),
          select: () => Promise.resolve({ data: [], error: new Error('Supabase client unavailable') }),
        }),
      };
    }
  }, []);
}

export default useSupabaseClient;
