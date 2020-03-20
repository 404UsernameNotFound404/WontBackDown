import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 100%;
    height: 20em;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

function MediaGalleryImage(props) {
    return (
        <Component>
            <Image src = {props.img} />
        </Component>
    );
}

export default MediaGalleryImage;