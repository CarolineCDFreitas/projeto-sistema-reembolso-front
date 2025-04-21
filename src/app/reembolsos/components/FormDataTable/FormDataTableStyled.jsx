import styled from "@emotion/styled";

export const TableStyled = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  color: #23282f;

  caption {
    visibility: hidden;
    width: 0;
    height: 0;
  }

  thead {
    background-color: #f1f4f9;
    border-top-left-radius: 0.375rem;

    tr:first-of-type {
      th:first-of-type {
        border-top-left-radius: 0.3125rem;
      }
      th:last-of-type {
        border-top-right-radius: 0.3125rem;
      }
    }
  }

  span {
    display: block;
    max-width: 120px;
    white-space: nowrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  th,
  td {
    border: 0.05rem solid #cbd4e1;
    padding: 0.5rem;
    font-weight: inherit;
    text-align: center;
  }
`;

export const Teste = styled.div`
  margin: 0.5rem;
  max-width: 100%;
  height: 200px;
  max-height: 195px;
  overflow-x: auto;
  border-radius: 0.375rem;
  border: 0.05rem solid #cbd4e1;
`;

export const BasicCell = styled.span`
  display: block;
  max-width: 130px;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;
