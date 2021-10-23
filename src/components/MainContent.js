import React, { useState } from 'react';
import styled from 'styled-components'
import Carousel from './Carousel'
import Discover from './Discover'
import SliderData from './SliderData'

function MainContent() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const next = () => {
        if(slideIndex < SliderData.length - 1){
            setSlideIndex(slideIndex + 1);  
        }else {
            setSlideIndex(0);
        }
    }

    const prev = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else {
            setSlideIndex(SliderData.length - 1)
        }
    }
    return (
        <Container>
            <Header>
                {SliderData.map((obj, index) => {
                if(index === slideIndex) return (
                    <SliderImage key={obj.id}>
                        <img src={process.env.PUBLIC_URL + `${obj.image}`} />
                    </SliderImage>
                )
                })}
                <NavBar isOpen={isOpen}>
                    <Hamburger onClick={() => setIsOpen(!isOpen)}>
                        <img src={isOpen !== true ? 'images/icon-hamburger.svg' : 'images/icon-close.svg'}/>
                    </Hamburger>

                    <Logo isOpen={isOpen}>
                        <img src='images/logo.svg' />
                    </Logo>
                    
                    <Nav isOpen={isOpen}>
                        <a href="">home</a>
                        <a href="">shop</a>
                        <a href="">about</a>
                        <a href="">contact</a>
                    </Nav>
                </NavBar>
                <Carousel prev = {prev} next = {next}/>
            </Header>
            <Discover slideIndex = {slideIndex}/> 
            
        </Container>
    )
}

export default MainContent


const Container = styled.div`
    @media (max-width: 1440px) {
        display: flex;
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`
const SliderImage = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`
const Header = styled.div`
    position: relative;
    @media (max-width: 1440px) {
        width: 60%;
    }
    @media (max-width: 768px) {
        width: 100%;
        position: relative;
    }
`
const NavBar = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 60px;
    left: 65px;
    @media (max-width: 768px) {
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        background: ${props => (props.isOpen ? "white" : "inherit")};
    }
`

const Logo = styled.div`
    z-index = 1;
    width: 55px;
    height: 14px;
    img{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px) {
        display: ${props => (props.isOpen ? "none" : "flex")};
}
`
const Nav = styled.div`
    display: flex;
    margin-left: 35px;
    font-size: 13px;
    font-weight: 600;
    position: relative;
    justify-content: space-between;

    a{
        margin-left: 30px;
        color: white;
        text-decoration: none;
    }
    a: hover {
        color: hsl(0, 0%, 63%);
    }
    @media (max-width: 768px) {
        overflow: hidden;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: ${({ isOpen }) => (isOpen ? "500px" : "0")};
        height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
        a{
            color: black;
        }
    }
`
const Hamburger = styled.div`
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        padding-left: ${props => (props.isOpen ? "0" : "50px")};
    }
`

