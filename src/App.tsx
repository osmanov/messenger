import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout sidebar={<Sidebar />}>
      <Content />
    </Layout>
  </ChakraProvider>
);
