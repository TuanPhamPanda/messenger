"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

export default function Avatar({ user }: AvatarProps) {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={user?.image || "/images/placeholder.jpg"}
          alt="avatar"
        />
      </div>
      <span
        className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2
       md:w-3 md:h-3
      "
      />
    </div>
  );
}
