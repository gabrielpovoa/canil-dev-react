import React from 'react'
import styled from 'styled-components'

import bannerAll from '../../images/allanimals.jpg'

import { BannerContent, Content } from './style'

const Container = styled.div`
    background-image: url(${bannerAll});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;


    max-height: 100%;
    height: 30rem;
    
    padding: 2rem 5%;

`;


const Banner = () => {
    return <>
        <Container>
            <BannerContent>
                <Content>TODOS OS ANIMAIS</Content>
            </BannerContent>
        </Container>
    </>
}

export default Banner