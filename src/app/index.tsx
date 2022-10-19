import React from 'react';

import { CalculatorPage } from 'pages/calculator';

import { GlobalStyles } from './styles/global-styles';

const App = () => {
  return (
    <React.StrictMode>
      <CalculatorPage/>
      <GlobalStyles/>
    </React.StrictMode>
  );
}

export default App;
