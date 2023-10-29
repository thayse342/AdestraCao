import React from "react";
import { NavLink } from "react-router-dom";
import { Gear, CalendarBlank, Users, SignOut } from "@phosphor-icons/react";
import { LayoutStyled } from "./layout.styles";
import Logo from "../../common/Logo/Logo";

const NavMenuItem = ({ to, icon, text }) => {
  const Icon = icon; // Transforme o ícone em um componente
  return (
    <NavLink to={to} className="nav-link">
      <Icon size={20} color="#474554" weight="light" />
      {text}
    </NavLink>
  );
};

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <header className="header-layout">
        <Logo />
        <NavLink to="/" className="nav-link">
          <SignOut size={20} color="#474554" weight="bold" />
          Sair
        </NavLink>
      </header>
      <div className="wrapper">
        <aside className="barra-lateral">
          <ul>
            <div>
              <li>
                <NavMenuItem to="/agendamento" icon={CalendarBlank} text="Agenda" />
              </li>
              <li>
                <NavMenuItem to="/clientes" icon={Users} text="Clientes" />
              </li>
            </div>
            <div>
              <hr />
              <li>
                <NavMenuItem to="/configAdmin" icon={Gear} text="Editar Conta" />
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
