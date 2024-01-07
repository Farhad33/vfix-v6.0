'use client'
import Styled from 'styled-components'
import Image  from 'next/image'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container'
import Typography from '@/components/Typography'

export default function HomePageBox({ link, img, title, description }) {
    const { push } = useRouter()

    return (
        <BoxContainer onClick={() => push(link)}>
            <Image
                src={img}
                width={100}
                height={100}
                alt={title}
            />
            <Container column>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Container>
        </BoxContainer>
    )
}

const BoxContainer = Styled(Container)`
    border: 1px solid #00000013;
    background-color: #f8f8f8;
    margin-top: 30px;
    padding: 20px;
    border-radius: 20px;
    width: 60%;
    box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.5);
    }
    h4 {
        margin: 10px 0;
    }
    img {
        margin-right: 10px;
    }
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 800px) {
        width: 90%;
    }
    @media (max-width: 400px) {
        width: 95%;
        img {
            width: 70px;
            height: 70px;
        }
    }
`