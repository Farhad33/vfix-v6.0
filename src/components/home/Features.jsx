'use client'
import styled from 'styled-components'
import Container from '@/components/common/Container'
import featuresData from './featuresData.json'
import Feature from './Feature'

export default function Features() {    
    return (
        <MainContainer column center>
            <FeaturesContainer>
                {featuresData.map((feature) => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </FeaturesContainer>
        </MainContainer>
    )
}

const FeaturesContainer = styled(Container)`
    display: grid;
    gap: 40px;
    padding: 20px 150px;
    grid-template-columns: repeat(2, 1fr);
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 940px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 20px 30px;
    }
`
const MainContainer = styled(Container)`
    margin-top: 50px;
`