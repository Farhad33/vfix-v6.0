'use client'
import styled, { keyframes, css } from 'styled-components'
import Image from "next/image"
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'

export default function HomeTopSection() {
  const description = 'VFIX offers a wide range of professional home services including TV mounting, furniture assembly, and more. Experience quality, efficiency, and peace of mind with our expert technicians.'
  
  const handleBookNow = () => {
		Zenbooker.showPopupWidget('https://widget.zenbooker.com/book/1602564569602x960307736376989400')
	}
  
  return (
    <MainContainer>
      <TopSectionContainer>
        <LeftContainer column>
          <Title variant='h1'>VFIX</Title>
          <Title variant='h1'>Your One-Stop Solution</Title>
          <Title variant='h1'>for Professional Home</Title>
          <Title variant='h1'>Services</Title>
          <Description variant='body2'>{description}</Description>
          <BookService onClick={handleBookNow} variant='secondary' size='large'>Book Service</BookService>
        </LeftContainer>
        <Home src="/main/3d-home.svg" width='1500' height='1500' alt="VFix Home Page" />
      </TopSectionContainer>
      <BlueContainer />
    </MainContainer>
  )
}

const LeftContainer = styled(Container)`
`
const BookService = styled(Button)`
  margin-top: 50px;
  align-self: center;
`
const Title = styled(Typography)`
  color: white;
  margin-bottom: 5px;
`
const Description = styled(Typography)`
  color: white;
  width: calc(5vw + 280px);
  margin-top: 20px;
  @media screen and (max-width: 690px) {
    display: none;
  }
`
const BlueContainer = styled.div`
  background-color: ${color.VfixBlue};
  height: 200px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -2;
`
const MainContainer = styled(Container)`
  width: 100%;
  background-image: url('./wave.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: calc(1vw + 700px);
`
const TopSectionContainer = styled(Container)`
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 690px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
const fadeInHome = keyframes`
  0% {
    top: -200px;
    right: -500px;
  }
  100% {
    top: 0;
    right: 0;
  }
`
const Home = styled(Image)`
	width: calc(15vw + 300px);
	height: calc(15vw + 300px);
  position: relative;
  z-index: 2;
  animation: 1.5s ${fadeInHome} ease-out;
`