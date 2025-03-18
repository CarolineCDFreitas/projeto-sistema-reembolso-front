"use client";

import { MainContentWrapper } from "./style";
import Header from "./components/Header/Header";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

export default function MainContent({ children }) {
  return (
    <>
      <Header />
      <MainContentWrapper>
        <Breadcrumb />
        {children}
      </MainContentWrapper>
    </>
  );
}
