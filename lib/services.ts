import { createClient } from "@/lib/supabase/server";
import type {
  Puja,
  Sanskar,
  ShanthiService,
  ShraddhService,
  YagService,
  VivahService,
  MuhuratService,
} from "@/types/database";

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

type ServiceType =
  | Puja
  | Sanskar
  | ShanthiService
  | ShraddhService
  | YagService
  | VivahService
  | MuhuratService;

export async function getServices(category: ServiceCategory) {
  const supabase = await createClient();
  const table = tableMap[category];

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(`Error loading ${category} services:`, error);
    return [];
  }

  return data ?? [];
}

export async function getServiceById(
  category: ServiceCategory,
  id: string
): Promise<ServiceType | null> {
  const supabase = await createClient();
  const table = tableMap[category];

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error(`Error loading ${category} service:`, error);
    return null;
  }

  return data;
}

export async function getServiceBySlug(
  category: ServiceCategory,
  slug: string
): Promise<ServiceType | null> {
  const supabase = await createClient();
  const table = tableMap[category];

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error(`Error loading ${category} service by slug:`, error);
    return null;
  }

  return data;
}
