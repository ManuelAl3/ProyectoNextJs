import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Boton from "../ui/Boton";

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Cabezera = styled.header`
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  margin-bottom: 15px;
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
`;

const Texto = styled.p`
  margin-right: 2rem;
`;

const Header = () => {
  const usuario = false;

  return (
    <Cabezera>
      <ContenedorHeader>
        <Contenedor>
          <Link to="/">Logo aqui</Link>
        </Contenedor>
        <Contenedor>
          {usuario ? (
            <>
              <Texto>Hola Empleador</Texto>
            </>
          ) : (
            <>
              <Link to="/login-empleado">
                <Boton>Login</Boton>
              </Link>
              <Link to="/crear-cuenta-empleado">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          )}
        </Contenedor>
      </ContenedorHeader>
    </Cabezera>
  );
};

export default Header;
