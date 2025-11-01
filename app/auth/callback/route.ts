import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/community-wall?show=true";

  if (code) {
    try {
      const cookieStore = await cookies();
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON!,
        {
          cookies: {
            get(name: string) {
              return cookieStore.get(name)?.value ?? "";
            },
            set(name: string, value: string, options: CookieOptions) {
              try {
                cookieStore.set({ name, value, ...options });
              } catch (error) {
                console.warn('Failed to set cookie in auth callback:', error);
              }
            },
            remove(name: string, options: CookieOptions) {
              try {
                cookieStore.delete({ name, ...options });
              } catch (error) {
                console.warn('Failed to remove cookie in auth callback:', error);
              }
            },
          },
        },
      );
      
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Failed to exchange code for session:', error);
        return NextResponse.redirect(
          `${origin}/community-wall?message=Authentication failed`,
        );
      }
      
      return NextResponse.redirect(`${origin}${next}`);
    } catch (error) {
      console.error('Error in auth callback:', error);
      return NextResponse.redirect(
        `${origin}/community-wall?message=Authentication error`,
      );
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(
    `${origin}/community-wall?message=No authorization code provided`,
  );
}
