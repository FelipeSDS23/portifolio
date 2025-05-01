import styles from "./Contato.module.css"
import { Link } from 'react-router-dom'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"
// import { faSquarePhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
// import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"


const Contato = () => {
  return (
    <div className={styles.contatoContainer} id="contato">

      <h2>
        Estou disponível para novos projetos.<br />
        Entre em <span>c</span>ontato para marcarmos uma conversa.
      </h2>

      <div className={styles.contatos}>
        <ul className={styles.contatosLista}>
          <li>
            <Link to="mailto:felipe56san@gmail.com" target='_blank'>
              <FontAwesomeIcon icon={faSquareEnvelope} className={styles.iconeContato} />
              <span>felipe56san@gmail.com</span>
            </Link>
          </li>
          {/* <li>
            <Link to="tel:+5511999999999" target='_blank'>
              <FontAwesomeIcon icon={faSquarePhone} className={styles.iconeContato} />
              <span>+55 11 99999-9999</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="https://wa.me/5511999999999" target='_blank'>
              <FontAwesomeIcon icon={faSquareWhatsapp} className={styles.iconeContato} />
              <span>WhatsApp</span>
            </Link>
          </li> */}
          <li>
            <Link to="https://www.linkedin.com/in/felipe-santos-7296b8213/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className={styles.iconeContato} />
              <span>LinkedIn</span>
            </Link>
          </li>
          {/* <li>
            <Link to="https://github.com/FelipeSDS23" target='_blank'>
              <FontAwesomeIcon icon={faSquareGithub} className={styles.iconeContato} />
              <span>GitHub</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="https://www.instagram.com/felipe/" target='_blank'>
              <FontAwesomeIcon icon={faSquareInstagram} className={styles.iconeContato} />
              <span>Instagram</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="https://www.facebook.com/felipe" target='_blank'>
              <FontAwesomeIcon icon={faSquareFacebook} className={styles.iconeContato} />
              <span>Facebook</span>
            </Link>
          </li> */}

        </ul>
      </div>
      
    </div>
  )
}

export default Contato