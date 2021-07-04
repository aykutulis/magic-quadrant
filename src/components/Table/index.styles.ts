import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-left: 1.5rem;
`;

interface TableHeaderProps {
  width?: string;
}

export const TableHeader = styled.th<TableHeaderProps>`
  ${({ width, theme: { colors } }) => css`
    font-family: sans-serif;
    font-size: 12px;
    text-align: center;
    padding: 2px 0;
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    width: ${width || '6rem'};
    border-radius: 4px;
  `}
`;

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
  `}
`;

interface ButtonProps {
  fluid?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ fluid, theme: { colors } }) => css`
    background-color: ${colors.LIGHT_GREY};
    transition: all 0.3s ease;
    border: 1px solid ${colors.LIGHT_BLUE};
    border-radius: 4px;
    padding: 5px 10px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    width: ${fluid && '100%'};

    :hover {
      background-color: ${colors.DARK_GREY};
      color: ${colors.WHITE};
    }
  `}
`;
