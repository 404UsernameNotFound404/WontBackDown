import React from 'react';
import styled from 'styled-components';
import BlackFist from '../img/image.png';
import { useMediaQuery } from 'react-responsive';

const Component = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Title = styled.h1`
    margin: 0;
    text-align: center;
    margin: auto;
    font-size: 6em;
    @media (max-width: 600px) {
        font-size: 5em;
    }
`;

const Image = styled.img`
    height: 90%;
    max-width: 95%;
    display: block;
    margin: auto;
`;

const ImageContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -5;
`;

function TitleComp() {
    const isPhone = useMediaQuery({ minDeviceWidth: 600 });

    return (
        <Component>
            <ImageContainer>
                <Image src={BlackFist} />
            </ImageContainer>
            {isPhone ? <Title>#WONT BACK DOWN</Title> :
            <Title>#WONT<br/>BACK<br/>DOWN<br/></Title>
            }
        </Component>
    );
}

export default TitleComp;