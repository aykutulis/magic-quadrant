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
