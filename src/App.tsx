import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { Container } from './App.styles';
import Chart from './components/Chart';
import Table from './components/Table';
import { theme } from './styles/themes';
import { initialState, reducer } from './store/reducer';
import { Context } from './store/context';

const App: React.FC = () => {
  //const [companies, setCompanies] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Chart />
          <Table />
        </Container>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
