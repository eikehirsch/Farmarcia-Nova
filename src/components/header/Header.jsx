import './styles.css'
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-container'>
      <Logo />
      <ul className='header-list'>
        <li className='header-list-item'>Home</li>
        <li className='header-list-item'>Produtos</li>
        <li className='header-list-item'>Lojas</li>
        <li className='header-list-item'>Contato</li>
        <Link to="/atendimento">
          <li className='header-list-item'>Atendimento</li>
        </Link>
      </ul>
    </header>
  )
}

export default Header