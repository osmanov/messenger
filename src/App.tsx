import * as React from "react";
import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { ActiveProvider, LayoutProvider } from "./context";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ActiveProvider>
        <LayoutProvider>
          <Flex h="100vh">
            <Sidebar />
            <Content />
          </Flex>
        </LayoutProvider>
      </ActiveProvider>
    </QueryClientProvider>
  </ChakraProvider>
);
