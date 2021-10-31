import * as React from "react";
import { Box } from "@chakra-ui/react";

import { useLayout } from "../../context";
import { UserList } from "./UserList";

export function Sidebar() {
  const { isMobileSidebarStretched, isMobileContentManualClose } = useLayout();
  if (isMobileSidebarStretched && !isMobileContentManualClose) {
    return null;
  }
  return (
    <Box
      w={["100%", "30%", "20%"]}
      bg="white"
      borderRight="1px"
      borderColor="gray.300"
    >
      <UserList />
    </Box>
  );
}
