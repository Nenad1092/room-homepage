import React from 'react'
import styled from 'styled-components'
import AboutDark from './AboutDark'
import AboutFurnitere from './AboutFurnitere'
import AboutLight from './AboutLight'


function About() {
    return (
        <Container>
            <AboutDark />
            <AboutFurnitere />
            <AboutLight />
        </Container>        
    )
}

export default About
const Container = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    
    @media (max-width: 768px) {
         width: 100%;
        flex-direction: column;
    }
    
        
    
`