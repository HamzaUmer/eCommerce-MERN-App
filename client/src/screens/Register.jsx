import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiInvoke";


const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
    rgba(255,255,255,0.2),
    rgba(255,255,255,0.2)
    ),
    url("https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80") 
    center;
    background-size: cover;
    display: flex;
    align-items:center;
    justify-content: center;
    
`
const Wrapper = styled.div`
    padding:20px;
    width: 40%;
    background-color:#feebef;
    border-radius: 10px;
    ${mobile({width: "80%"})}
`
const Form = styled.form`
     display: flex;
     flex-wrap: wrap
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: purple;
`
const Input = styled.input`
      flex:1;
      min-width: 40%;
      margin: 20px 10px 0px 0px;
      padding:10px;
`
const Agreement = styled.span`
      font-size:14px;
      margin: 20px 0px;
`
const Button = styled.button`
      width:40%;
      border:none;
      padding:15px 20px;
      background-color:#800000;
      color: white;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.5s ease-in;
      &:hover {
        background-color:white;
        border: 1px solid #800000; 
        color: #800000;
       }
       &:disabled {
        color: #000000;
        cursor: not-allowed;
    }
`
const Error = styled.span`
      color: red;
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password" type="password"/>
                    <Agreement>By creating an account, I consent to the processing of my personal
                     data in accordance with the <b>PRIVACY POLICY</b>
                     </Agreement>
                     <Button>REGISTER</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
