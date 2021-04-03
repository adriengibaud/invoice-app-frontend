import Auth from 'components/Auth';
import Home from 'components/Home';
import NavBar from 'components/NavBar/NavBar';
import Invoice from 'components/InvoicesList/Invoice';
import GlobalStyle from 'global.style';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';
import InvoicesList from 'components/InvoicesList/InvoicesList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <NavBar />

          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/invoice/:id">
              <Invoice />
            </Route>
            <Route path="/invoice">
              <InvoicesList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.white};
  height: 100vh;
  width: 100vw;
`;
