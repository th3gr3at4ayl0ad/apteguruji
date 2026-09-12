import type { Metadata } from "next";
import { getServiceById } from "@/lib/services";
import Navbar from "@/components/public/navbar";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const service = await getServiceById("shanti", params.id);

  if (!service) {
    return { title: "शांती विधी मिळाली नाही" };
  }

  return {
    title: service.title,
    description: service.short_description || service.description || undefined,
  };
}

export default async function ShanthiDetailPage(props: PageProps) {
  const params = await props.params;
  const service = await getServiceById("shanti", params.id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFCF7]">
        <div className="container-custom section-padding">
          <a
            href="/shanti"
            className="mb-8 inline-flex items-center gap-2 font-medium text-amber-700 hover:text-amber-800"
          >
            <ArrowLeft size={18} />
            शांती विधी सूचीला परत जा
          </a>

          <div className="grid gap-12 lg:grid-cols-2">
            {service.image_url ? (
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                <img
                  src={service.image_url}
                  alt={service.title}
                  className="max-h-96 w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-xl bg-amber-50 p-8">
                <AlertCircle className="text-amber-400" size={48} />
              </div>
            )}

            <div>
              <h1 className="text-4xl font-bold text-red-950 sm:text-5xl">
                {service.title}
              </h1>

              <div className="gold-line !mx-0 !mt-4" />

              {service.short_description && (
                <p className="mt-6 text-lg text-amber-950/70">
                  {service.short_description}
                </p>
              )}

              <div className="mt-8 space-y-4">
                {service.duration && (
                  <div>
                    <h3 className="font-semibold text-red-900">अवधी:</h3>
                    <p className="text-amber-950/70">{service.duration}</p>
                  </div>
                )}

                {service.samagri && (
                  <div>
                    <h3 className="font-semibold text-red-900">सामग्री:</h3>
                    <p className="whitespace-pre-wrap text-amber-950/70">
                      {service.samagri}
                    </p>
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-900 px-7 py-3 font-semibold text-white transition hover:bg-red-950"
              >
                या विधीसाठी चौकशी करा
              </a>
            </div>
          </div>

          {service.description && (
            <div className="mt-16 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-red-950">विस्तृत विवरण</h2>
                <div className="gold-line !mx-0 !mt-3" />
                <div className="mt-4 whitespace-pre-wrap text-amber-950/70">
                  {service.description}
                </div>
              </div>
            </div>
          )}

          {service.benefits && (
            <div className="mt-16 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-red-950">लाभ</h2>
                <div className="gold-line !mx-0 !mt-3" />
                <div className="mt-4 whitespace-pre-wrap text-amber-950/70">
                  {service.benefits}
                </div>
              </div>
            </div>
          )}

          {service.procedure && (
            <div className="mt-16 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-red-950">विधी</h2>
                <div className="gold-line !mx-0 !mt-3" />
                <div className="mt-4 whitespace-pre-wrap text-amber-950/70">
                  {service.procedure}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-amber-900/10 bg-[#FFF9F0]">
        <div className="container-custom py-8 text-center text-sm text-amber-950/60">
          © {new Date().getFullYear()} गुरुजी धार्मिक सेवा
        </div>
      </footer>
    </>
  );
}
