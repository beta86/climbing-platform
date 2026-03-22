import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export default function BackNavLink({ href, className, children }: Props) {
  const baseClassName =
    "inline-flex items-center mt-6 text-base text-stone-600 hover:text-orange-600 transition-colors duration-150";

  return (
    <Link
      href={href}
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      <FontAwesomeIcon
        icon={faMountain}
        className="mr-2 inline-block size-4 -rotate-90 shrink-0 align-middle"
      />
      {children ?? "Back"}
    </Link>
  );
}
