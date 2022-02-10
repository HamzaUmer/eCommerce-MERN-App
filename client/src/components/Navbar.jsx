import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div `
       height: 60px;
       ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
      padding : 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ${mobile({padding:"10px 0px"})}
`;
//Left Side Styling
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
     font-size : 14px;
     cursor: pointer;
     ${mobile({display:"none"})}

`;
const SearchContainer = styled.div`
       border: 0.5px solid lightgray;
       display: flex;
       align-items:center;
       margin-left: 25px;
       padding : 5px;
`;
const Input = styled.input`
       border: none;
       ${mobile({width: "50px"})}
`;

//Center Side Styling
const Center = styled.div`
    flex: 1;
`;
const Logo = styled.h1`
     font-weight: bold;
     text-align: center;
     color: #800000;
     ${mobile({fontSize: "24px", marginLeft:" 2px"})}
`;
//Right Side Styling
const Right= styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: "center"})}
`;
const MenuItem = styled.div`
     font-size: 14px;
     cursor: pointer;
     margin-left: 25px;
     transition: all 0.5s ease-out;
     ${mobile({fontSize:"12px", marginLeft: "10px"})}

     &:hover {
         font-weight : 600;
     }
`;

const Navbar = () => {
    const quantity = useSelector(state=> state.cart.quantity);
    return (
         <Container>
             <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
            <Link to="/" style={{cursor: "pointer", textDecoration:"none"}}>
                <Logo>
                   ARmart.
                </Logo>
                </Link>
            </Center>   
            <Right>
            <Link to= "/register" style={{cursor: "pointer", textDecoration:"none", color:"black"}}><MenuItem>REGISTER</MenuItem></Link>
            <Link to="/login" style={{cursor: "pointer", textDecoration:"none",color:"black"}}><MenuItem>LOGIN</MenuItem></Link>
            <Link to = "/cart">
            <MenuItem>
            <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
            </Badge>
            </MenuItem>
            </Link>
            </Right>
            </Wrapper>
            </Container> 
    )
}

export default Navbar
