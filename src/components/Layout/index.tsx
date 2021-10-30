import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useLayout, ActiveProvider, LayoutProvider } from "../../context";

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}
export const Layout = ({ sidebar, children }: Props) => {
  return (
    <ActiveProvider>
      <LayoutProvider>
        <Flex h="100vh">
          <SidebarLayout>{sidebar}</SidebarLayout>
          <ContentLayout>{children}</ContentLayout>
        </Flex>
      </LayoutProvider>
    </ActiveProvider>
  );
};
interface SidebarLayoutProps {
  children: React.ReactNode;
}

function SidebarLayout({ children }: SidebarLayoutProps) {
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
      {children}
    </Box>
  );
}
interface ContentLayoutProps {
  children: React.ReactNode;
}
export const ContentLayout = ({ children }: ContentLayoutProps) => {
  const { isMobileContentManualClose } = useLayout();
  return (
    <Box
      flex="1"
      w={[isMobileContentManualClose ? 0 : "100%", "70%", "80%"]}
      bgGradient="linear(to-r, green.300, yellow.200)"
    >
      {children}
    </Box>
  );
};
