import { useMemo } from "react";

import { useParams, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";

import useConversation from "./useConversation";

const useRouters = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const routers = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );
  return routers;
};

export default useRouters;
