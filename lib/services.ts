import { createClient } from "@/lib/supabase/server";

export type ServiceCategory =
  | "puja"
  | "sanskar"
  | "shanti"
  | "shraddha"
  | "yag-havan"
  | "vivah"
  | "muhurat";

const tableMap = {
  puja: "pujas",
  sanskar: "sanskars",
  shanti: "shanti_services",
  shraddha: "shraddha_services",
  "yag-havan": "yag_services",
  vivah: "vivah_services",
  muhurat: "muhurat_services",
} as const;

export async function getServices(category: ServiceCategory) {
  const supabase = await createClient();

  const table = tableMap[category];

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading services:", error);
    return [];
  }

  return data ?? [];
}

export async function getServiceById(
  category: ServiceCategory,
  id: string
) {
  const supabase = await createClient();

  const table = tableMap[category];

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error("Error loading service:", error);
    return null;
  }

  return data;
}
