import React from 'react';
import { Container } from '@mui/material';

function index({ text, padding }) {
  const year = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: padding ? padding : '30px 0px 0px 0px',
          marginBottom: padding ? '20px' : 'none',
          fontSize: '11px',
          color: '#888'
        }}
      >
        {`${text} ${year()}`}
      </Container>
    </>
  );
}

export default index;
