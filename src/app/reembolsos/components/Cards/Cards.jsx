"use client";
import { CardsStyled, Content } from "./CardsStyled";

function Cards({ adjustingPadding, children, ...props }) {
  return (
    <>
      <CardsStyled adjustingPadding={adjustingPadding} {...props}>
        <Content>{children}</Content>
      </CardsStyled>
    </>
  );
}

export default Cards;
