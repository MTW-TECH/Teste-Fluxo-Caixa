import React from 'react';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function index() {
  const box = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#251544',
    height: '54px',
    width: '54px',
    borderRadius: '5px',
    marginRight: '4px'
  };

  return (
    <div style={box}>
      <AccountBalanceWalletOutlinedIcon sx={{ color: '#FFF', width: '24px' }} />
    </div>
  );
}

export default index;
