import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export const LoginField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex:1;
  gap: 1rem;
  padding: 0.75rem;
  margin: 0 auto;
  min-width: clamp(350px, 20vw, 550px);
  /* border: 2px solid goldenrod; */

  @media (max-width: 481px) {
    width: 100%;
    min-width: auto;
  }

`;

export const Logo = styled(Image)`
  width: 35%;
`;

export const InputArea = styled.input`
  margin-block-end: 0.7rem;
  height: 2.815rem;
  width: 22.925rem;
  padding: 0.75rem 0.825rem;
  border-radius: 0.375rem;

  
  &::placeholder-shown {
    color: black;
  }

  &:hover {
    border: 0.05rem solid #23282f;
    border-radius: 0.375rem;
  }

  &:focus,
  &:active {
    outline: 0.255rem solid #cbd4e1;
    outline-offset: 0.0450rem;
    border: 0 solid #23282f;
    border-radius: 0.375rem;
  }
`;

export const InputField = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 2px solid purple; */
  padding: 0.5em;
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid darkcyan; */
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #23282f;
  margin: 0.75rem;
  text-align: center ;
  line-height: 1.5;
  /* border: 2px solid blue; */
`;
export const Paragraph = styled.p`
  color: #0844c4;
  font-size: 1rem;
  font-weight: 700;
  margin-block-end: 0.75rem;
`;

export const ForgotMyPassword = styled(Link)`
  text-decoration: none;
  color: #23282f;
  text-decoration-line: none;
  text-align: center;
  /* border: 2px solid darkkhaki; */
`;
