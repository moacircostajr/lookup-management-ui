import React from 'react';
import './App.css';

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './app/pages/Home';
import Login from './app/pages/Login';
import MenuPrincipalResponsivo from './app/components/MenuPrincipalResponsivo';
import Principal from './app/pages/Principal';
import Empresas from './app/pages/Empresas';
import Produtos from './app/pages/Produtos';
import FormularioProduto from './app/components/FormularioProduto';
import FormularioEmpresa from './app/components/FormularioEmpresa';
import Usuarios from './app/pages/Usuarios';
import FormularioUsuario from './app/components/FormularioUsuario';
import Clientes from './app/pages/Clientes';
import FormularioCliente from './app/components/FormularioCliente';



function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'light' : 'dark',
          primary: {
            // Purple and green play nicely together.
            // main: purple[500],
            main: red[900],
          },
          /*
          secondary: {
            // This is green.A700 as hex.
            main: '#ECECEC',
          },
          inherit: {
            // This is green.A700 as hex.
            main: '#FFF',
          },
          */
        },
      }),
    [prefersDarkMode],
  )


  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
          <Route path="/produto/:uuid">
              <MenuPrincipalResponsivo>
                <FormularioProduto />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/produto">
              <MenuPrincipalResponsivo>
                <FormularioProduto />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/produtos">
              <MenuPrincipalResponsivo>
                <Produtos />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/cliente/:uuid">
              <MenuPrincipalResponsivo>
                <FormularioCliente />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/cliente">
              <MenuPrincipalResponsivo>
                <FormularioCliente />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/clientes">
              <MenuPrincipalResponsivo>
                <Clientes />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/usuario/:uuid">
              <MenuPrincipalResponsivo>
                <FormularioUsuario />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/usuario">
              <MenuPrincipalResponsivo>
                <FormularioUsuario />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/usuarios">
              <MenuPrincipalResponsivo>
                <Usuarios />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/empresas">
              <MenuPrincipalResponsivo>
                <Empresas />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/empresa/:uuid">
              <MenuPrincipalResponsivo>
                <FormularioEmpresa />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/empresa">
              <MenuPrincipalResponsivo>
                <FormularioEmpresa />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/principal">
              <MenuPrincipalResponsivo>
                <Principal />
              </MenuPrincipalResponsivo>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
