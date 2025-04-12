import styled from "@emotion/styled";

export const Message = styled.span`
  position: absolute;
  background-color: #ffe4ea;
  border: solid #a60b2f;
  border-width: 0 0 0 6px;
  color: #a60b2f;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: ${({ compactSpace }) => (compactSpace ? "7.5rem" : "max-content")};
  padding: 0.25rem;
  top: 94%;
  left: 0;
`;
