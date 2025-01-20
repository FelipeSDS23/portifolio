import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const Sidebar = ({ showHideMenu }) => {

  const hideMobileMenu = (e) => {
    if (innerWidth <= 768) {
      showHideMenu()
    }

  // Deixa opção de navegação destacada
  const ul = (e.target.parentNode.parentNode);
  ul.childNodes.forEach(li => {
    li.firstChild.style.color = "var(--font-color)";
  });
  e.target.style.color = "var(--selection-color)";

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
          <li><Link to="inicio" spy={true} smooth={true} offset={50} duration={500} onClick={hideMobileMenu} className={styles.navlink} >Início</Link></li>
          <li><Link to="sobre" spy={true} smooth={true} offset={50} duration={500} onClick={hideMobileMenu} className={styles.navlink} >Sobre</Link></li>
          <li><Link to="habilidades" spy={true} smooth={true} offset={50} duration={500} onClick={hideMobileMenu} className={styles.navlink} >Habilidades</Link></li>
          <li><Link to="projetos" spy={true} smooth={true} offset={50} duration={500} onClick={hideMobileMenu} className={styles.navlink} >Projetos</Link></li>
          <li><Link to="contato" spy={true} smooth={true} offset={50} duration={500} onClick={hideMobileMenu} className={styles.navlink} >Contato</Link></li>
        </ul>
      </nav>
      <div className={styles.socialMediaContainer}>
        <NavLink to="https://www.linkedin.com/in/felipe-santos-7296b8213/" target='_blank'>
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialMediaIcons} />
        </NavLink>
        <NavLink to="https://github.com/FelipeSDS23" target='_blank'>
          <FontAwesomeIcon icon={faGithub} className={styles.socialMediaIcons} />
        </NavLink>
        <NavLink to="https://www.instagram.com/felipe_sds_/" target='_blank'>
          <FontAwesomeIcon icon={faInstagram} className={styles.socialMediaIcons} />
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar