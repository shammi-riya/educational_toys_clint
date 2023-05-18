
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Pages/Home/Home/Shared/Navber'
import Footer from './Pages/Home/Home/Shared/Footer'

function App() {
  
  return (
    <>
     <Navber></Navber>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
