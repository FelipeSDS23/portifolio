import Cube from "../components/Cube"
import styles from "./Inicio.module.css"
import { Link } from 'react-scroll'

const Inicio = () => {
  return (
    <div className={styles.displayFlex}>
      <div className={styles.inicioContainer} id="inicio">
        <h2>
          Olá,<br />
          eu sou o <span>F</span>elipe,<br />
          Desenvolvedor Web
        </h2>
        <Link to="contato" spy={true} smooth={true} offset={50} duration={500} >
          <button className={styles.btnContato}>
            Entre em contato!
          </button>
        </Link>
      </div>
      <div className={styles.cubeContainer}>
        <Cube />
      </div>
    </div>
  )
}

export default Inicio