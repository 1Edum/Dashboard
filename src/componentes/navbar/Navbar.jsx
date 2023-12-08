import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        DashBord
      </div>
      <div className="menus">
        <div className="pesquisa">
          <input type="text" placeholder='Procure algo' />
        </div>
        <div className="perfil">
          <h1>Eduardo</h1>       
        </div>
      </div>
    </div>
  )
}

export default Navbar
