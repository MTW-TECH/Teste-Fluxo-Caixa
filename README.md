# Fluxo de Caixa — Teste Técnico

<p align="center">
  <img src="./docs/preview.png" alt="Tela de Fluxo de Caixa" width="800" />
</p>

## 📋 Sobre o teste

Este repositório contém a tela de **Fluxo de Caixa** acima, com cards, gráfico, tabelas, alertas e ações rápidas. Os dados dos blocos principais vêm da API Flask (backend separado); alertas e ações rápidas seguem estáticos.

## 🎯 Integração com a API

A tela consome a API Flask do repositório **Teste-Fluxo-Caixa-Backend** (somente leitura):

| Bloco da UI | Endpoint |
| --- | --- |
| Cards | `GET /api/cashflow/summary` |
| Tendência | `GET /api/cashflow/trends` |
| Gráfico | `GET /api/cashflow/timeline` |
| Entradas | `GET /api/cashflow/inflows` |
| Saídas | `GET /api/cashflow/outflows` |

Camada no front:

- `src/services/http/httpClient.js` — `fetch` + timeout (`AbortController`) + erros `{ erro }`
- `src/services/cashflow/` — API e mappers (moeda string → pt-BR, datas, cores Nivo)
- `src/hooks/useCashFlow.js` — TanStack React Query (`useQueries`, cache 1 min)
- Alertas e ações rápidas continuam estáticos (sem endpoint no back)

## 🎁 Bônus

Deixe a tela **responsiva** para diferentes tamanhos de tela (desktop, tablet e mobile). O layout atual foi pensado para desktop; adaptar os cards, o gráfico e as tabelas para telas menores conta pontos extras.

## 🧰 Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | React 18 (Create React App) |
| UI | Material UI (MUI v5) |
| Estilização | styled-components + tema próprio (`src/theme`, `src/styledThemeOn`) |
| Gráficos | `@nivo/line` |
| Dados / cache | TanStack React Query v5 |
| Rotas | React Router v6 |

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm 9 ou superior (vem junto com o Node)
- Backend Flask em `http://127.0.0.1:5000` com `CORS_ORIGINS=http://localhost:3000`

## 🔐 Variáveis de ambiente

Copie [`.env.example`](./.env.example) para `.env`:

| Variável | Descrição | Exemplo |
| --- | --- | --- |
| `REACT_APP_API_URL` | Base URL da API | `http://127.0.0.1:5000` |
| `REACT_APP_API_TIMEOUT_MS` | Timeout das requisições (ms) | `10000` |
| `REACT_APP_CASHFLOW_DE` | Início do período (`YYYY-MM-DD`) | `2026-03-01` |
| `REACT_APP_CASHFLOW_ATE` | Fim do período | `2026-03-31` |

Se `DE`/`ATE` forem omitidos, a API usa o mês corrente. Com `REPOSITORIO=falso` no back, use mar/2026 (dados do seed).

## ▶️ Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Configure o .env (veja acima) e suba o backend

# 3. Suba o servidor de desenvolvimento
npm start
```

A aplicação abre em [http://localhost:3000](http://localhost:3000). Alterações salvas no código recarregam a página automaticamente.

## 📜 Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm start` | Roda o app em modo desenvolvimento |
| `npm run build` | Gera o build de produção na pasta `build/` |
| `npm run lint` | Roda o ESLint no código-fonte |
| `npm run format` | Formata o código-fonte com o Prettier |

## 📁 Estrutura de pastas

```
src/
├── assets/                          # imagens/logos usados na tela
├── components/
│   ├── ErrorBoundary/                # captura erros de renderização
│   ├── Layout/
│   │   ├── Navbar/                   # cabeçalho
│   │   ├── StandardLayout/           # layout padrão das páginas
│   │   └── Footer/
│   ├── MTWActions/                   # botões reutilizáveis (voltar, navegação)
│   └── ProductHeader/                # cabeçalho de página (título, breadcrumb)
├── hooks/
│   └── useCashFlow.js                # React Query: summary, trends, timeline, tabelas
├── services/
│   ├── http/httpClient.js            # fetch + timeout + erros
│   ├── queryClient.js                # defaults de cache
│   └── cashflow/                     # API + mappers
├── project/
│   └── dashboards-levdata/
│       └── CashFlow/                 # tela de Fluxo de Caixa
├── styledComponentsStyles.js         # estilos compartilhados (styled-components)
├── styledThemeOn/                    # tema usado pelo styled-components
├── theme/                            # tema usado pelo MUI
├── App.js                            # rotas da aplicação
└── index.js                          # ponto de entrada + QueryClientProvider
```

Boa sorte! 🚀
