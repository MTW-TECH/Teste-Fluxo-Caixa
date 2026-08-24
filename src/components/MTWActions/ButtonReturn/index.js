import React from 'react';
// COMPONENTS
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { useNavigate, useLocation } from 'react-router-dom';
// STYLE
import { TinyReturnButton } from '../../../styledComponentsStyles';
import './style.css';

function index({ link }) {
  let navigate = useNavigate();
  let location = useLocation();
  const handleBack = () => {
    if (link) {
      navigate(link);
      return;
    }
    let pathname = location.pathname;

    if (pathname.startsWith('/levdata')) {
      navigate('/levdata');
      return;
    }

    if (pathname.startsWith('/navtax')) {
      navigate('/navtax');
      return;
    }

    navigate(-1);
  };

  return (
    <TinyReturnButton onClick={handleBack}>
      <ShortcutIcon
        sx={{ marginTop: '1px', width: '13px', transform: 'scaleX(-1)' }}
      />
      <span id="return-phrase">Voltar</span>
    </TinyReturnButton>
  );
}

export default index;
