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
    title: service.title,
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
          className="text-sm font-semibold text-red-900"
        >
          ← सर्व पूजा
        </Link>

        <div className="mt-8 max-w-4xl">

          <p className="text-sm font-semibold tracking-wide text-amber-700">
            पूजा व विधी
          </p>

          <h1 className="mt-2 text-4xl font-bold text-red-950 md:text-5xl">
            {service.title}
          </h1>

          {service.short_description && (
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {service.short_description}
            </p>
          )}

          {service.image_url && (
            <div className="mt-8 overflow-hidden rounded-3xl">
              <img
                src={service.image_url}
                alt={service.title}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {service.duration && (
              <InfoCard
                title="कालावधी"
                content={service.duration}
              />
            )}

            {service.samagri && (
              <InfoCard
                title="साहित्य"
                content={service.samagri}
              />
            )}

          </div>

          {service.description && (
            <ContentSection
              title="पूजेची माहिती"
              content={service.description}
            />
          )}

          {service.benefits && (
            <ContentSection
              title="पूजेचे लाभ"
              content={service.benefits}
            />
          )}

          {service.procedure && (
            <ContentSection
              title="पूजा विधी"
              content={service.procedure}
            />
          )}

          <div className="mt-10">
            <Link
              href={`/contact?service=${encodeURIComponent(
                service.title
              )}`}
              className="inline-flex rounded-xl bg-red-900 px-7 py-3.5 font-semibold text-white transition hover:bg-red-950"
            >
              या विधीसाठी चौकशी करा
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E8D8BD] bg-white p-6">
      <h2 className="font-bold text-red-900">
        {title}
      </h2>

      <p className="mt-3 whitespace-pre-line leading-7 text-gray-700">
        {content}
      </p>
    </div>
  );
}

function ContentSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="mt-8 rounded-2xl border border-[#E8D8BD] bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold text-red-900">
        {title}
      </h2>

      <div className="mt-5 whitespace-pre-line leading-8 text-gray-700">
        {content}
      </div>
    </section>
  );
}
