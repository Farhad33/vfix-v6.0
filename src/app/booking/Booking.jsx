'use client'
import styled, { keyframes, css } from 'styled-components'

export default function Booking() {

    return (
        <Container>
                <div className="zenbooker-inline-widget"
            data-url="https://widget.zenbooker.com/book/1602564569602x960307736376989400?embed=true&fullpage=true"
            ></div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70vh;
    div {
        width: 100%;
        height: 100%;
    }
    #sticky-nav {
        display: none;
    }
`