"use client";

import { MainContentWrapper } from "./style";
import Header from "./(components)/Header/Header";
import Breadcrumb from "./(components)/Breadcrumb/Breadcrumb";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function MainContent({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <MainContentWrapper>
          <Breadcrumb />
          {children}
        </MainContentWrapper>
      </QueryClientProvider>
    </>
  );
}
