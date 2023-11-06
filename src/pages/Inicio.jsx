import styles from "./Inicio.module.css"
import { NavLink } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className={styles.inicioContainer} id="inicio">

      <h2>
        Olá,<br />
        eu sou o <span>F</span>elipe,<br />
        Desenvolvedor Web
      </h2>

      <NavLink to="/portifolio/contato" >
        <button className={styles.btnContato}>
          Entre em contato!
        </button>
      </NavLink>

    </div>
  )
}

export default Inicio