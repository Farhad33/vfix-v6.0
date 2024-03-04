'use client'
import Styled, { css } from 'styled-components'
import { color, Theme } from '@/components/common/Theme'

export default function Button({ children, onClick, className, variant='primary', size='small' }) {
    return (
        <ButtonComponent
            onClick={onClick}
            className={className}
            $variant={variant}
            $size={size}
        >
            {children}
        </ButtonComponent>
    )

}

const ButtonComponent = Styled.button`
    display: inline-block;
    white-space: nowrap;
    overflow: visible;
    min-width: min-content;
    max-width: max-content; 
    font-size: ${({ $size }) => Theme.button.size[$size].fontSize};
    font-weight: ${({ $size }) => Theme.button.size[$size].fontWeight};
    color: ${({ $variant }) => Theme.button.variant[$variant].color};
    background-color: ${({ $variant }) => Theme.button.variant[$variant].background};
    line-height: 25px;
    padding: ${({ $size }) => Theme.button.size[$size].padding};
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    border: 0;
    cursor: pointer;
    ${({ $variant }) => $variant === 'secondary' && css`border: 2px solid ${color.VfixBlue};`}
    &:hover {
        background-color: ${color.black};
        color: ${color.white};
    }
`