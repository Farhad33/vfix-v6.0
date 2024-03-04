'use client'
import Styled from 'styled-components'

export default function Container({ column,
    center,
    children,
    as='div',
    className,
    onClick
}) {
    return (
        <ContainerComponent
            onClick={onClick}
            className={className}
            as={as}
            $column={column}
            $center={center}
        >
            { children }
        </ContainerComponent>
    )
}

const ContainerComponent = Styled.div`
    display: flex;
    flex-direction: ${({ $column }) => $column ? 'column' : 'row'};
    ${({ $center }) => $center ? 'justify-content: center; align-items: center;' : ''}
`