import Login from 'routes/Login';
import Home from 'routes/Home';
import NavBar from 'components/NavBar/NavBar';
import Invoice from 'routes/Invoice';
import GlobalStyle from 'global.style';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';
import InvoicesList from 'routes/InvoicesList';
import { useSelector } from 'react-redux';
import { selectUserName } from 'reducers/userSlice';

function App() {
  const userName = useSelector(selectUserName);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <NavBar />

          <Switch>
            <Route path="/login">{userName ? <Redirect to="/invoice" /> : <Login />}</Route>
            <Route path="/invoice/:id">{userName ? <Invoice /> : <Redirect to="/login" />}</Route>
            <Route path="/invoice">{userName ? <InvoicesList /> : <Redirect to="/login" />}</Route>
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
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
