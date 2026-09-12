import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceById } from "@/lib/services";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  const service = await getServiceById("puja", id);

  if (!service) {
    return {
      title: "पूजा उपलब्ध नाही",
    };
  }

  return {
    title: service.name_mr || service.name,
    description:
      service.short_description ||
      "शास्त्रोक्त पूजा व धार्मिक विधीची माहिती.",
  };
}

export default async function PujaDetailPage({ params }: Props) {
  const { id } = await params;

  const service = await getServiceById("puja", id);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <section className="container-custom section-padding">
        <Link
          href="/puja"
          className="text-sm font-semibold text-[#7F1D1D]"
        >
          ← सर्व पूजा
        </Link>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-semibold text-[#B8860B]">
            पूजा व विधी
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#451A03] md:text-5xl">
            {service.name_mr || service.name}
          </h1>

          {service.short_description && (
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {service.short_description}
            </p>
          )}

          {service.description && (
            <div className="mt-8 rounded-2xl border border-[#E8D8BD] bg-white p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#7F1D1D]">
                विधीची माहिती
              </h2>

              <div className="mt-5 whitespace-pre-line leading-8 text-gray-700">
                {service.description}
              </div>
            </div>
          )}

          <div className="mt-8">
            <Link
              href={`/contact?service=${encodeURIComponent(
                service.name_mr || service.name
              )}`}
              className="inline-flex rounded-xl bg-[#7F1D1D] px-6 py-3 font-semibold text-white transition hover:bg-[#5F1515]"
            >
              या विधीसाठी चौकशी करा
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
