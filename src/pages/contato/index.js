import React from 'react';
import Header from '../../components/header'
import ContatoForm from '../../components/contato';

import { ContatoStyle } from './style/style';

function Contato() {
  return (
    <ContatoStyle>
      <Header />
      <ContatoForm />      
    </ContatoStyle>
  );
}

export default Contato;
