'use client'
import { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Button, TextField as MUITextField } from '@mui/material';



export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { push } = useRouter()


    useEffect(() => {
        let jwt = sessionStorage.getItem("jwt");
        if (jwt) {
            push('/admin')
        }
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        axios
        .post('https://strapi.myvfix.com/api/auth/local', {
            identifier: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            sessionStorage.setItem("jwt", response.data.jwt);
            push('/admin')
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
    }

    return (
        <Background>
            <FormContainer>
                <Logo src='logo/VFIX-Circle-logo.png' />
                <Title>Welcome Back</Title>    
                <SubTitle>Enter your credentials to access your account</SubTitle>    
                <Form onSubmit={handleOnSubmit}>
                    <TextField
                        variant="outlined"
                        type="text" 
                        label="Username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value) }
                        value={username}
                    />
                    <TextField
                        variant="outlined" 
                        type="password" 
                        label="Password" 
                        id="password"
                        onChange={(e) => setPassword(e.target.value) }
                        value={password} 
                    />
                    <SignIn
                        type="submit"
                        variant="contained"
                        id="submit"
                    >Sign In</SignIn>
                </Form>
            </FormContainer>
        </Background>        
    )
}

const Background = styled.div`
    height: 100vh;
    background: rgb(0,153,255);
    background: linear-gradient(180deg, rgba(0,153,255,1) 0%, rgba(233,199,255,1) 86%, rgba(255,255,255,1) 99%);
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 90px 20px;
    width: 700px;
    background-color: white;
    border-radius: 20px;
`
const Logo = styled.img`
	cursor: pointer;
	width: 10em;
`
const Title = styled.h1`
    margin-bottom: 15px ;
`
const SubTitle = styled.h3`
    margin-bottom: 20px;
    font-weight: 400;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const TextField = styled(MUITextField)`
    width: 400px;
    margin-bottom: 20px !important;
`
const SignIn = styled(Button)`
    width: 400px;
    padding: 16px !important;
`