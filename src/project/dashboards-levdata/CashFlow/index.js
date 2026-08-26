import React from 'react';
//COMPONENTS
import StandardLayout from '../../../components/Layout/StandardLayout/StandardLayout';
import FooterLite from '../../../components/Layout/Footer';
import ProductHeader from '../../../components/ProductHeader';
//MUI
import { Container, Box, CircularProgress, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Nivo
import { ResponsiveLine } from '@nivo/line';
import { useCashFlow } from '../../../hooks/useCashFlow';
import { formatCurrency } from '../../../services/cashflow/mappers';

const Card = ({ title, value, icon, isCurrency, color }) => (
  <Box
    sx={{
      width: '100%',
      minWidth: 0,
      minHeight: { xs: 120, md: 140 },
      background: '#fff',
      padding: '16px',
      borderRadius: '5px',
      boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box'
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}
    >
      <Box component="p" sx={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>
        {title}
      </Box>
      {icon}
    </Box>
    <Box
      component="h2"
      sx={{
        margin: '12px 0 0 0',
        fontWeight: 600,
        lineHeight: 1.2,
        fontSize: { xs: '24px', md: '30px' },
        color: color,
        wordBreak: 'break-word'
      }}
    >
      {isCurrency ? `R$ ${value}` : value}
    </Box>
    {/* Espaço inferior como no layout original dos cards */}
    <Box sx={{ flex: 1, minHeight: { xs: 16, md: 28 } }} />
  </Box>
);

function CashFlow() {
  /*
  Empresa fixa: a API filtra por um único IdEmpresa (VERDE CAPSULA LTDA).
  */
  const companyDisplayed = 'VERDE CAPSULA LTDA - 35965576000178';

  const {
    isLoading,
    isError,
    errorMessage,
    summary,
    trends,
    lineData,
    yMax,
    rowsEntradas,
    rowsSaidas,
    refetchAll
  } = useCashFlow();

  const entrada = summary?.entrada ?? '—';
  const saida = summary?.saida ?? '—';
  const liquido = summary?.liquido ?? '—';
  const balanco = summary?.balanco ?? '—';

  const columnsEntradas = [
    {
      field: 'data',
      headerName: 'Data',
      flex: 1,
      minWidth: 100
    },
    {
      field: 'cliente',
      headerName: 'Cliente',
      flex: 1,
      minWidth: 110
    },
    {
      field: 'quantia',
      headerName: 'Quantia',
      flex: 1,
      minWidth: 110,
      valueFormatter: ({ value }) => formatCurrency(value)
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 110,
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

        const style = map[value] || {
          color: '#6b7280',
          background: '#f3f4f6'
        };

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

  const columnsSaidas = [
    {
      field: 'data',
      headerName: 'Data',
      flex: 1,
      minWidth: 100
    },
    {
      field: 'fornecedor',
      headerName: 'Fornecedor',
      flex: 1,
      minWidth: 120
    },
    {
      field: 'quantia',
      headerName: 'Quantia',
      flex: 1,
      minWidth: 110,
      valueFormatter: ({ value }) => formatCurrency(value)
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth: 110,
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

        const style = map[value] || {
          color: '#6b7280',
          background: '#f3f4f6'
        };

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

  const gridYValues = [0, yMax / 4, yMax / 2, (yMax * 3) / 4, yMax];

  return (
    <StandardLayout>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          px: { xs: 2, sm: 3, md: 4, lg: '180px' },
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflowX: 'hidden'
        }}
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingTop: '20px',
            paddingBottom: '20px'
          }}
        >
          {isLoading && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '240px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)'
              }}
            >
              <CircularProgress sx={{ color: '#10b981' }} />
            </Box>
          )}

          {isError && !isLoading && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '32px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid #f59e0b'
              }}
            >
              <WarningAmberIcon sx={{ color: '#f59e0b', fontSize: 36 }} />
              <Box sx={{ color: '#374151', textAlign: 'center' }}>
                {errorMessage}
              </Box>
              <Button
                variant="contained"
                onClick={() => refetchAll()}
                sx={{
                  background: '#251544',
                  textTransform: 'none',
                  '&:hover': { background: '#382059' }
                }}
              >
                Tentar novamente
              </Button>
            </Box>
          )}

          {!isLoading && !isError && (
            <>
              {/*Cards*/}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: '1fr 1fr',
                    md: 'repeat(4, 1fr)'
                  },
                  gap: { xs: 2, sm: 2, md: '20px' },
                  width: '100%',
                  '& > *': { minWidth: 0 }
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
              </Box>

              {/*Grafico*/}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
                  gap: '20px',
                  minHeight: { xs: 'auto', md: '320px' },
                  width: '100%',
                  '& > *': { minWidth: 0 }
                }}
              >
                {/* LINHA DO TEMPO */}
                <Box
                  sx={{
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    width: '100%',
                    minHeight: { xs: 340, md: 'auto' }
                  }}
                >
                  <Box
                    sx={{
                      padding: '16px',
                      borderBottom: '1px solid #e5e7eb',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box
                      sx={{
                        fontWeight: 600,
                        color: '#374151',
                        fontSize: '18px'
                      }}
                    >
                      Linha do tempo
                    </Box>
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

                  <Box
                    sx={{
                      width: '100%',
                      overflowX: 'auto',
                      overflowY: 'hidden',
                      WebkitOverflowScrolling: 'touch'
                    }}
                  >
                    <Box
                      sx={{
                        height: 280,
                        minHeight: 280,
                        width: {
                          xs: `max(100%, ${
                            (lineData?.[0]?.data?.length || 8) * 72
                          }px)`,
                          md: '100%'
                        },
                        minWidth: { xs: 560, md: 0 },
                        flexShrink: 0
                      }}
                    >
                      <ResponsiveLine
                        data={lineData}
                        margin={{ top: 20, right: 30, bottom: 40, left: 60 }}
                        xScale={{
                          type: 'point',
                          padding: 0
                        }}
                        yScale={{
                          type: 'linear',
                          min: 0,
                          max: yMax
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
                        gridYValues={gridYValues}
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
                        {trends?.saldoAtual ?? '—'}
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
                        {trends?.previsao30Dias ?? '—'}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: '20px',
                  width: '100%',
                  '& > *': { minWidth: 0 }
                }}
              >
                {/*Tabela 1*/}
                <Box
                  sx={{
                    background: '#fff',
                    borderRadius: '8px',
                    padding: '16px',
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                    width: '100%',
                    minWidth: 0,
                    overflowX: 'auto'
                  }}
                >
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
                    width: '100%',
                    minWidth: 0,
                    overflowX: 'auto'
                  }}
                >
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
            </>
          )}

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
              gap: '20px',
              width: '100%',
              '& > *': { minWidth: 0 }
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

              <Box
                sx={{
                  flex: 1,
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
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
