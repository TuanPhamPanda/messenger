"use client";

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

export default function Home() {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 lg:block h-full ", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
}
