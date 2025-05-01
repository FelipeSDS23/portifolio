import React from "react";
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <NavLink to="https://www.linkedin.com/in/felipe-santos-7296b8213/" target='_blank' className={styles.footer}>
        &copy; 2025 Felipe Silva
      </NavLink>
    </footer>
  )
}

export default Footer