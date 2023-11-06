// react
import { useEffect, useRef } from 'react';

// react router
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// styles
import './App.css'

// components
import Sidebar from './components/Sidebar'

// pages
import Sobre from './pages/Sobre'
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Inicio from './pages/Inicio'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {

  const barsMenu = useRef();
  const closeBarsMenu = useRef();
  const sidebar = useRef();
  const contentContainer = useRef();

  const showHideMenu = () => {
    if (sidebar.current.style.display === "none") {
      sidebar.current.style.display = "block"
      closeBarsMenu.current.style.display = "block"
      barsMenu.current.style.display = "none"
      contentContainer.current.style.display = "none"
    } else {
      sidebar.current.style.display = "none"
      closeBarsMenu.current.style.display = "none"
      barsMenu.current.style.display = "block"
      contentContainer.current.style.display = "block"
    }
  }

  const onWindowResize = () => {
    if (innerWidth >= 769) {
      barsMenu.current.style.display = "none"
      closeBarsMenu.current.style.display = "none"
      sidebar.current.style.display = "block"
      contentContainer.current.style.display = "block"
    } else {
      barsMenu.current.style.display = "block"
      closeBarsMenu.current.style.display = "none"
      sidebar.current.style.display = "none"
      contentContainer.current.style.display = "block"
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onWindowResize)
  }, [])


  return (
    <div className='app'>

      <FontAwesomeIcon icon={faBars} className='bars-menu' ref={barsMenu} onClick={showHideMenu} />
      <FontAwesomeIcon icon={faXmark} className='close-bars-menu' ref={closeBarsMenu} onClick={showHideMenu} />

      {/* <BrowserRouter> */}
        <div className='sidebar-container' ref={sidebar} style={innerWidth >= 769 ? { display: "block" } : { display: "none" }}>
          <Sidebar showHideMenu = {showHideMenu} />
        </div>
        <div className='content-container' ref={contentContainer}>
          <Inicio />
          <Sobre />
          <Habilidades />
          <Projetos />
          <Contato />
          {/* <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/habilidades' element={<Habilidades />} />
            <Route path='/projetos' element={<Projetos />} />
            <Route path='/contato' element={<Contato />} />
          </Routes> */}
          {/* <Outlet /> */}
        </div>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
