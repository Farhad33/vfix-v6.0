'use client'
import styled from 'styled-components'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'
import VfixLogoSvg from '@/svg/VfixLogoSvg'

export default function Footer() {

    const handleBookNow = () => {
		Zenbooker.showPopupWidget('https://widget.zenbooker.com/book/1602564569602x960307736376989400?embed=true')
	}

    return (
        <FooterContainer column>
            <TopContainer column center>
                <Typography variant='h2'>We Offer Awesome Services</Typography>
                <Typography variant='body1'>At VFIX we believe in providing exceptional customer service, and we&apos;re always ready to answer any questions or concerns you may have.</Typography>
                <Button onClick={handleBookNow} variant='secondary'>Book Now</Button>  
            </TopContainer>
            <BottomContainer>
                <Container column>
                    <VfixLogoSvg />
                    <SubTitle variant='body1'>VFIX offers a wide range of professional home services including TV mounting, furniture assembly, and more. Experience quality, efficiency, and peace of mind with our expert technicians.</SubTitle>
                </Container>
                <Container column>
                    <Title variant='body4'>Services</Title>
                    <SubTitle variant='body1'>TV Mounting</SubTitle>
                    <SubTitle variant='body1'>Wall Hanging</SubTitle>
                    <SubTitle variant='body1'>Outdoor Equipment</SubTitle>
                    <SubTitle variant='body1'>Furniture Assembly</SubTitle>
                </Container>
                <Container column>
                    <Title variant='body4'>Quick Links</Title>
                    <SubTitle variant='body1'>Services</SubTitle>
                    <SubTitle variant='body1'>Contact</SubTitle>
                    <SubTitle variant='body1'>Blog</SubTitle>
                </Container>
            </BottomContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled(Container)`
    margin-top: 150px;
    background: linear-gradient(180deg, #0C1A54 0%, #030434 49%);
    padding: 50px;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
    transition: all 0.3s ease-in-out;
`
const TopContainer = styled(Container)`
    background-color: ${color.VfixBlue};
    color: white;
    padding: 30px 10px;
    margin: 0 100px;
    border-radius: 30px;
    position: relative;
    top: -150px;
    p {
        margin: 20px 0;
    }
    @media (max-width: 768px) {
        display: none;
    }
    transition: all 0.3s ease-in-out;
`
const BottomContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: white;
    gap: 20px;
    div {
        margin: auto;
    }
    svg {
        width: 100px;
        height: auto;
        margin-bottom: 10px;
    }
`
const Title = styled(Typography)`
    color: ${color.white};
    margin-bottom: 5px;
`
const SubTitle = styled(Typography)`
    color: ${color.gray};
`