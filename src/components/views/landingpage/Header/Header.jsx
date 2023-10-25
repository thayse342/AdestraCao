import React from "react";
import { HeaderContainer } from "./header.styles.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul className="litalinks">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              + Informações
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Contato
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Àrea do Adestrador
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};
export default Header;
