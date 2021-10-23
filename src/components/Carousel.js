import React from 'react'
import styled from 'styled-components'

function Carousel(props) {
    const next = props.next;
    const prev = props.prev
   
    return (
        <Container  >
            <Left onClick={prev}>
                <img src={process.env.PUBLIC_URL +'/images/icon-angle-left.svg'} alt='left arrow'/>
            </Left>
            <Right  onClick={next}  >
                <img src={process.env.PUBLIC_URL +'/images/icon-angle-right.svg'} alt='right arrow'/>
            </Right>
        </Container>
    )
}

export default Carousel

const Container = styled.div`
    display: flex;
    position: absolute;
    z-index: 2;
    @media (max-width: 768px) {
        bottom: 5px;
        right: 0;
    } 
    @media (min-width: 769px) {
        left: 100%;
        bottom: 0px;
    }      
   
      
`
const Left = styled.div`
    width: 67px;
    height: 67px;
    background: black;
    color: (0, 0%, 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    cursor: pointer;
        :hover{
            background:hsl(0, 0%, 27%);
        }
`
const Right = styled.div`
    width: 67px;
    height: 67px;
    background: black;
    color: (0, 0%, 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
        :hover{
            background:hsl(0, 0%, 27%);
        }
`
