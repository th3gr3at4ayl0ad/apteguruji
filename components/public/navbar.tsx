"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "मुख्यपृष्ठ", href: "/" },
  { label: "पूजा व विधी", href: "/puja" },
  { label: "१६ संस्कार", href: "/sanskar" },
  { label: "शांती विधी", href: "/shanti" },
  { label: "विवाह व शुभकार्य", href: "/vivah" },
  { label: "मुहूर्त", href: "/muhurat" },
  { label: "दिनदर्शिका", href: "/calendar" },
  { label: "गॅलरी", href: "/gallery" },
  { label: "संपर्क", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#FFFCF7]/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="मुख्यपृष्ठ"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-xl text-white">
            ॐ
          </div>

          <div>
            <div className="text-lg font-bold text-red-900">
              गुरुजी धार्मिक सेवा
            </div>
            <div className="text-xs text-amber-700">
              भक्ती • श्रद्धा • सेवा
            </div>
          </div>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="मुख्य नेव्हिगेशन"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-amber-950 transition hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "मेनू बंद करा" : "मेनू उघडा"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-amber-900/10 bg-[#FFFCF7] lg:hidden">
          <nav
            className="container-custom flex flex-col py-4"
            aria-label="मोबाइल नेव्हिगेशन"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-amber-900/5 py-4 text-sm font-medium text-amber-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
