"use server";

import { createServerClient, type CookieOptions, createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export default async function createSupabaseServerClient() {
  try {
    const cookieStore = await cookies();

    return createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value, ...options });
            } catch (error) {
              console.warn('Failed to set cookie:', error);
            }
          },
          remove(name: string, options: CookieOptions) {
            try {
              cookieStore.set({ name, value: "", ...options });
            } catch (error) {
              console.warn('Failed to remove cookie:', error);
            }
          },
        },
      },
    );
  } catch (error) {
    console.error('Failed to create Supabase server client:', error);
    throw error;
  }
}

/// Admin client with service role key (for operations that need to bypass RLS)
export async function createSupabaseAdminClient() {
  try {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  } catch (error) {
    console.error('Failed to create Supabase admin client:', error);
    throw error;
  }
}
