import React from 'react'
import styled from 'styled-components'

function AboutFurnitere() {
    return (
        <Container>
            <AboutTitle>
                <h3>A B O U T &nbsp; O U R &nbsp; F U R N I T U R E</h3>
            </AboutTitle>
            <AboutText>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </AboutText>
        </Container>
    )
}

export default AboutFurnitere
const Container = styled.div`    
        width: 40%;

    @media (max-width: 768px) {
        width: 100%;
    }
`
const AboutTitle = styled.div`
    padding: 4.5rem 2.5rem 1rem 2rem;
    font-size: 12px;
`
const AboutText = styled.div`
    color: #a1a1a1;
    font-size: 12px;
    line-height: 1.7;
    padding: 0 2.5rem 2rem 2rem;
`