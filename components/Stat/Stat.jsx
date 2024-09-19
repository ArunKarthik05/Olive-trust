import React from 'react'
import styles from "./Stat.module.scss";

export default function Stat() {
  return (
    <div className={styles.main}>
        <h2 className={styles.subHeading}>Give a Child Education Today</h2>
        <p className={styles.statPara}>Welcome to Our charity&#39;s online platform, where we unite hearts and effforts to bring hope to the  lives of the children in need.</p>
    
        <div className={styles.statDiv}>
            <div className={styles.innerContainer}>
                <h1>85%</h1>
                <p>Three Line Text</p>
            </div>
            <div className={styles.innerContainer}>
                <h1>3,250</h1>
                <p>Three Line Text</p>
            </div>
            <div className={styles.innerContainer}>
                <h1>69%</h1>
                <p>Three Line Text</p>
            </div>
        </div>

        {/* text2 */}
        <h2 className={`${styles.subHeading} ${styles.heading2}`}>Empowering Lives, Creating Futures</h2>
        <p className={`${styles.statPara} ${styles.para2}`}>At OliveOrg, we are on a heartfelt mission to empower 
        unprivileged lives by providing them with the essential resources  and <br/>opportunities they need to build a brighter future.
        </p>
        
        <div className={styles.grayContainer}><p>We believe that by working together, we can create a world where every child has the opputunity to reach their full potential.</p></div>

        <div className={styles.gridContainer}>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
            <div className={styles.gridItem}></div>
        </div>
    </div>
  )
}
