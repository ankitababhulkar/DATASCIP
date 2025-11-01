import { PostgrestError, AuthError } from '@supabase/supabase-js';

export interface SupabaseErrorHandler {
  logError: (error: any, context?: string) => void;
  handleAuthError: (error: AuthError | null) => boolean;
  handleDatabaseError: (error: PostgrestError | null) => boolean;
  isNetworkError: (error: any) => boolean;
}

export const supabaseErrorHandler: SupabaseErrorHandler = {
  logError: (error: any, context = 'Supabase operation') => {
    if (process.env.NODE_ENV === 'development') {
      console.error(`${context}:`, error);
    }
    
    // In production, you might want to send this to a logging service
    // like Sentry, LogRocket, etc.
  },

  handleAuthError: (error: AuthError | null): boolean => {
    if (!error) return false;
    
    supabaseErrorHandler.logError(error, 'Authentication error');
    
    // Handle specific auth errors
    switch (error.message) {
      case 'Invalid login credentials':
        // Handle invalid credentials
        break;
      case 'Email not confirmed':
        // Handle unconfirmed email
        break;
      case 'Too many requests':
        // Handle rate limiting
        break;
      default:
        // Handle generic auth error
        break;
    }
    
    return true;
  },

  handleDatabaseError: (error: PostgrestError | null): boolean => {
    if (!error) return false;
    
    supabaseErrorHandler.logError(error, 'Database error');
    
    // Handle specific database errors
    switch (error.code) {
      case 'PGRST116':
        // Handle no rows returned
        break;
      case '23505':
        // Handle unique constraint violation
        break;
      case '42501':
        // Handle insufficient privileges
        break;
      default:
        // Handle generic database error
        break;
    }
    
    return true;
  },

  isNetworkError: (error: any): boolean => {
    return (
      error?.message?.includes('fetch') ||
      error?.message?.includes('network') ||
      error?.message?.includes('timeout') ||
      error?.code === 'NETWORK_ERROR'
    );
  },
};

// Wrapper function for Supabase operations with automatic error handling
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  context?: string
): Promise<{ data: T | null; error: any | null }> {
  try {
    const result = await operation();
    return { data: result, error: null };
  } catch (error) {
    supabaseErrorHandler.logError(error, context);
    return { data: null, error };
  }
}

// Retry wrapper for network-related errors
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: any;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxRetries || !supabaseErrorHandler.isNetworkError(error)) {
        throw error;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  
  throw lastError;
}