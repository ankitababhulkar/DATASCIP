"use server";

import createSupabaseServerClient from "./server";

export default async function getUserSession() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.warn('Failed to get user session:', error);
      return { data: { session: null }, error };
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error in getUserSession:', error);
    return { data: { session: null }, error };
  }
}
