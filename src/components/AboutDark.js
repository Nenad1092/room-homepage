import React from 'react'
import styled from 'styled-components'

function AboutDark() {
    return (
        <Container>
            <DarkImage>
                <img src={process.env.PUBLIC_URL + `images/image-about-dark.jpg`} />
            </DarkImage>
        </Container>
    )
}

export default AboutDark
const Container = styled.div`
        width: 30%;

    @media (max-width: 768px) {
        width: 100%;
    }
`
const DarkImage = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height:100%;
    }
`