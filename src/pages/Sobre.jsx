import styles from "./Sobre.module.css"
// images
import profilePhoto from "../assets/images/profile/profile-photo.png"

const Sobre = () => {
  return (
    <div className={styles.sobreContainer}>

      <h2><span>F</span>elipe Silva</h2>

      <div className={styles.imgParagrafoContainer}>

        <div className={styles.imgContainer}>
          <img src={profilePhoto} alt="Felipe" />
        </div>

        <div className={styles.paragrafoContainer}>
          <h3>DESENVOLVEDOR<br /> WEB.</h3>
          <p>
            Sou um estudante e desenvolvedor web que gosta de 
            combinar técnicas, tecnologias e criatividade para 
            criar os mais diversos tipos de projetos. Estou sempre 
            em busca de novas oportunidades para aperfeiçoar minhas 
            habilidades e trabalhar em projetos desafiadores. 
            Meu principal objetivo como desenvolvedor é buscar 
            sempre continuar aprendendo e crescer na área. 
            Atualmente curso Análise e Desenvolvimento de Sistemas 
            e trabalho em alguns projetos pessoais com o objetivo de 
            praticar os conceitos estudados.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Sobre