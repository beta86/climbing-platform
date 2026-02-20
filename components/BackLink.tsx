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

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={className ?? "inline-block text-base text-stone-400 hover:text-stone-200 mt-6"}
    >
      <FontAwesomeIcon
        icon={faMountain}
        size="lg"
        className="mr-2 inline-block rotate-[-90deg]"
      />
      {children ?? "Back"}
    </button>
  );
}
