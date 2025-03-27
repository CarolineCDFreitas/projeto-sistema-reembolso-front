import styled from "@emotion/styled";

export const DashbardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto auto;
  padding: 1.25rem;

  &:not(h1):not(p):not(:last-child){
    color: #23282F;
  }

`;

export const TextContainer = styled.div`
  h1 {
    margin-block-end: 0.5rem;
  }

`
