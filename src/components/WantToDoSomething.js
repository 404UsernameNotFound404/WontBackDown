import React from 'react';
import styled from 'styled-components';
import Minister from './Minister';
import { useMediaQuery } from 'react-responsive';

const Component = styled.div`
    width: 100%;
    margin: 1em auto;
    border-radius: 2em;
    border: black thick solid;
    border-radius: 2em;
    @media (max-width: 800px) {
        margin-top: 4em;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 3em;
    margin: 0.25em;
    color: #d90e0e;
    @media (max-width: 800px) {
        font-size: 2.5em;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 800px) {
        display: block;
    }
`;

const FindYourMPTitle = styled.a`
    text-align: center;
    font-size: 2em;
    width: 100%;
    display: block;
    color: blue;
    margin: 0;
    &:hover {
        text-decoration-color: darkblue;
    }
`;

function WantToDoSomething() {
    const isPhone = useMediaQuery({ minDeviceWidth: 600 });

    return (
        <Component>
            <Title>Call Your{!isPhone ? <br/> : " "}Elected Official!</Title>
            <FindYourMPTitle href = {"https://www.ourcommons.ca/members/en"}>Find You MP</FindYourMPTitle>
            <Content>
                <Minister name = {"Jonathan Wilkinson"} title = {"Minister of Environment and Climate Change"} email = {"Jonathan.Wilkinson@parl.gc.ca"} phone = {"613-995-1225"} img = {"https://pm.gc.ca/sites/pm/files/media/minister/no-date/wilkinson_200x200_1.jpg"} />
                <Minister name = {"Marc Miller"} title = {"Minister of Indigenous Services"} email = {"Marc.Miller@parl.gc.ca"} phone = {"613-995-6403"} img = {"https://pm.gc.ca/sites/pm/files/media/minister/2019-11/miller_200x200.jpg"} />
            </Content>
        </Component>
    )
}

export default WantToDoSomething;