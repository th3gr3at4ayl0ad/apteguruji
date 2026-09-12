import {
  BookOpen,
  CalendarDays,
  Flame,
  Heart,
  Home,
  Landmark,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import Navbar from "@/components/public/navbar";
import Hero from "@/components/public/hero";
import ServiceCard from "@/components/public/service-card";

const services = [
  {
    title: "पूजा व विधी",
    description:
      "गणपती पूजा, सत्यनारायण पूजा, रुद्राभिषेक आणि विविध धार्मिक पूजा.",
    icon: Sparkles,
    href: "/puja",
  },
  {
    title: "१६ संस्कार",
    description:
      "जीवनातील विविध संस्कार परंपरेनुसार आणि शास्त्रोक्त पद्धतीने.",
    icon: Users,
    href: "/sanskar",
  },
  {
    title: "शांती विधी",
    description:
      "नवग्रह शांती, वास्तुशांती, गृहशांती आणि इतर शांती विधी.",
    icon: Home,
    href: "/shanti",
  },
  {
    title: "श्राद्ध व तर्पण",
    description:
      "पितृकार्य, वार्षिक श्राद्ध, महालय श्राद्ध आणि तर्पण विधी.",
    icon: Heart,
    href: "/shraddha",
  },
  {
    title: "याग / हवन",
    description:
      "नवचंडी होम, गणेश याग, सुदर्शन याग आणि विविध हवन.",
    icon: Flame,
    href: "/yag-havan",
  },
  {
    title: "विवाह व शुभकार्य",
    description:
      "विवाह विधी, गृहप्रवेश, वास्तुशांती आणि मंगलकार्य पूजा.",
    icon: Landmark,
    href: "/vivah",
  },
  {
    title: "मुहूर्त",
    description:
      "विवाह, गृहप्रवेश, उपनयन, नामकरण आणि इतर शुभ मुहूर्त.",
    icon: Star,
    href: "/muhurat",
  },
  {
    title: "दिनदर्शिका",
    description:
      "आजचे कार्यक्रम, आगामी धार्मिक कार्यक्रम आणि विशेष दिवस.",
    icon: CalendarDays,
    href: "/calendar",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="section-padding bg-[#FFFCF7]">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                आमच्या सेवा
              </p>

              <h2 className="mt-3 text-3xl font-bold text-red-950 sm:text-4xl">
                धार्मिक सेवा आणि विधी
              </h2>

              <div className="gold-line" />

              <p className="text-amber-950/65">
                आपल्या धार्मिक आणि मंगलकार्यांसाठी आवश्यक सेवा
                एका ठिकाणी.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.href}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-amber-50/50">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                  आजचे आणि आगामी कार्यक्रम
                </p>

                <h2 className="mt-3 text-3xl font-bold text-red-950 sm:text-4xl">
                  धार्मिक दिनदर्शिका
                </h2>

                <div className="gold-line !mx-0" />

                <p className="leading-7 text-amber-950/65">
                  विशेष पूजा, धार्मिक कार्यक्रम आणि आगामी
                  शुभ दिवसांची माहिती येथे उपलब्ध असेल.
                </p>

                <a
                  href="/calendar"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-red-900 px-6 py-3 font-semibold text-white hover:bg-red-950"
                >
                  <CalendarDays size={18} />
                  संपूर्ण दिनदर्शिका
                </a>
              </div>

              <div className="spiritual-card overflow-hidden">
                <div className="border-b border-amber-900/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-amber-700">
                        आज
                      </p>
                      <h3 className="text-xl font-bold text-red-950">
                        कार्यक्रम
                      </h3>
                    </div>

                    <CalendarDays className="text-amber-700" />
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  <div className="rounded-xl bg-amber-50 p-4">
                    <p className="font-semibold text-red-900">
                      विशेष पूजा
                    </p>
                    <p className="mt-1 text-sm text-amber-950/60">
                      कार्यक्रमाची माहिती लवकरच उपलब्ध होईल.
                    </p>
                  </div>

                  <div className="rounded-xl bg-red-50 p-4">
                    <p className="font-semibold text-red-900">
                      आगामी कार्यक्रम
                    </p>
                    <p className="mt-1 text-sm text-amber-950/60">
                      Admin panel मधून कार्यक्रम व्यवस्थापित करता येतील.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-red-950 text-white">
          <div className="container-custom text-center">
            <div className="mx-auto max-w-3xl">
              <BookOpen className="mx-auto text-amber-400" size={42} />

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                परंपरा जपूया, संस्कृती पुढे नेऊया
              </h2>

              <p className="mt-5 leading-8 text-white/70">
                धार्मिक विधी, संस्कार आणि शुभकार्यांसाठी
                योग्य मार्गदर्शन व सेवेसाठी आमच्याशी संपर्क साधा.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-amber-600 px-7 py-3 font-bold text-white hover:bg-amber-500"
              >
                आमच्याशी संपर्क करा
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-900/10 bg-[#FFF9F0]">
        <div className="container-custom py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold text-red-900">
                गुरुजी धार्मिक सेवा
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-950/60">
                भक्ती • श्रद्धा • सेवा
              </p>
            </div>

            <div>
              <h4 className="font-bold text-red-950">
                जलद लिंक
              </h4>

              <div className="mt-4 flex flex-col gap-2 text-sm text-amber-950/65">
                <a href="/puja">पूजा व विधी</a>
                <a href="/sanskar">१६ संस्कार</a>
                <a href="/calendar">दिनदर्शिका</a>
                <a href="/gallery">गॅलरी</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-red-950">
                संपर्क
              </h4>

              <p className="mt-4 text-sm leading-6 text-amber-950/65">
                धार्मिक सेवा व विधींसाठी चौकशी करण्यासाठी
                आमच्याशी संपर्क साधा.
              </p>

              <a
                href="/contact"
                className="mt-4 inline-block font-semibold text-amber-700"
              >
                संपर्क पृष्ठ →
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-amber-900/10 pt-6 text-center text-xs text-amber-950/50">
            © {new Date().getFullYear()} गुरुजी धार्मिक सेवा. सर्व हक्क राखीव.
          </div>
        </div>
      </footer>
    </>
  );
}
