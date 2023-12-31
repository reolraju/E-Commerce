import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import mobile from '../responsive'



const Container = styled.div`
height:60px;
${mobile({ height: "50px"})};
`
const Wrapper = styled.div`
padding:10px 20px;
display: flex;
justify-content:space-between;
align-items: center;
${mobile({ padding: "10px 0px "})}
`

const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`
const Language = styled.span`
font-size:14px;
cursor: pointer;
${mobile({ display:"none"})}
`

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display:flex;
align-items: center;
margin-left: 25px;
${mobile({ marginLeft: "10px"})}
`
const Input = styled.input`
border: none;
${mobile({ width: "50px"})}
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px"})}
`

const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({ flex:2 ,justifyContent: "center"})}
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px" , marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>

            <Left>
                <Language>EN</Language>
                <SearchContainer>
                        <Input placeholder='search'/>
                        <Search style={{color:"grey", fontSize:20, margin:5}}/>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>REOL.</Logo>
            </Center>

            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar
