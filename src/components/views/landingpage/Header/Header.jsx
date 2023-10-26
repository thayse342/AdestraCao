import { Link } from 'react-router-dom'
import { HeaderStyle } from './header.styles'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container-header">
        <nav>
          <ul className="lista-links">
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
      </div>
  </HeaderStyle>
  )
}

export default Header
