import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export const LoginField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem;
  margin: 0 auto;
  min-width: 550px;
  /* border: 2px solid goldenrod; */
`;

export const Logo = styled(Image)`
  width: 35%;
`;

export const InputArea = styled.input`
  margin-block-end: 0.7rem;
  height: 2.815rem;
  width: 22.925rem;
  padding: 0.75rem, 0.8125rem;

  &:hover {
    border: 0.05rem solid #23282f;
    border-radius: 0.075rem;
  }

  &:focus,
  &:active {
    outline: 5px solid #cbd4e1;
    outline-offset: 3px;
    border: 0 solid #23282f;
    border-radius: 0.075rem;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid purple; */
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
`;
