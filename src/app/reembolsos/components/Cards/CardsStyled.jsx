import Link from "next/link";
import styled from "@emotion/styled";

export const CardsStyled = styled(Link)`
padding: 4rem 2rem;
background-color: white;
color: #23282F;
border-radius: 0.375rem;
box-shadow: 0px 4px 4px 0px #0A0F1E29;
border: 0.05rem solid #CBD4E1;
text-decoration: none;


&:hover, &:active{
    background-color: #F1F4F9;
}
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;


    svg {
        width: 48px;
        height: 48px;
    }
`