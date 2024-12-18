import styles from "./Sobre.module.css"
// images
import profilePhoto from "../assets/images/profile/profile-photo.jpg"

const Sobre = () => {
  return (
    <div className={styles.sobreContainer} id="sobre">

      <h2><span>F</span>elipe Silva</h2>

      <div className={styles.imgParagrafoContainer}>

        <div className={styles.imgContainer}>
          <img src={profilePhoto} alt="Felipe" />
        </div>

        <div className={styles.paragrafoContainer}>
          <h3>DESENVOLVEDOR<br /> WEB.</h3>
          <p>
            Apaixonado por tecnologia e inovação, sou um Desenvolvedor Full Stack com formação em Análise 
            e Desenvolvimento de Sistemas, estou sempre empenhado em adquirir conhecimentos práticos e teóricos 
            para impulsionar a transformação digital e criar aplicações cada dia mais alinhadas às melhores práticas 
            do mercado. Tenho expertise em tecnologias como JavaScript, React, Node.js, PHP, MySQL e MongoDB, oferecendo 
            um conjunto completo de habilidades para desenvolvimento de aplicações web modernas e escaláveis.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Sobre