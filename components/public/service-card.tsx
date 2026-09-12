import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="spiritual-card group block p-6"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-red-900 group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-red-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-amber-950/65">
        {description}
      </p>

      <div className="mt-5 text-sm font-semibold text-amber-700">
        अधिक माहिती →
      </div>
    </Link>
  );
}
