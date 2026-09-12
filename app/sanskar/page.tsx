import type { Metadata } from "next";
import { getServices } from "@/lib/services";
import Navbar from "@/components/public/navbar";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "१६ संस्कार",
  description: "जीवनातील विविध संस्कार परंपरेनुसार आणि शास्त्रोक्त पद्धतीने.",
};

export default async function SanskarPage() {
  const sanskars = await getServices("sanskar");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFCF7]">
        <div className="container-custom section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              आमचे सेवा
            </p>

            <h1 className="mt-3 text-4xl font-bold text-red-950 sm:text-5xl">
              १६ संस्कार
            </h1>

            <div className="gold-line" />

            <p className="text-amber-950/65">
              जीवनातील महत्त्वाचे संस्कार शास्त्रोक्त पद्धतीने पार पाडले जातात.
            </p>
          </div>

          {sanskars.length === 0 ? (
            <div className="mx-auto mt-16 max-w-md rounded-xl border border-amber-200 bg-amber-50 p-8 text-center">
              <AlertCircle className="mx-auto mb-4 text-amber-700" size={40} />
              <h3 className="text-lg font-semibold text-red-900">
                संस्कार उपलब्ध नाहीत
              </h3>
              <p className="mt-2 text-sm text-amber-950/60">
                सध्या कोणतीही संस्कार उपलब्ध नाहीत. कृपया लवकरच पुनः तपासा.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sanskars.map((sanskar) => (
                <a
                  key={sanskar.id}
                  href={`/sanskar/${sanskar.id}`}
                  className="spiritual-card flex flex-col overflow-hidden transition"
                >
                  {sanskar.image_url && (
                    <div className="relative h-48 w-full bg-gradient-to-br from-amber-100 to-orange-100">
                      <img
                        src={sanskar.image_url}
                        alt={sanskar.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-grow flex-col p-5">
                    <h3 className="text-lg font-semibold text-red-900">
                      {sanskar.title}
                    </h3>

                    {sanskar.short_description && (
                      <p className="mt-2 flex-grow text-sm text-amber-950/60">
                        {sanskar.short_description}
                      </p>
                    )}

                    {sanskar.duration && (
                      <p className="mt-3 text-xs font-medium text-amber-700">
                        अवधी: {sanskar.duration}
                      </p>
                    )}

                    <div className="mt-4 inline-block font-medium text-amber-700">
                      विवरण पहा →
                    </div>
                  </div>
                </a>
              ))}
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
