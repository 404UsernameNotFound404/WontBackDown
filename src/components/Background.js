import React from 'react';
import styled from 'styled-components';
import ProtestPhoto from '../img/protest.jpg';

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -5;
  position: absolute;
  top: 0;
  left: 0;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -5;
`;

const WhiteFilter = styled.div`
  width: 100%;
  height: 100%;
  position:  relative;
  background-color: rgba(255,255,255, 0.75);
`;

function BackgroundComp() {
    return (
        <BackgroundContainer>
            <WhiteFilter>
                <Background src={ProtestPhoto} />
            </WhiteFilter>
        </BackgroundContainer>
    );
}

export default BackgroundComp;