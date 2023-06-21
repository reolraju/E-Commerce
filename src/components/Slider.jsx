import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #eae9e9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left:${props=> props.direction==="left"&& "10px"};
    right:${props=> props.direction==="right"&& "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
 background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
height: 100%;
flex:1;
`
const Image = styled.img`
height: 80%;

`

const InfoContainer = styled.div`
flex:1;
padding: 50px;


`
const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
  padding  : 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 0.5px solid grey;
`

const Slider = () => {
    const [slideINdex, setSlideIndex] = useState()

    const handleClick=(direction)=>{
        
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow> 
        <Wrapper>
            <Slide bg="e8f5c0">
            <ImgContainer>
                <Image src="../assets/pexels-valentin-antonucci-691640.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE</Title>
                <Desc>Get Flat 30% Discount!</Desc>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="a7e7f5">
            <ImgContainer>
                <Image src="../assets/pexels-valentin-antonucci-691640.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>WINTER SALE</Title>
                <Desc>Get Flat 30% Discount!</Desc>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="f5a7f5">
            <ImgContainer>
                <Image src="../assets/pexels-valentin-antonucci-691640.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SPRING SALE</Title>
                <Desc>Get Flat 30% Discount!</Desc>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>    
            <ArrowRightOutlined/>
        </Arrow>
      
    </Container>
  )
}

export default Slider
