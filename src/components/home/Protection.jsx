"use client"
import Image from "next/image"
import styled from 'styled-components'
import { DotLottiePlayer } from '@dotlottie/react-player'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'

export default function Protection() {

    return (
        <ProtectionContainer>
            <Container column>
                <Typography variant="h2" >$1 Million Property Protection</Typography>
                <Typography variant="body3" >We want to make you feel safe. So, when you book with us, we protect your property up to $1,000,000 against any possible damage.</Typography>
            </Container>
            <LottiePlayer
                src="/protection/HomeCoverage.lottie"
                autoplay
                loop
                mode="normal"
            />
            <Wave src="./protection/wave.svg" width="500" height="500" alt="wave" />
        </ProtectionContainer>
    )
}

const ProtectionContainer = styled(Container)`
    position: relative;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 50px;
    color: white;
    margin-top: 10vw;
    @media screen and (max-width: 940px) {
        padding: 0 10px;
        flex-wrap: wrap;
    }
    h2 {
        margin-bottom: 5px;
    }
`
const LottiePlayer = styled(DotLottiePlayer)`
    width: 40%;
    height: auto;
`
const Wave = styled(Image)`
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -1;
    @media screen and (max-width: 940px) {
        top: -12vw;
    }
`