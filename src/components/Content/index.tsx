import * as React from "react";
import { Box } from "@chakra-ui/react";
import { useActiveUser, useLayout } from "../../context";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";

export const Content = () => {
  const { isMobileContentManualClose } = useLayout();
  const { id } = useActiveUser();
  return (
    <Box
      flex="1"
      w={[isMobileContentManualClose ? 0 : "100%", "70%", "80%"]}
      bgGradient="linear(to-r, green.300, yellow.200)"
    >
      {id ? <Header /> : null}
      <Body />
      {id ? <Footer /> : null}
    </Box>
  );
};
