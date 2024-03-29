import React, { useRef, useContext } from "react";
import "./styles/styleNavbar.css";
import logoNav from "../../assets/logos/logo-navbar.png";
import ThemeContext from "../utils/ThemeContext";

const Navbar = () => {
  const navbarOpen = useRef();
  const lineOneActive = useRef();
  const lineTwoActive = useRef();
  const lineThreeActive = useRef();

  const openSettings = useRef();
  const rotateSettings = useRef();

  const openMenu = () => {
    navbarOpen.current?.classList.toggle("openMenu");
    lineOneActive.current?.classList.toggle("activeLine1");
    lineTwoActive.current?.classList.toggle("activeLine2");
    lineThreeActive.current?.classList.toggle("activeLine3");
  };

  // const openSetting = () => {
  //   openSettings.current?.classList.toggle("openSettings");
  //   rotateSettings.current?.classList.toggle("rotateSetting");
  // };


  const {theme, updateTheme} = useContext(ThemeContext)
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoNav} alt="logo" className="image" />
      </div>

      <div className="menu-burger" onClick={openMenu}>
        <span ref={lineOneActive}></span>
        <span ref={lineTwoActive}></span>
        <span ref={lineThreeActive}></span>
      </div>

      <nav ref={navbarOpen} className="nav">
        <ul className="nav-menu">
          <li className="nav-links">
            <i className="bx bx-home icon"></i>
            <a href="#">Inicio</a>
          </li>
          <li className="nav-links">
            <i className="bx bx-user icon"></i>
            <a href="#">Sobre mi</a>
          </li>
          <li className="nav-links">
            <i className="bx bx-code-alt icon"></i>
            <a href="#">Habilidades</a>
          </li>
          <li className="nav-links">
            <i className="bx bx-folder icon"></i>
            <a href="#">Proyectos</a>
          </li>
          <li className="nav-links">
            <i className="bx bx-chat icon"></i>
            <a href="#">Contacto</a>
          </li>

          <li className="darkmode">
            <ul className="container-dark">
              <li className="mode">
                <label form="checkbox" className="toggler">
                  <input type="checkbox" id="checkbox" />
                  <span className="ball" onClick={() => theme === 'bg-dark' ? updateTheme('bg-light') : updateTheme('bg-dark')}></span>
                  <i className="fa-solid fa-moon moon"></i>
                  <i className="fa-solid fa-sun sun"></i>
                </label>
              </li>
            </ul>
          </li>
        </ul>
        <footer className="nav-footer">
          <div className={`nav-footer-text ${theme === 'bg-light' ? 'nav-footer-text-light' : 'nav-footer-text'}`}>
          <span className={`footer-separation ${theme === 'bg-light' ? 'footer-separation-light' : 'footer-separation'}`}></span>
          <p>&copy; Exequiel Maydana <b>Developer.</b></p>
          <span>Todos los derechos reservados.</span>
          </div>
  
        </footer>
      </nav>
    </header>
  );
};

export default Navbar;
