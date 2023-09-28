import styles from './Sidebar.module.css'
import { NavLink, Link } from 'react-router-dom'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const Sidebar = ({ showHideMenu }) => {

  const hideMobileMenu = () => {
    if (innerWidth <= 768) {
      showHideMenu()
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}>f</span>
        <span className={styles.myName}>Felipe</span>
        <span className={styles.webDev}>Desenvolvedor Web</span>
      </div>
      <nav className={styles.navigationContainer}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.navlink)} onClick={hideMobileMenu}>Início</NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => (isActive ? styles.active : styles.navlink)} onClick={hideMobileMenu}>Sobre</NavLink></li>
          <li><NavLink to="/habilidades" className={({ isActive }) => (isActive ? styles.active : styles.navlink)} onClick={hideMobileMenu}>Habilidades</NavLink></li>
          <li><NavLink to="/projetos" className={({ isActive }) => (isActive ? styles.active : styles.navlink)} onClick={hideMobileMenu}>Projetos</NavLink></li>
          <li><NavLink to="/contato" className={({ isActive }) => (isActive ? styles.active : styles.navlink)} onClick={hideMobileMenu}>Contato</NavLink></li>
        </ul>
      </nav>
      <div className={styles.socialMediaContainer}>
        <Link to="https://www.linkedin.com/in/felipe-santos-7296b8213/" target='_blank'>
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialMediaIcons} />
        </Link>
        <Link to="https://github.com/FelipeSDS23" target='_blank'>
          <FontAwesomeIcon icon={faGithub} className={styles.socialMediaIcons} />
        </Link>
        <Link to="https://www.instagram.com/felipe_sds_/" target='_blank'>
          <FontAwesomeIcon icon={faInstagram} className={styles.socialMediaIcons} />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar