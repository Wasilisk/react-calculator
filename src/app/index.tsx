import React from 'react';

import { CalculatorPage } from 'pages/calculator';

import { GlobalStyles } from './styles/global-styles';

import { withProviders } from './providers';

const App = () => (
  <React.StrictMode>
    <CalculatorPage />
    <GlobalStyles />
  </React.StrictMode>
);

export default withProviders(App);
