import './styles/global.scss'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Navbar from './componentes/navbar/Navbar'
import Users from './pages/Users/Users'
import Home from './pages/home/Home'
import Menu from './componentes/menu/Menu'
import Footer from './componentes/footer/Footer'

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
        <Footer />
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
          element: <Home />
        },
        {
          path:"/users",
          element: <Users />
        },
      ]
      
    }
    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
