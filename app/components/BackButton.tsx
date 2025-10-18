"use client";

import { ArrowLeftIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group text-xl font-anton cursor-pointer"
    >
      <span
        className={`flex gap-1 justify-center items-center ${
          pathname === "/" && "hidden"
        } `}
      >
        <ArrowLeftIcon
          size={24}
          className={`stroke-3 group-hover:stroke-brand group-hover:scale-125 origin-right transition-all duration-300`}
        />
        Back
      </span>
    </button>
  );
}
