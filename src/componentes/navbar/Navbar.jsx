import './navbar.scss'

import { CircleUser, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        Logo
      </div>
      <div className="menus">
        <div className="pesquisa">
          <input type="text" placeholder='Procure algo' />
        </div>
        <div className="perfil">
        <Bell strokeWidth={1.25} size={40}/>
        <div className='usuario'> 
        <CircleUser strokeWidth={1.55}  size={40}/>
        <h1>Eduardo</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
