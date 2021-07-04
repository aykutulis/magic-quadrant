import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Container } from './App.styles';
import Chart from './components/Chart';
import Table from './components/Table';
import { theme } from './styles/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Chart />
        <Table />
      </Container>
    </ThemeProvider>
  );
};

export default App;
