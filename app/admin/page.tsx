import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: userRole } = await supabase
    .from("user_roles")
    .select(
      `
      roles (
        name
      )
      `
    )
    .eq("user_id", user.id)
    .maybeSingle();

  const roleName =
    (userRole?.roles as { name?: string } | null)?.name ?? null;

  if (!["guruji", "admin", "handler"].includes(roleName ?? "")) {
    redirect("/admin/login?error=unauthorized");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <div className="container-custom section-padding">

        <div className="mb-10">
          <p className="text-sm font-semibold text-[#B8860B]">
            ADMIN PANEL
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#451A03]">
            नमस्कार, {profile?.full_name || "Guruji"} 🙏
          </h1>

          <p className="mt-2 text-gray-600">
            गुरुजी धार्मिक सेवा प्रशासन पॅनेल
          </p>

          <div className="mt-3 inline-flex rounded-full bg-[#7F1D1D] px-4 py-1.5 text-sm font-semibold text-white">
            Role: {roleName}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <DashboardCard
            title="पूजा"
            description="पूजा व्यवस्थापन"
            href="/admin/puja"
          />

          <DashboardCard
            title="Calendar"
            description="कार्यक्रम व दिनदर्शिका"
            href="/admin/calendar"
          />

          <DashboardCard
            title="Enquiries"
            description="चौकशी व्यवस्थापन"
            href="/admin/enquiries"
          />

          <DashboardCard
            title="Gallery"
            description="फोटो व्यवस्थापन"
            href="/admin/gallery"
          />

        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-[#E8D8BD] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-xl font-bold text-[#7F1D1D]">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>

      <span className="mt-5 inline-block text-sm font-semibold text-[#B45309]">
        व्यवस्थापन →
      </span>
    </a>
  );
}
