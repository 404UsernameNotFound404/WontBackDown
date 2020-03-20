import React from 'react';
import styled from 'styled-components';
import WantToDoSomething from './components/WantToDoSomething';
import Background from './components/Background';
import TitleComp from './components/TitleComp';
import MediaGallery from './components/MediaGallery';

const Page = styled.div`
  width: 60em;
  margin: auto;
  font-family: 'Scope One', serif;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

function App() {
  return (
    <>
      <Background />
      <Page>
        <TitleComp />
        <MediaGallery />
        <WantToDoSomething />
      </Page>
    </>
  );
}

export default App;
