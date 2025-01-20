import styles from "./Projetos.module.css"
import { Link } from 'react-router-dom'

// images
import GetAPet from "../assets/images/projects/get-a-pet.png"
import projetoToughts from "../assets/images/projects/projeto-toughts.png"
import movieDatabase from "../assets/images/projects/movie-database.png"
import multiStepForm from "../assets/images/projects/multi-step-form.png"
import weather from "..//assets/images/projects/weather-app.png"
import ageCalculator from "..//assets/images/projects/age-calculator.png"
import landingPage from "..//assets/images/projects/landing-page.png"
import timer from "..//assets/images/projects/timer.png"
import customText from "..//assets/images/projects/custom-text.png"
import myCityApp from "..//assets/images/projects/my-city-app.png"
import imovi from "..//assets/images/projects/imovi.png"
import quadrosEquadros from "..//assets/images/projects/quadrosEquadros.png"


const Projetos = () => {
  return (
    <section className={styles.projetosContainer} id="projetos">
      <h2>Veja alguns dos meus últimos <span>P</span>rojetos</h2>

      <div className={styles.containerGrid}>

      <div className={styles.gridCard}>
          <Link to={"https://github.com/FelipeSDS23/Painting-sales-website"} target="_blank">
            <img src={quadrosEquadros} alt="quadrosEquadros" />
            <div className={styles.intro}>
                <h3>Quadros&quadros <br/> (Em desenvolvimento)</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
      </div>
      <div className={styles.gridCard}>
          <Link to={"https://github.com/FelipeSDS23/Get-A-Pet"} target="_blank">
            <img src={GetAPet} alt="GetAPet" />
            <div className={styles.intro}>
                <h3>Get A Pet</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://github.com/FelipeSDS23/Projeto-Toughts"} target="_blank">
            <img src={projetoToughts} alt="Toughts" />
            <div className={styles.intro}>
                <h3>Projeto Toughts</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
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
            <img src={movieDatabase} alt="Movie Database" />
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
          <Link to={"https://felipesds23.github.io/Landing-Page-Ideal/"} target="_blank">
            <img src={landingPage} alt="Landing Page" />
            <div className={styles.intro}>
                <h3>Ideal Landing Page</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
        <div className={styles.gridCard}>
          <Link to={"https://felipesds23.github.io/Case-Converter/"} target="_blank">
            <img src={customText} alt="Conversor de texto" />
            <div className={styles.intro}>
                <h3>Custom text website</h3>
                {/* <p>Lorem ipsum dolor sit amet cantium laboriosam velit odio magnam. Animi quidem qui in nemo ut sed atque officiis veniam quasi vitae.</p> */}
            </div>
          </Link>
        </div>
 
      </div>
    </section>
  )
}

export default Projetos