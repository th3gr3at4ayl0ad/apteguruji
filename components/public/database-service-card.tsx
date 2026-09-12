import Link from "next/link";

interface DatabaseServiceCardProps {
  id: string;
  title: string;
  description?: string | null;
  href: string;
}

export default function DatabaseServiceCard({
  id,
  title,
  description,
  href,
}: DatabaseServiceCardProps) {
  return (
    <Link
      href={`${href}/${id}`}
      className="spiritual-card group block p-6"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-red-900 group-hover:text-white">
        <span className="text-xl">ॐ</span>
      </div>

      <h2 className="text-xl font-bold text-red-950">
        {title}
      </h2>

      {description && (
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-amber-950/65">
          {description}
        </p>
      )}

      <div className="mt-5 text-sm font-semibold text-amber-700">
        अधिक माहिती →
      </div>
    </Link>
  );
}
