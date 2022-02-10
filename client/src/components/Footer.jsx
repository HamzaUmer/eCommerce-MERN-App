import { Facebook, Instagram, Mail, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
       display: flex;
       ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
       flex:1;
       display: flex;
       flex-direction: column;
       padding: 20px;
`
const Logo = styled.h1`
      color: #800000;
      font-weight: 600;
`
const Desc = styled.p`
     margin: 20px 0px;
`
const SocialContainer = styled.div`
      display:flex;
`
const SocialIcon = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: white;
      background-color: #${props=> props.color};
      display:flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      &:hover {
        transform: translateY(-10%);
        transition: ease 1s;
      }
`
const Center = styled.div`
       flex:1;
       padding: 20px;
       ${mobile({ display: "none" })}
`
const Title= styled.h3`
        margin-bottom: 30px;

`
const List= styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display:flex;
        flex-wrap: wrap;
        cursor:pointer;
`
const ListItem= styled.li`
        width: 50%;
        margin-bottom:10px;
        &: hover {
            color: #800000;
            font-weight: 700;
        }
`
const Right = styled.div`
        flex:1;
        padding: 20px;
        ${mobile({ backgroundColor: "#eaeaff"})}
`
const ContactItem = styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items: center;
`
const Payment = styled.img`
         width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ARmart.</Logo>
                <Desc>You can buy Any Outfit and wearable items from Our e-Store. We love to sale a good Products
                    to our customers with reasonable price. We sell every season collection for Mens, Womens and Kids.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5995">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E44054">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                  <Room style={{marginRight:"10px"}}/> R-1757 Gulshan-e-Mustafa, Dastagir Karachi
                </ContactItem>
                <ContactItem>
                   <Phone style={{marginRight:"10px"}}/> +923456789101
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> contact@armart.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
