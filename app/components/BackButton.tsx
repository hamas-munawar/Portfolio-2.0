"use client";

import { ArrowLeftIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button type="button" onClick={() => router.back()}>
      <ArrowLeftIcon
        size={24}
        className={`${
          pathname === "/" && "hidden"
        } stroke-3 hover:stroke-brand hover:cursor-pointer hover:scale-150 origin-right transition-all duration-300`}
      />
    </button>
  );
}
