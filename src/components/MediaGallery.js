import React from 'react';
import styled from 'styled-components';
import ProtestPhotoPlaceHolder from '../img/protest.jpg';
import PosterOne from '../img/PosterOne.jpg'
import PosterTwo from '../img/Poster2.jpg'
import { useMediaQuery } from 'react-responsive'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import MediaGalleryImage from './MediaGalleryImage';

const Component = styled.div`

`;

const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 800px) {
        font-size: 2.5em;
    }
`;

const Para = styled.p`
    text-align: center;
    font-size: 1.75em;
    margin: 0;
    margin-bottom: 1em;
    @media (max-width: 800px) {
        font-size: 1.5em;
    }
`;

const Image = styled.img`
    width: 28em;
    height: auto;
    margin-bottom: 1em;
    border-radius: 0.25em;
    @media (max-width: 800px) {
        height: 10em;
        width: auto;
        max-width: 95%;
        margin: auto;
        display: block;
    }
`;

const GalleryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

function MediaGallery() {
    const isPhone = useMediaQuery({ minDeviceWidth: 800 })
    const responsiveDesktop = { 0: { items: 2 } };
    const responsiveMobile = { 0: { items: 1 } };
    return (
        <Component>
            <Title>Media Campaign</Title>
            <Para>Short Desc. Incididunt Lorem magna qui minim. In ullamco duis occaecat Lorem do velit commodo eiusmod. Elit irure esse minim cillum laborum incididunt pariatur consequat consequat commodo quis ipsum pariatur.</Para>
            {!isPhone ? <AliceCarousel keysControlDisabled={false} touchTrackingEnabled infinite={true} responsive={isPhone ? responsiveDesktop : responsiveMobile} stopAutoPlayOnHover autoPlayInterval={4000} buttonsDisabled={true} dotsDisabled={false}>
                    <Image src={PosterTwo} />
                    <Image src={PosterOne} />
                    <Image src={PosterTwo} />
                    <Image src={PosterOne} />
            </AliceCarousel>
                : <GalleryContainer>
                    <Image src={PosterTwo} />
                    <Image src={PosterOne} />
                    <Image src={PosterOne} />
                    <Image src={PosterTwo} />
                </GalleryContainer>}
        </Component>
    )
}

export default MediaGallery;