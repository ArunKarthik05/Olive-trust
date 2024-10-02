import React from 'react'
import styles from "./Stat.module.scss";

export default function Stat() {
    return (
    <div className={styles.main}>
        <h2 className={styles.subHeading}>Give a Child Education Today</h2>
        <p className={styles.statPara}>Welcome to Our charity&#39;s online platform, where we unite hearts and effforts to bring hope to the  lives of the children in need.</p>
    
        <div className={styles.statDiv}>
            <div className={styles.innerContainer}>
                <h1>100+</h1>
                <p>Providing safe housing and support for over 100 families in need.</p>
            </div>
            <div className={styles.innerContainer}>
                <h1>300+</h1>
                <p>Improving health and well-being by treating over 300 individuals with free medical care.</p>
                
            </div>
            <div className={styles.innerContainer}>
                <h1>500+</h1>
                <p>Empowering the future by offering education to more than 500 underprivileged children.</p>
            </div>
        </div>

        {/* text2 */}

    </div>
  )
}