import styled, { css } from 'styled-components';

interface TableCellProps {
  hasButton?: boolean;
}

export const TableCell = styled.td<TableCellProps>`
  ${({ hasButton, theme: { colors } }) => css`
    border: ${!hasButton && '1px solid ' + colors.LIGHT_BLUE};
    padding: ${!hasButton && '5px 10px'};
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 14px;

    input {
      border: 0;
      padding: 0;
      width: 100%;
      font-size: inherit;
    }
  `}
`;
