import React from 'react'
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.main}>
          <div className={styles.content}>
              <h1 className={styles.heading}>Transforming Lives Through<br/>Health and Education</h1>
              <p>Welcome to Olive Org, where we believe in the boundless potential of Human being. Our mission is to create a world where underprivileged
                <br />beings are given the wings to soar high and achieve their dreams.
              </p>
              <div>
                <button className={styles.donateBtn}>Donate Now
                    <div className={styles.svgContainer}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.34312 12.6569L12.6568 1.34317M12.6568 1.34317V9.82845M12.6568 1.34317H4.17154" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                </button>
              </div>
          </div>
    </div>
  )
}
