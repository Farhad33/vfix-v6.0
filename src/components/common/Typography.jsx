'use client'
import { Theme } from "./Theme"
import styled from "styled-components"

export default function Typography({
    variant,
    children,
    className,
    onClick,
    as,
}) {

    return (
        <TypographyRoot
            as={as || Theme.typography.component[variant]}
            $variant={variant}
            className={className}
            onClick={onClick}
        >
            {children}
        </TypographyRoot>
    );
}

const TypographyRoot = styled.span`
  font-size: ${({$variant}) => Theme.typography.fontSize[$variant]};
  line-height: ${({$variant}) => Theme.typography.lineHeight[$variant]};
  font-weight: ${({$variant}) => Theme.typography.fontWeight[$variant]};
`