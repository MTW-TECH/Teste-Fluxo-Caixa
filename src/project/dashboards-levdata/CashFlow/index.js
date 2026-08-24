import React from 'react';
//COMPONENTS
import StandardLayout from '../../../components/Layout/StandardLayout/StandardLayout';
import FooterLite from '../../../components/Layout/Footer';
import ProductHeader from '../../../components/ProductHeader';
//MUI
import { Container, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Nivo
import { ResponsiveLine } from '@nivo/line';

function CashFlow() {
  /*
  Empresa fixa: este teste libera acesso a uma única empresa, então o
  seletor/API de empresas (que existia aqui via Redux) foi removido.
  Troque por dados reais assim que a API do candidato estiver pronta.
  */
  const companyDisplayed = 'VERDE CAPSULA LTDA - 35965576000178';

  //----------------------------Cards-------------------------
  let entrada = '450.000,00';
  let saida = '245.000,00';
  let liquido = '65.000,00';
  let balanco = '140.000,00';

  const Card = ({ title, value, icon, isCurrency, color }) => (
    <div
      style={{
        width: '100%',
        minHeight: '110px',
        background: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ color: '#6b7280', margin: 0 }}>{title}</p>
        {icon}
      </div>
      <h2
        style={{
          margin: '8px 0',
          fontWeight: 600,
          lineHeight: 1.2,
          fontSize: '30px',
          color: color
        }}
      >
        {isCurrency ? `R$ ${value.toLocaleString()}` : value}
      </h2>
    </div>
  );

  //-------------------------------GRÁFICOS-----------------------
  const lineData = [
    {
      id: 'Inflows',
      color: '#10b981',
      data: [
        { x: 'Jan 01', y: 60 },
        { x: 'Jan 05', y: 45 },
        { x: 'Jan 10', y: 50 },
        { x: 'Jan 15', y: 70 },
        { x: 'Jan 20', y: 65 },
        { x: 'Jan 25', y: 55 },
        { x: 'Jan 30', y: 62 }
      ]
    },
    {
      id: 'Outflows',
      color: '#f5510b',
      data: [
        { x: 'Jan 01', y: 35 },
        { x: 'Jan 05', y: 50 },
        { x: 'Jan 10', y: 30 },
        { x: 'Jan 15', y: 55 },
        { x: 'Jan 20', y: 38 },
        { x: 'Jan 25', y: 52 },
        { x: 'Jan 30', y: 28 }
      ]
    }
  ];

  //---------------------------Tabela 1--------------------

  const formatCurrency = (value) => {
    return `R$ ${Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2
    })}`;
  };

  const tableEntradas = [
    {
      data: '22 Mar 2026',
      cliente: 'ANDAIMETAL',
      quantia: 59475,
      status: 'Recebido'
    },
    {
      data: '23 Mar 2026',
      cliente: 'SPERONE',
      quantia: 3152.38,
      status: 'Pendente'
    },
    {
      data: '24 Mar 2026',
      cliente: 'JST COMERCIO',
      quantia: 3930,
      status: 'Recebido'
    }
  ];

  const columnsEntradas = [
    {
      field: 'data',
      headerName: 'Data',
      flex: 1
    },
    {
      field: 'cliente',
      headerName: 'Cliente',
      flex: 1
    },
    {
      field: 'quantia',
      headerName: 'Quantia',
      flex: 1,
      valueFormatter: ({ value }) => formatCurrency(value)
    },

    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: ({ value }) => {
        const map = {
          Pendente: {
            color: '#f59e0b',
            background: '#fef3c7'
          },
          Recebido: {
            color: '#10b981',
            background: '#d3f6e6'
          }
        };

        const style = map[value];

        return (
          <span
            style={{
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '15px',
              fontWeight: 500,
              color: style.color,
              background: style.background
            }}
          >
            {value}
          </span>
        );
      }
    }
  ];

  //---------------------------Tabela 2--------------------
  const tableSaidas = [
    {
      data: '22 Mar 2026',
      fornecedor: 'DALIA',
      quantia: 12600,
      status: 'Pago'
    },
    {
      data: '23 Mar 2026',
      fornecedor: 'ICM TECNOLOGIA',
      quantia: 1100,
      status: 'Pago'
    },
    {
      data: '24 Mar 2026',
      fornecedor: 'DUTOTEC',
      quantia: 9109.59,
      status: 'Agendado'
    }
  ];

  const columnsSaidas = [
    {
      field: 'data',
      headerName: 'Data',
      flex: 1
    },
    {
      field: 'fornecedor',
      headerName: 'Fornecedor',
      flex: 1
    },
    {
      field: 'quantia',
      headerName: 'Quantia',
      flex: 1,
      valueFormatter: ({ value }) => formatCurrency(value)
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: ({ value }) => {
        const map = {
          Pago: {
            color: '#f5510b',
            background: '#fde4d8'
          },
          Agendado: {
            color: '#f59e0b',
            background: '#fef3c7'
          }
        };

        const style = map[value];

        return (
          <span
            style={{
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '15px',
              fontWeight: 500,
              color: style.color,
              background: style.background
            }}
          >
            {value}
          </span>
        );
      }
    }
  ];

  // ------------------ ROWS ------------------
  const rowsEntradas = tableEntradas.map((row, index) => ({
    id: index,
    ...row
  }));

  const rowsSaidas = tableSaidas.map((row, index) => ({
    id: index,
    ...row
  }));

  //---------------------------CSS--------------------

  const buttons = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    background: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      background: '#251544',
      color: '#fff',
      borderColor: '#251544'
    }
  };

  return (
    <StandardLayout>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ padding: '0 180px 0px 180px' }}
      >
        <ProductHeader
          page={'cash-flow'}
          pageTitle={'Fluxo de Caixa'}
          pageBack={'/'}
          buttons={true}
          isolated={false}
          alert={false}
          cnpj={companyDisplayed}
        />
        {/*
          Todas as seções abaixo (cards, gráfico, tabelas, alertas) ficam
          num único container flex com "gap" fixo, em vez de cada bloco ter
          sua própria margin. Isso evita que as margens colapsem de forma
          irregular e criem uma "costura" entre as sombras dos cards.
        */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}
        >
          {/*Cards*/}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '45px',
              width: '100%',
              marginBottom: '30px'
            }}
          >
            <Card
              title="ENTRADA"
              value={entrada}
              icon={<DownloadIcon style={{ color: '#10b981' }} />}
              isCurrency
              color="#10b981"
            />

            <Card
              title="SAÍDA"
              value={saida}
              icon={<FileUploadIcon style={{ color: '#f5510b' }} />}
              color="#f5510b"
              isCurrency
            />

            <Card
              title="CAIXA LÍQUIDO"
              value={liquido}
              icon={<PaymentsOutlinedIcon style={{ color: '#000000' }} />}
              isCurrency
              color="#000000"
            />
            <Card
              title="BALANÇO"
              value={balanco}
              icon={
                <AccountBalanceWalletOutlinedIcon
                  style={{ color: '#3B82F6' }}
                />
              }
              isCurrency
              color="#3B82F6"
            />
          </div>

          {/*Grafico*/}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '20px',
              minHeight: '320px'
            }}
          >
            {/* LINHA DO TEMPO */}
            <Box
              sx={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* HEADER */}
              <Box
                sx={{
                  padding: '16px',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Box
                  sx={{ fontWeight: 600, color: '#374151', fontSize: '18px' }}
                >
                  Linha do tempo
                </Box>
                {/* LEGENDA */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#10b981'
                      }}
                    />
                    Entradas
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#f5510b'
                      }}
                    />
                    Saídas
                  </div>
                </div>
              </Box>

              {/* GRÁFICO */}
              <Box sx={{ flex: 1, height: '280px' }}>
                <ResponsiveLine
                  data={lineData}
                  margin={{ top: 20, right: 30, bottom: 40, left: 50 }}
                  xScale={{
                    type: 'point',
                    padding: 0
                  }}
                  yScale={{
                    type: 'linear',
                    min: 0,
                    max: 80
                  }}
                  curve="monotoneX"
                  enableArea={true}
                  areaOpacity={0.15}
                  colors={({ id }) =>
                    id === 'Inflows' ? '#10b981' : '#f5510b'
                  }
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 10,
                    tickRotation: 0
                  }}
                  axisLeft={{
                    tickSize: 0,
                    tickPadding: 10
                  }}
                  gridYValues={[0, 20, 40, 60, 80]}
                  enablePoints={false}
                  useMesh={true}
                  theme={{
                    grid: {
                      line: {
                        stroke: '#e5e7eb'
                      }
                    },
                    axis: {
                      ticks: {
                        text: {
                          fill: '#6b7280',
                          fontSize: 12
                        }
                      }
                    }
                  }}
                />
              </Box>
            </Box>

            {/* TENDENCIA */}
            <Box
              sx={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box
                sx={{
                  padding: '16px',
                  borderBottom: '1px solid #e5e7eb',
                  fontWeight: 600,
                  color: '#374151',
                  fontSize: '18px'
                }}
              >
                Tendência do Dinheiro
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '16px'
                }}
              >
                <Box
                  sx={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '16px',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ fontSize: '12px', color: '#6b7280' }}>
                    SALDO ATUAL
                  </Box>
                  <Box
                    sx={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#10b981'
                    }}
                  >
                    R$ 156.000,00
                  </Box>
                </Box>

                <Box
                  sx={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '16px',
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ fontSize: '12px', color: '#6b7280' }}>
                    PREVISÃO PARA 30 DIAS
                  </Box>
                  <Box
                    sx={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#3B82F6'
                    }}
                  >
                    R$ 198.000,00
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}
          >
            {/*Tabela 1*/}
            <Box
              sx={{
                background: '#fff',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                width: '100%'
              }}
            >
              {/* HEADER */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Box
                  sx={{
                    padding: '16px',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '18px'
                  }}
                >
                  Entradas
                </Box>
              </Box>

              <DataGrid
                rows={rowsEntradas}
                columns={columnsEntradas}
                autoHeight
                hideFooter
                disableColumnMenu
                disableRowSelectionOnClick
                sx={{
                  border: 'none',

                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: '#f9fafb',
                    color: '#6b7280',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderBottom: '1px solid #e5e7eb'
                  },

                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #f3f4f6',
                    fontSize: '15px'
                  },

                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#f9fafb'
                  },

                  '& .MuiDataGrid-columnSeparator': {
                    display: 'none'
                  },
                  '& .MuiDataGrid-row.Mui-selected': {
                    backgroundColor: '#FFF1F3 !important'
                  },

                  '& .MuiDataGrid-row.Mui-selected:hover': {
                    backgroundColor: '#FFF1F3 !important'
                  },

                  '& .MuiDataGrid-cell:focus': {
                    outline: 'none'
                  },

                  '& .MuiDataGrid-cell:focus-within': {
                    outline: 'none',
                    border: '1px solid #FF5465'
                  }
                }}
              />
            </Box>
            {/* TABELA 2 */}
            <Box
              sx={{
                background: '#fff',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                width: '100%'
              }}
            >
              {/* HEADER */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Box
                  sx={{
                    padding: '16px',
                    fontWeight: 600,
                    color: '#374151',
                    fontSize: '18px'
                  }}
                >
                  Saídas
                </Box>
              </Box>

              <DataGrid
                rows={rowsSaidas}
                columns={columnsSaidas}
                autoHeight
                hideFooter
                disableColumnMenu
                disableRowSelectionOnClick
                sx={{
                  border: 'none',

                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: '#f9fafb',
                    color: '#6b7280',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    borderBottom: '1px solid #e5e7eb'
                  },

                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #f3f4f6',
                    fontSize: '15px'
                  },

                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#f9fafb'
                  },

                  '& .MuiDataGrid-columnSeparator': {
                    display: 'none'
                  },
                  '& .MuiDataGrid-row.Mui-selected': {
                    backgroundColor: '#FFF1F3 !important'
                  },

                  '& .MuiDataGrid-row.Mui-selected:hover': {
                    backgroundColor: '#FFF1F3 !important'
                  },

                  '& .MuiDataGrid-cell:focus': {
                    outline: 'none'
                  },

                  '& .MuiDataGrid-cell:focus-within': {
                    outline: 'none',
                    border: '1px solid #FF5465'
                  }
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '20px'
            }}
          >
            {/* ALERTAS E AVISOS */}
            <Box
              sx={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* HEADER */}
              <Box
                sx={{
                  padding: '16px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: '18px'
                }}
              >
                Alertas e Avisos
              </Box>

              {/* LISTA */}
              <Box
                sx={{
                  flex: 1,
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {/* ALERTA 1 */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: '12px',
                    background: '#fff7ed',
                    border: '1px solid #f59e0b',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                >
                  <WarningAmberIcon sx={{ color: '#f59e0b' }} />

                  <Box>
                    <Box sx={{ fontWeight: 'bold', color: '#374151' }}>
                      Falta de Caixa Projetada
                    </Box>
                    <Box sx={{ fontSize: '14px', color: '#4b5563' }}>
                      Com base nas tendências atuais, espera-se falta de caixa
                      em 15 dias sem intervenção.
                    </Box>
                  </Box>
                </Box>

                {/* ALERTA 2 */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: '12px',
                    background: '#fff7ed',
                    border: '1px solid #f59e0b',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                >
                  <WarningAmberIcon sx={{ color: '#f59e0b' }} />

                  <Box>
                    <Box sx={{ fontWeight: 'bold', color: '#374151' }}>
                      Alta Concentração de Pagamentos
                    </Box>
                    <Box sx={{ fontSize: '14px', color: '#4b5563' }}>
                      65% dos pagamentos vencem na última semana do mês.
                      Considere parcelar os pagamentos.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* AÇÕES */}
            <Box
              sx={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <Box
                sx={{
                  padding: '16px',
                  fontWeight: 600,
                  borderBottom: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: '18px'
                }}
              >
                Ações Rápidas
              </Box>

              <div
                style={{
                  flex: 1,
                  marginTop: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  padding: '16px'
                }}
              >
                <Box sx={buttons}>
                  Planejar Pagamento
                  <ArrowForwardIcon fontSize="small" />
                </Box>

                <Box sx={buttons}>
                  Melhorar a Posição do Caixa
                  <ArrowForwardIcon fontSize="small" />
                </Box>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
      <FooterLite text={'Fluxo de Caixa'} pad={'30px 0px 30px 0px'} />
    </StandardLayout>
  );
}

export default CashFlow;
