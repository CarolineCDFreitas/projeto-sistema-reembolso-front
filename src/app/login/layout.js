"use client";

import { Container, ImageStyle } from "./style.js";

import backgroundImage from "../../assets/backgroundLogin.png";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function LoginLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <ImageStyle src={backgroundImage} alt="Navio cargueiro" priority />
        {children}
      </Container>
    </QueryClientProvider>
  );
}
