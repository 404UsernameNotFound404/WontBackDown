import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    width: 40%;
    @media (max-width: 800px) { 
        width: 90%;
        margin: auto;
        margin-bottom: 1em;
    }
    margin-bottom: 1em;
`;

const Image = styled.img`
    width: 75%;
    border-radius: 50%;
    border: white 0.2em solid;
    margin: auto;
    display: block;
`;

const Name = styled.h3`
    margin: 0.25em;
`;

const Contact = styled.h4`
    margin: 0.2em;
`;

const Title = styled.h1`
    margin: 0.25em;
    font-size: 1.75em;
`;

function Minister(props) {
    const { title, email, phone, img, name } = props;
    return (
        <Component>
            <Title>{title}</Title>
            <Name>{name}</Name>
            <Contact>{email}</Contact>
            <Contact>{phone}</Contact>
        </Component>
    );
}

export default Minister;