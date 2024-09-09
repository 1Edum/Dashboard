import './styles/global.scss'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Navbar from './componentes/navbar/Navbar'
import Menu from './componentes/menu/Menu'

import Home from './pages/home/Home'

import RendaFixa from './pages/rendafixa/RendaFixa'
import FundosImobiliarios from './pages/fundosimobiliarios/FundosImobiliarios'
import Acoes from './pages/acoes/Acoes'

function App() {

  const Layout = () => {
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/rendafixa",
          element: <RendaFixa />,
        },
        {
          path:"/acoes",
          element: <Acoes />,
        },
        {
          path:"/fundos",
          element: <FundosImobiliarios />
        }
      ]
      
    }
    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
