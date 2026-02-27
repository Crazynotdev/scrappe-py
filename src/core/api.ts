import { supabase } from "./supabase";

export async function addPoints(type: string, points: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if(!user) return;

  await supabase.rpc("add_points", {
    p_user: user.id,
    p_type: type,
    p_source: null,
    p_points: points
  });
}

export async function getProfile() {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .single();
  return data;
}
