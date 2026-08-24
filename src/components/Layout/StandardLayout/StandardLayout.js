import React from 'react';
import Navbar from '../Navbar';
import styledtheme from '../../../styledThemeOn';
import { ProductLayout } from '../../../styledComponentsStyles';

function StandardLayout({ hiddenNavbar, children, minHeight }) {
  /*
  StandardLayout é usado pelo ProductContainer (maior container
  da maioria das páginas de produtos/serviços do portal) assim como 
  por outras páginas especiais que o invocam diretamente
  */

  return (
    <>
      <Navbar hidden={hiddenNavbar} />
      <ProductLayout minHeight={minHeight} styledtheme={styledtheme}>
        {children}
      </ProductLayout>
    </>
  );
}

export default StandardLayout;
