import * as React from "react";
import { Flex, useBoolean, Box, Text, Hide, Button } from "@chakra-ui/react";

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}
export const Layout = ({ sidebar, children }: Props) => {
  return (
    <LayoutProvider>
      <Flex h="100vh">
        <SidebarLayout>{sidebar}</SidebarLayout>
        <ContentLayout>{children}</ContentLayout>
      </Flex>
    </LayoutProvider>
  );
};
interface SidebarLayoutProps {
  children: React.ReactNode;
}
function SidebarLayout({ children }: SidebarLayoutProps) {
  const {
    isMobileSidebarStretched,
    toggleMobileSidebarToStretched,
  } = useLayout();
  return (
    <Box
      w={[isMobileSidebarStretched ? "100%" : 0, "30%", "20%"]}
      bg="green.500"
    >
      {children}
      {isMobileSidebarStretched ? (
        <Hide above="sm">
          <Button onClick={toggleMobileSidebarToStretched}>
            select someone
          </Button>
        </Hide>
      ) : null}
    </Box>
  );
}
interface ContentLayoutProps {
  children: React.ReactNode;
}
export const ContentLayout = ({ children }: ContentLayoutProps) => {
  const { isMobileSidebarStretched } = useLayout();
  return (
    <Box flex="1" w={[isMobileSidebarStretched ? 0 : "100%", "70%", "80%"]}>
      {children}
    </Box>
  );
};

const LayoutContext = React.createContext({
  isMobileSidebarStretched: false,
  toggleMobileSidebarToStretched: () => {},
});
export function useLayout() {
  const context = React.useContext(LayoutContext);
  if (!context) {
    throw new Error(`useLayout must be used within a LayoutProvider`);
  }
  return context;
}

interface ILayoutProvider {
  children: React.ReactNode;
}
function LayoutProvider(props: ILayoutProvider) {
  const [flag, setFlag] = useBoolean();
  const value = {
    isMobileSidebarStretched: flag,
    toggleMobileSidebarToStretched: setFlag.toggle,
  };
  return <LayoutContext.Provider value={value} {...props} />;
}
