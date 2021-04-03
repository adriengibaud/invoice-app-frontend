import Auth from 'components/Auth';
import Home from 'components/Home';
import NavBar from 'components/NavBar/NavBar';
import Invoice from 'components/Invoice';
import GlobalStyle from 'global.style';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/invoice">
              <Invoice />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
