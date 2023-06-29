import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
display: flex;    
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
margin: 20px;
`

const Logo = styled.h1`
    
`

const Desc = styled.p`
  margin: 20px 0px;  
`

const SocialContainer = styled.div`
  display: flex;  
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color: white;
    background-color: #${props=>props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;

`

const Center = styled.div`
flex:1;
padding: 20px;

`

const Title = styled.h3`
  margin-bottom: 30px;  
`

const List = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
   width :50% ;
   margin-bottom: 10px;
   cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>REOL.</Logo>
            <Desc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis perferendis ducimus. Deserunt, veniam esse cum ex facere rerum suscipit tenetur sit explicabo itaque ut perspiciatis mollitia, vel quaerat placeat.
            </Desc>
            <SocialContainer>
                <SocialIcon bg="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon bg="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon bg="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon bg="E60023">
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
                <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+91 7025662940
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight:"10px"}}/>contact@reol.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      
    </Container>
  )
}

export default Footer
