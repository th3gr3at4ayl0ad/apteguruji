import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-pattern relative overflow-hidden">
      <div className="container-custom grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-amber-700/20 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
            ॥ श्री गणेशाय नमः ॥
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-red-950 sm:text-5xl lg:text-6xl">
            भक्ती, श्रद्धा आणि सेवेसाठी
            <span className="mt-2 block text-amber-700">
              एकत्र येऊया
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-950/70">
            परंपरेनुसार शास्त्रोक्त पूजा, संस्कार, शांती विधी
            आणि धार्मिक सेवा श्रद्धा व योग्य विधीपूर्वक.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/calendar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-900 px-6 py-3 font-semibold text-white transition hover:bg-red-950"
            >
              <CalendarDays size={19} />
              आजचे कार्यक्रम पहा
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-700/30 bg-white px-6 py-3 font-semibold text-amber-900 transition hover:bg-amber-50"
            >
              पूजा / विधीसाठी चौकशी
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-amber-950/60">
            <MessageCircle size={17} className="text-green-700" />
            WhatsApp वर थेट संपर्काची सुविधा
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto flex aspect-square max-w-[480px] items-center justify-center rounded-full border border-amber-700/20 bg-gradient-to-br from-amber-50 to-orange-100 shadow-spiritual">
            <div className="flex h-[78%] w-[78%] items-center justify-center rounded-full border border-amber-700/20 bg-[#FFFCF7] shadow-xl">
              <div className="text-center">
                <div className="text-8xl text-amber-700 sm:text-9xl">
                  ॐ
                </div>
                <p className="mt-4 font-serif text-lg text-red-900">
                  धर्म • संस्कृती • सेवा
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-2 rounded-2xl border border-amber-700/10 bg-white px-5 py-4 shadow-xl sm:left-0">
            <div className="text-sm font-semibold text-red-900">
              शास्त्रोक्त विधी
            </div>
            <div className="text-xs text-amber-950/60">
              श्रद्धा आणि परंपरेसह
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
