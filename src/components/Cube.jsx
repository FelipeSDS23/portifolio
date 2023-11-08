import React from 'react';
import styles from "./Cube.module.css";

const Cube = () => {
  return (
    <div>
        <div className={styles.body}>    
            <div className={styles.scene}>
            <div className={styles.cube}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cube