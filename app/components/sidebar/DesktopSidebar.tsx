"use client";

import { useState } from "react";

import { User } from "@prisma/client";

import useRouters from "@/app/hooks/useRouters";

import DesktopSidebarItem from "./DesktopSidebarItem";
import Avatar from "../Avatar";

interface DesktopSidebarProps {
  currentUser: User;
}

export default function DesktopSidebar({ currentUser }: DesktopSidebarProps) {
  const routers = useRouters();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`
        hidden 
        justify-between
        lg:fixed
        lg:inset-y-0
        lg:left-0
        lg:z-40
        lg:w-20
        lg:overflow-y-auto
        lg:bg-white
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        xl:px-6
  `}
    >
      <nav className="mt-4 flex flex-col justify-between">
        <ul
          role="list"
          className="
            flex flex-col items-center space-y-1
        "
        >
          {routers.map((item) => (
            <DesktopSidebarItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-center items-center">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer transition hover:opacity-75"
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
}
