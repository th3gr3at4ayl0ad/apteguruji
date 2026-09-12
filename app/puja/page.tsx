import Link from "next/link";
import { getServices } from "@/lib/services";

export const revalidate = 60;

export default async function PujaPage() {
  const services = await getServices("puja");

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <section className="border-b border-[#E8D8BD] bg-[#FFF7E8]">
        <div className="container-custom section-padding">
          <p className="text-sm font-semibold tracking-wide text-[#B8860B]">
            पूजा व विधी
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#451A03] md:text-5xl">
            पूजा व धार्मिक विधी
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            परंपरेनुसार शास्त्रोक्त पद्धतीने विविध पूजा व धार्मिक विधी.
          </p>
        </div>
      </section>

      <section className="container-custom section-padding">
        {services.length === 0 ? (
          <div className="rounded-2xl border border-[#E8D8BD] bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-[#451A03]">
              सध्या सेवा उपलब्ध नाहीत
            </h2>

            <p className="mt-2 text-gray-500">
              लवकरच येथे पूजा व विधींची माहिती उपलब्ध होईल.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/puja/${service.id}`}
                className="spiritual-card group block p-6"
              >
                <h2 className="text-xl font-bold text-red-950">
                  {service.title}
                </h2>

                {service.short_description && (
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-amber-950/65">
                    {service.short_description}
                  </p>
                )}

                {service.duration && (
                  <p className="mt-3 text-sm font-medium text-amber-800">
                    कालावधी: {service.duration}
                  </p>
                )}

                <div className="mt-5 text-sm font-semibold text-amber-700">
                  अधिक माहिती →
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
