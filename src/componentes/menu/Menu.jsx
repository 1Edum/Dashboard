import './menu.scss';
import { BellDot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: "/", label: "Início" },
  { to: "/rendafixa", label: "Renda Fixa" },
  { to: "/acoes", label: "Ações" },
  { to: "/fundos", label: "Fundos Imobiliarios" }
];

const Menu = () => {
  const location = useLocation();
  
  return (
    <div className="menu">
      <div>
        {links.map(link => (
          <div key={link.to} className={`links ${location.pathname === link.to ? 'active' : ''}`}>
            <Link to={link.to} className="menu-link">
              {link.label}
            </Link>
            <span></span>
          </div>
        ))}
      </div>
      <span>
        <BellDot size={26} />
      </span>
    </div>
  );
};

export default Menu;
