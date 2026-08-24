import React from 'react';
import { IconContainer } from '../../styledComponentsStyles';

const CHUNK_LOAD_ERROR_PATTERN =
  /loading chunk [\w.-]+ failed|failed to fetch dynamically imported module|importing a module script failed/i;
const CHUNK_RELOAD_FLAG = 'mtw-chunk-reload-attempted';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    /*Depois de um deploy, uma aba ja aberta pode tentar carregar um chunk JS
    com hash antigo que nao existe mais no CDN. Sem isso, o app inteiro
    desmonta e vira uma tela em branco em vez de so recarregar.*/
    if (CHUNK_LOAD_ERROR_PATTERN.test(error?.message || '')) {
      if (!sessionStorage.getItem(CHUNK_RELOAD_FLAG)) {
        sessionStorage.setItem(CHUNK_RELOAD_FLAG, '1');
        window.location.reload();
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <IconContainer>
          <div style={{ textAlign: 'center' }}>
            <p>Ocorreu um erro ao carregar esta página.</p>
            <button onClick={() => window.location.reload()}>
              Recarregar página
            </button>
          </div>
        </IconContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
