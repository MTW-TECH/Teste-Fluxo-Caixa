import { Route, Routes } from 'react-router-dom';
// COMPONENTS
import ErrorBoundary from 'components/ErrorBoundary';
import CashFlow from './project/dashboards-levdata/CashFlow';
// STYLE
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from './theme';
import styledtheme from './styledThemeOn';

function App() {
  /*
  App enxuto para o teste técnico: uma única tela (Fluxo de Caixa), sem
  autenticação e sem as demais rotas/produtos do portal original.
  */
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={styledtheme}>
        <ErrorBoundary>
          <Routes>
            <Route path="*" element={<CashFlow />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
