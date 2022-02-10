import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiInvoke";


const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
    rgba(255,255,255,0.2),
    rgba(255,255,255,0.2)
    ),
    url("https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
    center;
    background-size: cover;
    display: flex;
    align-items:center;
    justify-content: center;
    
`
const Wrapper = styled.div`
    padding:20px;
    width: 25%;
    background-color:#eaeaff;
    border-radius: 10px;
    ${mobile({width: "75%"})}
`
const Form = styled.form`
     display: flex;
     flex-direction:column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: #000020;
`
const Input = styled.input`
      flex:1;
      min-width: 40%;
      margin: 10px 0;
      padding:10px;
`
const Button = styled.button`
      width:40%;
      border:none;
      padding:15px 20px;
      background-color:#000020;
      color: white;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.5s ease-in;
      margin-bottom:10px;
      &:hover {
        background-color:white;
        border: 1px solid #000020; 
        color: #000020;
       }
      &:disabled {
          color: #000000;
          cursor: not-allowed;
      }
`
const Link = styled.a`
     margin: 5px 0px;
     font-size: 12px;
     text-decoration:underline;
     cursor:pointer;
`
const Error = styled.span`
      color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
                    <Input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
                    <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>FORGET PASSWORD?</Link>
                    <Link to="/register">CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
