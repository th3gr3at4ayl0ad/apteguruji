import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email")
    .eq("id", user.id)
    .single();

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <div className="container-custom section-padding">
        <div className="mb-10">
          <p className="text-sm text-[#B8860B] font-semibold">
            ADMIN PANEL
          </p>

          <h1 className="text-4xl font-bold text-[#451A03] mt-2">
            नमस्कार, {profile?.full_name || "Guruji"} 🙏
          </h1>

          <p className="text-gray-600 mt-2">
            गुरुजी धार्मिक सेवा प्रशासन पॅनेल
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Puja"
            value="Manage"
            href="/admin/puja"
          />

          <DashboardCard
            title="Calendar"
            value="Manage"
            href="/admin/calendar"
          />

          <DashboardCard
            title="Enquiries"
            value="Manage"
            href="/admin/enquiries"
          />

          <DashboardCard
            title="Gallery"
            value="Manage"
            href="/admin/gallery"
          />
        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="spiritual-card p-6 block hover:-translate-y-1 transition"
    >
      <p className="text-sm text-gray-500">{title}</p>

      <p className="text-2xl font-bold text-[#7F1D1D] mt-2">
        {value}
      </p>
    </a>
  );
}
