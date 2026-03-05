"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function BackLink({ className, children }: Props) {
  const router = useRouter();
  const baseClassName =
    "inline-block mt-6 text-base text-stone-600 hover:text-orange-600 cursor-pointer transition-colors duration-150";

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      <FontAwesomeIcon
        icon={faMountain}
        size="lg"
        className="mr-2 inline-block -rotate-90"
      />
      {children ?? "Back"}
    </button>
  );
}
