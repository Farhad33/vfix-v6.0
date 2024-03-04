'use client'
import { useState } from 'react'
import Styled, { css } from 'styled-components'
import Link  from 'next/link'
import { useRouter } from 'next/navigation'
import VfixLogoSvg from '@/svg/VfixLogoSvg'
import { color } from '@/components/common/Theme'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'

export default function Menu() {
    const [open, setOpen] = useState(false)
    const { push } = useRouter()

    const handleBookNow = () => {
		Zenbooker.showPopupWidget('https://widget.zenbooker.com/book/1602564569602x960307736376989400?embed=true')
	}

    return (
        <Header $open={open}>
            <VfixLogoSvg onClick={() => push('/')}/>
            <Nav $open={open}>
                <Item href="/"><Typography variant='body4'>Home</Typography></Item>
                <Item href="/contactus"><Typography variant='body4'>Contact Us</Typography></Item>
                <Item href="/blog"><Typography variant='body4'>Blog</Typography></Item>
                {/* <Item href="/services"><Typography variant='body4'>Services</Typography></Item> */}
            </Nav>
            <RightContainer $open={open}>
                <Typography variant='body2'>
                    <a href="tel:8559558349" >{`Talk to an expert: (855)955-8349`}</a>
                </Typography>
                <Button onClick={handleBookNow} variant='secondary' size='small' >Book Now</Button>
            </RightContainer>
            <HamMenu
                $open={open}
                onClick={() => setOpen(!open)}
            ><HamSVG /><p>&#10005;</p></HamMenu>
        </Header>
    )
}
const HamMenu = Styled.div`
    display: none;
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media screen and (max-width: 940px) {
        display: flex;
        transition: 0.5s;
        ${({ $open }) => (
            $open ? css`
                position: absolute;
                top: 10px;
                right: 10px;
            ` : css`
                /* position: absolute; */
            `
        )}
    }
    svg {
        display: ${({ $open }) => $open ? 'none' : 'block'};
    }
    p {
        display: ${({ $open }) => $open ? 'block' : 'none'};
        font-size: 30px;
        font-weight: 600;
        color: white;
    }
`
const Header = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 20px;
    margin: 20px;
    border-radius: 60px;
    background: rgba(11, 22, 78, 1);
    box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.3);
    z-index: 11;
    svg {
        width: 150px;
        height: auto;
        cursor: pointer;
    }
    @media screen and (max-width: 940px) {
        transition: 0.5s;
        ${({ $open }) => (
            $open ? css`
                margin: 0;
                border-radius: 0;
                flex-direction: column;
                gap: 30px;
            ` : css`
                margin: 20px;
                border-radius: 60px;
            `
        )}
    }
`
const Nav = Styled.nav`
    display: flex;
    gap: calc(2vw + 5px);
    @media screen and (max-width: 940px) {
        transition: 0.5s;
        ${({ $open }) => (
            $open ? css`
                display: flex;
                flex-direction: column;
            ` : css`
                display: none;
            `
        )}
    }
`
const Item = Styled(Link)`
    color: white;
    text-decoration: none;
    cursor: pointer;
`
const BookNow = Styled.button`
    border-radius: 40px;
    padding: 10px 20px;
    cursor: pointer;
    background: white;
    color: ${color.VfixBlue};
    transition: all 0.3s ease-in-out;
    border: 0;
    &:hover {
        background: black;
    }
`
const PhoneNumber = Styled(Typography)`
    color: white;
    cursor: pointer;
    text-decoration: none;
`
const RightContainer = Styled.div`
    display: flex;
    align-items: center;
    gap: calc(2vw + 5px);
    @media screen and (max-width: 940px) {
        transition: 0.5s;
        ${({ $open }) => (
            $open ? css`
                display: flex;
                flex-direction: column;
            ` : css`
                display: none;
            `
        )}
    }
    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`
const HamSVG = (props) => (
  <svg
    viewBox='0 0 32 32'
    {...props}
    fill='white'
  >
    <path d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z' />
  </svg>
)