import React from 'react';
import styled from 'styled-components';
import WantToDoSomething from './components/WantToDoSomething';
import Background from './components/Background';
import TitleComp from './components/TitleComp';

const Page = styled.div`
  width: 60em;
  margin: auto;
  font-family: 'Scope One', serif;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

function App() {
  return (
    <>
      <Background />
      <Page>
        <TitleComp />
        <WantToDoSomething />
      </Page>
    </>
  );
}

export default App;
