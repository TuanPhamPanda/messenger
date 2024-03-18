"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  label: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

export default function MobileItem({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}: MobileItemProps) {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <Link
      href={href}
      className={clsx(
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:to-black hover:bg-gray-100",
        active && "bg-gray-100 text-black"
      )}
      onClick={handleClick}
    >
      <Icon className="h-6 w-6"/>
    </Link>
  );
}
