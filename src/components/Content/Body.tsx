import * as React from "react";

import { useActiveUser, useLayout } from "../../context";
import { MessageList } from "./MessageList";
import { Center, Tag } from "@chakra-ui/react";

export function Body() {
  const { id } = useActiveUser();
  const { toBottom } = useScroll();
  const { isMobileSidebarStretched } = useLayout();
  React.useEffect(() => {
    if (id) {
      toBottom();
    }
  }, [id, toBottom]);
  return (
    <>
      {id ? (
        <MessageList />
      ) : isMobileSidebarStretched ? null : (
        <Info>Select a chat to start messaging</Info>
      )}
    </>
  );
}

interface IInfo {
  children: React.ReactNode;
}
export function Info({ children }: IInfo) {
  return (
    <Center h="100%" color="white">
      <Tag>{children}</Tag>
    </Center>
  );
}

export function useScroll() {
  return {
    toBottom: () => {
      const el = document.querySelector(".scrollable-area") as HTMLDivElement;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    },
  };
}
