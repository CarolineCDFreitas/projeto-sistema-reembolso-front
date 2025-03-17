"use client";
import { CardsStyled, Content } from "./CardsStyled";

function Cards({children, ...props}) {
  return (
    <>
      <CardsStyled {...props}>
        <Content>{children}</Content>
      </CardsStyled>
    </>
  );
}

export default Cards;
