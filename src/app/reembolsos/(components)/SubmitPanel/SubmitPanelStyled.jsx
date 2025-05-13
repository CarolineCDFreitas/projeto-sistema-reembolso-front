import styled from "@emotion/styled";

export const OutputArea = styled.output`
  display: block;
  width: 9rem;
  height: 2.8125rem;
  padding: 0.75rem 0.8125rem;
  border-radius: 0.375rem;
  border: 0.05rem solid #cbd4e1;
  margin-block-start: 0.5rem;

  span {
    color: #898d93;
  }
`;

export const OutputWrapper = styled.section`
  display: flex;
  gap: 0.625rem;
  margin: 0.2rem;
`;

export const OutputField = styled.div`
  label {
    font-family: inherit;
    font-weight: 700;
  }
`;

export const SubmitPanelSection = styled.section`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 1.25rem;
  height: 8.125rem;
  margin: 0.5rem;

  section + section {
    button {
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
`;
