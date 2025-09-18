import styled from "@emotion/styled";
import Image from "next/image";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  /* border: 2px solid darkmagenta; */
  width: 45%;
  padding: 0.5em;

  @media (max-width: 481px) {
    width: 100%;
    margin-inline: auto;
    gap: 0.7rem;
    padding: 0;
  }

  @media (min-width: 481px) and (max-width: 1281px) {
    gap: 0.7rem;
    width: max-content;
  }
`;

export const Heading = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid darkgreen; */
  gap: 0.3rem;
  margin: 0 1rem 0 1rem;
  margin-block-end: 1.3rem;

  h1 {
    padding: 0.5rem;
  }

  @media (max-width: 481px) {
    margin: 0;
    margin-block-end: 0;
    gap: 0;

    h3 {
      text-align: center;
      /* border: 2px solid darkolivegreen; */
    }
  }
`;

export const Logo = styled(Image)`
  margin: clamp(0.9rem, 5vh, 1.2rem);
  @media (max-width: 1023px) {
    width: 20%;
    height: 20%;
  }
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid blue; */
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;
  gap: 0.3rem;
  /* border: 2px solid darkblue; */
  border: none;
  padding: 0.5em;

  label {
    margin-block-end: 0.2rem;
    text-align: left;
    /* border: 2px solid hotpink; */
    width: fit-content;
  }

  legend {
    color: transparent;
    width: 0;
    height: 0;
  }

  fieldset:last-of-type {
    margin-block-end: 1rem;
  }

  @media (max-width: 481px) {
    margin-block-start: 1.5rem;
  }
`;

export const FieldsetContainer = styled.fieldset`
  display: flex;
  gap: 0.8rem;
  border: none;

  @media (max-width: 481px) {
    flex-direction: column;
  }
`;

export const FieldsetContent = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid blue; */
`;
