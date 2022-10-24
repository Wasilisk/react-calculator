import styled from "styled-components"

import { ButtonProps } from "./types"

export const Button = styled.button<ButtonProps>`
    background: ${({ buttonType = "number" }) => buttonType === "number" ? "#e48900" : "#727171"};
    border: none;
    border-radius: 8px;
    font-size: 24px;
    color: #000000;
    cursor: pointer;

    grid-column-start: ${({ position }) => position && `${position[0] + 1}`};
    grid-column-end: ${({ width }) => width && `span ${width}`};

    grid-row-start: ${({ position }) => position && `${position[1] + 1}`};
    grid-row-end: ${({ height }) => height && `span ${height} `};

    :hover {
        border: 2px solid #ffffff;
    }
`