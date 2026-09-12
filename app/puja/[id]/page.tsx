import type { Metadata } from "next";
import { getServiceById } from "@/lib/services";
import Navbar from "@/components/public/navbar";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface PujaDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  props: PujaDetailPageProps
): Promise<Metadata> {
  const params = await props.params;
  const puja = await getServiceById("puja", params.id);

  if (!puja) {
    return {
      title: "पूजा मिळाली नाही",
    };
  }

  return {
    title: puja.title,
    description: puja.short_description || puja.description || undefined,
  };
}

export default async function PujaDetailPage(props: PujaDetailPageProps) {
  const params = await props.params;
  const puja = await getServiceById("puja", params.id);

  if (!puja) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFCF7]">
        <div className="container-custom section-padding">
          <a
            href="/puja"
            className="mb-8 inline-flex items-center gap-2 font-medium text-amber-700 hover:text-amber-800"
          >
            <ArrowLeft size={18} />
            पूजा सूचीला परत जा
          </a>

          <div className="grid gap-12 lg:grid-cols-2">
            {puja.image_url ? (
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                <img
                  src={puja.image_url}
                  alt={puja.title}
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
                {puja.title}
              </h1>

              <div className="gold-line !mx-0 !mt-4" />

              {puja.short_description && (
                <p className="mt-6 text-lg text-amber-950/70">
                  {puja.short_description}
                </p>
              )}

              <div className="mt-8 space-y-4">
                {puja.duration && (
                  <div>
                    <h3 className="font-semibold text-red-900">अवधी:</h3>
                    <p className="text-amber-950/70">{puja.duration}</p>
                  </div>
                )}

                {puja.samagri && (
                  <div>
                    <h3 className="font-semibold text-red-900">सामग्री:</h3>
                    <p className="whitespace-pre-wrap text-amber-950/70">
                      {puja.samagri}
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

          {puja.description && (
            <div className="mt-16 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-red-950">विस्तृत विवरण</h2>
                <div className="gold-line !mx-0 !mt-3" />
                <div className="mt-4 whitespace-pre-wrap text-amber-950/70">
                  {puja.description}
                </div>
              </div>
            </div>
          )}

          {puja.benefits && (
            <div className="mt-16 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-red-950">लाभ</h2>
                <div className="gold-line !mx-0 !mt-3" />
                <div className="mt-4 whitespace-pre-wrap text-amber-950/70">
                  {puja.benefits}
                </div>
              </div>
            </div>
          )}

          {puja.procedure && (
            <div className="mt-16 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-red-950">विधी</h2>
                <div className="gold-line !mx-0 !mt-3" />
                <div className="mt-4 whitespace-pre-wrap text-amber-950/70">
                  {puja.procedure}
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
