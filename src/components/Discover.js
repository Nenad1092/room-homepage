import React from 'react'
import styled from 'styled-components'
import SliderData from './SliderData'


function Discover(props) {
    const slideIndex = props.slideIndex;
    return (
        <Container>
            {SliderData.map((obj, index) => {
                if(index === slideIndex) return (
                    <Wraper key={obj.id}>
                        <DiscoverTitle >
                            {obj.title}
                        </DiscoverTitle>
                        <DiscoverText >
                            {obj.text}
                        </DiscoverText>
                    </Wraper>
                )
                })}
                <DiscoverButton>
                <p>S H O P &nbsp; &nbsp; N O W</p> 
                <img src='/images/icon-arrow.svg' />
            </DiscoverButton>
        </Container>
    )
}

export default Discover
const Container = styled.div`
    text-align: left;
    background: #fff;
        width: 40%;
        padding: 110px 70px 60px 70px;
        position: relative;
        
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Wraper = styled.div``
const DiscoverTitle = styled.h1`
    font-weight: 700;
`
const DiscoverText = styled.p`
    margin: 1.6rem auto 3.6rem;
    color: #a1a1a1;
    font-size: 12px;
    line-height: 1.7;

`
const DiscoverButton = styled.div`
    cursor: pointer;    
   
    
    p{
        display: inline-block;
        padding-right: 1.4rem;
        margin-bottom: 1.6rem;
    }
    :hover{
        color: #a1a1a1;
        img{
            color: #a1a1a1;
        }
    }

    @media (max-width: 880px) {
        font-size: 13px;
         
        p{
            padding-right: 0.7rem;  
        }
    }
    @media (max-width: 780px) {
        font-size: 12px;
         
        p{
            padding-right: 0.5rem;  
        }
    }
`