import { Link } from 'react-router-dom'
import { HeaderStyle } from './header.styles'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container-header">
        <nav>
          <ul className="lista-links">
            <li>
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="#historia">
                + Informações
              </a>
            </li>
            <li>
              <a className="link" href="#footer">
                Contato
              </a>
            </li>
            <li>
              <Link className="link" to="/login">
                Àrea do Adestrador
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header
