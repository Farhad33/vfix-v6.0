'use client'
import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import axios from 'axios'
import Container from '@/components/common/Container'
import Typography from '@/components/common/Typography'
import Button from '@/components/common/Button'
import { color } from '@/components/common/Theme'

export default function Contact() {
    const name = useRef()
    const email = useRef()
    const phone = useRef()
    const message = useRef()
    const [ success, setSuccess ] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        const payload = {
            name: name.current.value,
            email: email.current.value,
            tel: phone.current.value,
            text: message.current.value,
        }
        axios.post('https://myvfix.com/api/email', payload)
        .then(() => {
            name.current
            email.current
            phone.current
            message.current
            setSuccess(true)
        })
        .catch( console.log )
    }

    const phoneValidation = (event) => {
        if(event.target.value.length === 10) {
            event.target.setCustomValidity("")
        } else {
            event.target.setCustomValidity("Phone number must be 10 digits long.")
        }
    }

    if(success) return <SuccessfulSubmission variant='h2'>Your  message has been sent successfully!</SuccessfulSubmission>

    return (
        <MainContainer column>
            <Typography variant='h5'>Contact Us</Typography>
            <Typography variant='h2'>Send A Message</Typography>
            <Typography variant='body2'>Have questions about our services? Need to schedule an appointment? We&apos;re here to help. Contact us at (855) 955-8349 or fill out our online form. Our customer service team is available to assist you with your needs. </Typography>
            <Form onSubmit={onSubmitForm}>
                <Input
                    name="name"
                    ref={name}
                    placeholder='Your Name'
                    required
                />
                <Input
                    name="email"
                    ref={email}
                    placeholder='Your E-Mail'
                    required
                    type="email"
                />
                <Input
                    name="phone"
                    ref={phone}
                    placeholder='Your Phone Number'
                    required
                    pattern="[0-9]{10}"
                    onInvalid={phoneValidation}
                    onInput={phoneValidation}
                    maxLength={10}
                />
                <TextArea
                    ref={message}
                    rows='15'
                    name="message"
                    placeholder='Your Message'
                    required
                />
                <Button size='large'>Submit</Button>
            </Form>

        </MainContainer>
    )
}

const SuccessfulSubmission = styled(Typography)`
    text-align: center;
    height: 25vh;
    margin-top: 50px;
`
const Form = styled.form`
    display: grid;
    gap: 30px;
    grid-template-areas:
        'name email phone'
        'message message message';
    @media screen and (max-width: 840px) {
        grid-template-areas:
            'name'
            'email'
            'phone'
            'message';
    }
`
const inputStyles = css`
    border: none;
    outline: none;
    padding: 20px;
    background: ${color.gray};
    border-radius: 20px;
`
const fontStyle = css`
    font-size: 18px;
`
const Input = styled.input`
    ${inputStyles}
    ${fontStyle}
    grid-area: ${({name}) => name};
`
const TextArea = styled.textarea`
    ${inputStyles}
    ${fontStyle}
    grid-area: message;
`
const MainContainer = styled(Container)`
    padding: 50px;
    h5, h2, p {
        margin-bottom: 50px;
    }
`
