import React from 'react';
import styled from 'styled-components';
import GoogleMapsComponent from './GoogleMap';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Google Maps React App</h1>
      <GoogleMapsComponent />
    </AppContainer>
  );
};

export default App;
