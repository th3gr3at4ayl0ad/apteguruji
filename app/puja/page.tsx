import type { Metadata } from "next";
import { getServices } from "@/lib/services";
import Navbar from "@/components/public/navbar";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "पूजा व विधी",
  description: "गणपती पूजा, सत्यनारायण पूजा, रुद्राभिषेक आणि इतर धार्मिक पूजा.",
};

export default async function PujaPage() {
  const pujas = await getServices("puja");

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
              पूजा व विधी
            </h1>

            <div className="gold-line" />

            <p className="text-amber-950/65">
              शास्त्रोक्त पूजा आणि धार्मिक विधी श्रद्धा व परंपरेसह.
            </p>
          </div>

          {pujas.length === 0 ? (
            <div className="mx-auto mt-16 max-w-md rounded-xl border border-amber-200 bg-amber-50 p-8 text-center">
              <AlertCircle className="mx-auto mb-4 text-amber-700" size={40} />
              <h3 className="text-lg font-semibold text-red-900">
                पूजा उपलब्ध नाहीत
              </h3>
              <p className="mt-2 text-sm text-amber-950/60">
                सध्या कोणतीही पूजा उपलब्ध नाहीत. कृपया लवकरच पुनः तपासा.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pujas.map((puja) => (
                <a
                  key={puja.id}
                  href={`/puja/${puja.id}`}
                  className="spiritual-card flex flex-col overflow-hidden transition"
                >
                  {puja.image_url && (
                    <div className="relative h-48 w-full bg-gradient-to-br from-amber-100 to-orange-100">
                      <img
                        src={puja.image_url}
                        alt={puja.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-grow flex-col p-5">
                    <h3 className="text-lg font-semibold text-red-900">
                      {puja.title}
                    </h3>

                    {puja.short_description && (
                      <p className="mt-2 flex-grow text-sm text-amber-950/60">
                        {puja.short_description}
                      </p>
                    )}

                    {puja.duration && (
                      <p className="mt-3 text-xs font-medium text-amber-700">
                        अवधी: {puja.duration}
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
