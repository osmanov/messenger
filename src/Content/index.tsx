import * as React from "react";
import { Box, Hide, Button, Textarea } from "@chakra-ui/react";
import { useLayout } from "../Layout";

function Header() {
  const { toggleMobileSidebarToStretched } = useLayout();
  return (
    <Box bg="blue.500" h="10%">
      <Box w={[100, 0]}>
        <Hide above="sm">
          <Button onClick={toggleMobileSidebarToStretched}>Menu</Button>
        </Hide>
      </Box>
      name
    </Box>
  );
}

function Body() {
  return (
    <Box bg="yellow.100" h="75%" overflow="scroll">
      messages
    </Box>
  );
}

function Footer() {
  return (
    <Box h="15%" display="flex" alignItems="center" paddingX={5}>
      <Textarea placeholder="Write a message..." />
    </Box>
  );
}

export const Content = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
