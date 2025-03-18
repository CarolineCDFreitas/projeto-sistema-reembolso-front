import styled from "@emotion/styled";

export const BreadcrumbStyled = styled.ul`
  display: flex;
  /* border: 2px solid darkblue; */
  

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    /* border: 2px solid saddlebrown; */
    list-style: none;
    padding: 0.25rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    svg + svg {
      color: #cbd4e1;
    }

    svg:not(:has(+ svg)) {
      color: #cbd4e1;
    }

    a {
      text-decoration: none;
      color: #23282f;
    }
  }
`;

export const BreadcrumbContainer = styled.nav`
  /* margin: 1.5625rem; */
  /* border: 2px solid magenta; */
  /* position: fixed;
  left: 100px;
  top: 1.5625rem;
  z-index: 2; */
  
`;
