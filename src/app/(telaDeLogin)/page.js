"use client";
import Login from "../../components/Login/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Login />
      </main>
    </QueryClientProvider>
  );
}
