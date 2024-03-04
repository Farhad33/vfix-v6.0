'use client'
import styled from 'styled-components'
import { DotLottiePlayer } from '@dotlottie/react-player'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import { color } from '@/components/common/Theme'

export default function Feature({ title, imageUrl, description }) {

    return (
        <FeatureContainer column>
            <Title variant='h2'>{title}</Title>
            <DotLottiePlayer
                src={imageUrl}
                autoplay
                loop
                mode="normal"
            />
            <Typography variant='body2'>{description}</Typography>
        </FeatureContainer>
    )
}

const Title = styled(Typography)`
    color: ${color.VfixBlue};
`
const FeatureContainer = styled(Container)`
    text-align: center;
    padding: 20px;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    svg {
        width: 100% !important;
        height: 300px !important;
        @media screen and (max-width: 1100px) {
            height: 250px !important;
        }
    }
    box-shadow: 0px 0px 20px -1px rgba(0,174,239,0.8);
    &:hover {
    }
`