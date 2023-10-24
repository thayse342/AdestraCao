import React from "react";
import Logo from "../../common/Logo/Logo";
import { Gear, CalendarBlank, Users, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { LayoutStyled } from "./layout.styles";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <header className="header-layout">
        <Logo />
        <Link to="/home">
          Sair
          <SignOut size={20} color="#828282" weight="bold" />
        </Link>
      </header>
      <div className="wrapper">
        <aside className="barra-lateral">
          <ul>
            <div>
              <li>
                <Link to="/agendamento">
                  <CalendarBlank size={20} color="#828282" weight="light" />
                  Agenda
                </Link>
              </li>
              <li>
                <Link to="/clientes">
                  <Users size={20} color="#828282" weight="light" />
                  Clientes
                </Link>
              </li>
            </div>
            <div>
              <hr />
              <li>
                <Link to="/configAdmin">
                  <Gear size={20} color="#828282" weight="light" />
                  Editar Conta
                </Link>
              </li>
            </div>
          </ul>
        </aside>
        <main>{children}</main>
      </div>
    </LayoutStyled>
  );
};

export default Layout;
