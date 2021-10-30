import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Layout sidebar={<Sidebar />}>
        <Content />
      </Layout>
    </QueryClientProvider>
  </ChakraProvider>
);
