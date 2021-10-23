import React from 'react'
import styled from 'styled-components'

function AboutLight() {
    return (
        <Container>
            <LightImage>
                <img src={process.env.PUBLIC_URL + `/images/image-about-light.jpg`} alt='White Chair' />
            </LightImage>
        </Container>
    )
}

export default AboutLight
const Container = styled.div`
        width: 30%;

    @media (max-width: 768px) {
        width: 100%;
    }
`
const LightImage = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`