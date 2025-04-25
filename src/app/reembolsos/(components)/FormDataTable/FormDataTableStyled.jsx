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
  height: 15.625rem;
  max-height: 13.75rem;
  overflow-x: auto;
  border-radius: 0.375rem;
  border: 0.05rem solid #cbd4e1;
`;

export const BasicCellContent = styled.span`
  display: block;
  max-width: 8.125rem;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NameCellContent = styled(BasicCellContent)`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const CompanyCellContent = styled(BasicCellContent)`
  text-transform: uppercase;
`;

export const MoreOptionsCell = styled.th`
  position: relative;

  button {
    background-color: transparent;
    display: flex;
    border: none;
    cursor: pointer;
  }

  svg {
    color: #898d93;
    width: 1.125rem;
    height: 1.125rem;
  }

  &:hover,
  &:active {
    background-color: #f1f4f9;
  }
`;

export const CheckboxInputArea = styled.input`
  color: #898d93;

  &:hover {
    color: #23282f;
  }
`;

export const IconContainer = styled.span`
  svg {
    transform: rotate(180deg);
    transform: scaleY(-1);
    height: 1.1875rem;
    width: 1.1875rem;
    color: #898d93;
  }
`;

export const DropdownMenuContainer = styled.nav`
  width: 5.625rem;
  height: 1.25rem;
  position: absolute;
  top: 40%;
  left: 80%;
  z-index: 800;
`;

export const MenuList = styled.ul`
  background-color: #f8fafc;
  box-shadow: 0 0.125rem 0.75rem 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.375rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  li {
    width: 5.625rem;
    padding: 0.5rem;

    display: flex;
    justify-content: space-evenly;
    font-size: 0.875rem;

    a {
      text-decoration: none;
      display: flex;
    }

    span {
      font-family: inherit;
      color: #23282f;
      padding-inline-start: 0.5rem;
    }
    svg {
      width: 0.9375rem;
      height: 0.9375rem;
      color: #63758d;
    }
    &:hover {
      background-color: #e5e7eb;
    }

    &:active,
    &:focus-within {
      background-color: #cbd4e1;
    }
  }
`;
