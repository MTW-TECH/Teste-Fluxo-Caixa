import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
// COMPONENTS
import LogoLevdata from '../../../assets/logo_levdata.png';
// STYLE
import styledtheme from '../../../styledThemeOn';
import { Avatar, UserName, CompanyName } from '../../../styledComponentsStyles';

function Navbar() {
  /*
  Header fixo e simplificado do portal para este teste: somente logo +
  avatar/nome do usuário (sem menu lateral e sem dropdown de usuário),
  já que o candidato terá acesso a uma única empresa/tela.
  */
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '12px 32px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EAECF0',
        boxSizing: 'border-box'
      }}
    >
      <img src={LogoLevdata} height={35} alt="LevData" />

      <Avatar>
        <MuiAvatar
          sx={{ bgcolor: '#EDEDED', color: '#878787', width: 36, height: 36 }}
        >
          <PersonIcon />
        </MuiAvatar>
        <div>
          <UserName styledtheme={styledtheme}>LevData Admin</UserName>
          <CompanyName styledtheme={styledtheme}>LevData</CompanyName>
        </div>
      </Avatar>
    </div>
  );
}

export default Navbar;
