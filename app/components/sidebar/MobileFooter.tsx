"use client";

import useConversation from "@/app/hooks/useConversation";
import useRouters from "@/app/hooks/useRouters";
import MobileItem from "./MobileItem";

export default function MobileFooter() {
  const routers = useRouters();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
     fixed
     justify-between
     w-full
     bottom-0
     z-40
     flex
     items-center
     bg-white
     border-t-[1px]
     lg:hidden
  "
    >
      {routers.map((item) => (
        <MobileItem
          key={item.label}
          label={item.label}
          href={item.href}
          active={item.active}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
