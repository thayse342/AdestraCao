import React from 'react';
import Button from '../../../common/Button/Button';

const ConfigAdminView = ({ nome, email, onEdit, senha }) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <Button
      variant="primary"
      texto="Editar"
      onClick={() => onEdit({ nome, email, senha })}>Editar</Button>
    </div>
  );
};

export default ConfigAdminView;




