import './menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <Link to="/">
          Início
        </Link>
      </div>
      <div> 
        <Link to="/rendafixa">
          Renda Fixa
        </Link>
      </div>
      <div>
        <Link to="/acoes">
          Ações
        </Link>
      </div>
      <div> 
        <Link to="/fundos">
          Fundos Imobiliarios
        </Link>
      </div>
    </div>
  )
}

export default Menu
