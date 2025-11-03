import { redirect } from "next/navigation";
import createSupabaseServerClient from "../lib/supabase/server";
import { CreateCommunityNoteBuilder } from "./CreateCommunityNoteBuilder";
import { SignInWithGitHub } from "./SignInWithGitHub";
import { User } from "@supabase/supabase-js";

// Move the server action outside the component and mark it with 'use server'
async function handleCreateCommunityNote(formData: FormData) {
  "use server";

  try {
    const message = formData.get("message") as string;
    const patternIndex = parseInt(formData.get("patternIndex") as string);
    const rotation = parseInt(formData.get("rotation") as string);

    const supabase = await createSupabaseServerClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error('Failed to get user:', userError);
      return;
    }

    if (!user) {
      console.warn('No authenticated user found');
      return;
    }

    const newNote = {
      message,
      patternindex: patternIndex,
      rotation: rotation,
      user_id: user.id,
      creator_name: user.user_metadata?.full_name || 'Anonymous',
      creator_avatar_url: user.user_metadata?.avatar_url || '',
    };

    const { error } = await supabase.from("messages").insert(newNote).select();

    if (error) {
      console.error('Failed to create community note:', error);
      return;
    }

    redirect("/community-wall");
  } catch (error) {
    console.error('Error in handleCreateCommunityNote:', error);
    // Don't redirect on error to prevent blocking UI
  }
}

export async function CommunityWallModal() {
  let user: User | null = null;

  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user: authUser }, error } = await supabase.auth.getUser();

    if (error) {
      console.warn('Failed to get user in CommunityWallModal:', error);
    } else {
      user = authUser;
    }
  } catch (error) {
    console.error('Error in CommunityWallModal:', error);
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70">
      <div className="flex min-h-screen items-center justify-center">
        {!user ? (
          <SignInWithGitHub />
        ) : (
          <CreateCommunityNoteBuilder
            onSubmit={handleCreateCommunityNote}
            creator_name={user.user_metadata?.full_name || 'Anonymous'}
            creator_avatar_url={user.user_metadata?.avatar_url || ''}
          />
        )}
      </div>
    </div>
  );
}
