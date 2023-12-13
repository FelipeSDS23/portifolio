import styles from "./Habilidades.module.css"

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faPhp } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons" 

// images
// import typescript from "../assets/images/typescript_logo/typescript.png"

const Habilidades = () => {
  return (
    <div className={styles.habilidadesContainer} id="habilidades">

      <h2>Minhas <span>H</span>abilidades</h2>

      <h3>Tecnologias</h3>

      <div className={styles.tecnologiasContainerGrid}>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faHtml5} className={styles.tecIcone} style={{ color: "#E65100" }} />
          <p>HTML5</p>
        </div>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faCss3Alt} className={styles.tecIcone} style={{ color: "#0277BD" }} />
          <p>CSS3</p>
        </div>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faSquareJs} className={styles.tecIcone} style={{ color: "#DAB92D" }} />
          <p>JAVASCRIPT</p>
        </div>
        {/* <div className={styles.gridCard}>
          <img src={typescript}  />
          <p>TYPESCRIPT</p>
        </div> */}
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faReact} className={styles.tecIcone} style={{ color: "#80DEEA" }} />
          <p>REACT</p>
        </div>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faGitAlt} className={styles.tecIcone} style={{ color: "#F4511E" }} />
          <p>GIT</p>
        </div>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faPhp} className={styles.tecIcone} style={{ color: "#7377AD" }} />
          <p>PHP</p>
        </div>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faDatabase} className={styles.tecIcone} style={{ color: "#2375BA" }} />
          <p>SQL</p>
        </div>
        <div className={styles.gridCard}>
          <FontAwesomeIcon icon={faNodeJs} className={styles.tecIcone} style={{ color: "#8CC84B" }} />
          <p>NODE JS</p>
        </div>
      </div>

      <h3>Cursos e formação</h3>

      <div className={styles.cursosContainerGrid}>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Tecnólogo</span>
          <p>
            <span className={styles.nomeDoCurso}>Análise e Desenvolvimento de Sistemas</span><br />
            <span className={styles.instituicao}>- Centro Universitário Internacional (Uninter)</span>
          </p>
          <span className={styles.periodo}>2022 - 2024</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>React JS</span><br />
            <span className={styles.instituicao}>Udemy</span>
          </p>
          <span className={styles.periodo}>30h / 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>JavaScript (Avançado)</span><br />
            <span className={styles.instituicao}>Udemy</span>
          </p>
          <span className={styles.periodo}>113h / 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>HTML5 e CSS3</span><br />
            <span className={styles.instituicao}>Curso em Vídeo</span>
          </p>
          <span className={styles.periodo}>160h / 2022 - 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>JavaScript (Básico)</span><br />
            <span className={styles.instituicao}>Curso em Vídeo</span>
          </p>
          <span className={styles.periodo}>40h / 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>Git e GitHub</span><br />
            <span className={styles.instituicao}>Udemy</span>
          </p>
          <span className={styles.periodo}>10h / 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>Scrum, Git e Padrões web</span><br />
            <span className={styles.instituicao}>Teknisa</span>
          </p>
          <span className={styles.periodo}>10h / 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>PHP</span><br />
            <span className={styles.instituicao}>Udemy</span>
          </p>
          <span className={styles.periodo}>33h / 2023</span>
        </div>

        <div className={styles.gridCard}>
          <span className={styles.tipoDeCurso}>Curso</span>
          <p>
            <span className={styles.nomeDoCurso}>Programação orientada a objetos</span><br />
            <span className={styles.instituicao}>Curso em Vídeo</span>
          </p>
          <span className={styles.periodo}>40h / 2023</span>
        </div>

      </div>

    </div>
  )
}

export default Habilidades