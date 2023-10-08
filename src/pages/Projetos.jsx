import styles from "./Projetos.module.css"
import { Link } from 'react-router-dom'

// images
import movieDatabase from "../assets/images/projects/movie-database.png"
import multiStepForm from "../assets/images/projects/multi-step-form.png"
import weather from "..//assets/images/projects/weather-app.png"
import ageCalculator from "..//assets/images/projects/age-calculator.png"
import landingPage from "..//assets/images/projects/landing-page.png"
import timer from "..//assets/images/projects/timer.png"
import customText from "..//assets/images/projects/custom-text.png"
import myCityApp from "..//assets/images/projects/my-city-app.png"
import imovi from "..//assets/images/projects/imovi.png"


const Projetos = () => {
  return (
    <section className={styles.projetosContainer}>
      <h2>Veja alguns dos meus últimos <span>P</span>rojetos</h2>

      <div className={styles.containerGrid}>

        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/multi-step-form/"} target="_blank">
            <img src={multiStepForm} alt="Multi Step Form" />
            <div className={styles.intro}>
                <h3>Multi Step Form</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Movie-Search-App/"} target="_blank">
            <img src={movieDatabase} alt="Aplicativo de Filmes" />
            <div className={styles.intro}>
                <h3>Movie App</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Weather_app-/"} target="_blank">
            <img src={weather} alt="Weather App" />
            <div className={styles.intro}>
                <h3>Weather App</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/IMOVI/"} target="_blank">
            <img src={imovi} alt="IMOVI page" />
            <div className={styles.intro}>
                <h3>iMovi Page</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Age-calculator/"} target="_blank">
            <img src={ageCalculator} alt="Age Calculator" />
            <div className={styles.intro}>
                <h3>Age Calculator</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Landing-Page-Ideal/"} target="_blank">
            <img src={landingPage} alt="Landing Page" />
            <div className={styles.intro}>
                <h3>Landing Page</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Timer/"} target="_blank">
            <img src={timer} alt="Timer" />
            <div className={styles.intro}>
                <h3>Timer</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Case-Converter/"} target="_blank">
            <img src={customText} alt="Conversor de texto" />
            <div className={styles.intro}>
                <h3>Conversor de texto</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Projeto-da-faculdade/"} target="_blank">
            <img src={myCityApp} alt="My City App" />
            <div className={styles.intro}>
                <h3>My City App</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        

      </div>
    </section>
  )
}

export default Projetos