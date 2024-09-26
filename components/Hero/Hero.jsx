import React from 'react'
import styles from "./Hero.module.scss";
import Image from 'next/image';

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
                      <path d="M1.34312 12.6569L12.6568 1.34317M12.6568 1.34317V9.82845M12.6568 1.34317H4.17154" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                </button>
              </div>
          </div>

          {/* images */}
          <div className={styles.imagesDiv}>
              <div className={styles.mainImgDiv}>
                <div className={styles.img1}><Image src="/assets/hero-1.png" alt='hero-section' height={304} width={295} priority/></div>
                <div className={styles.grayContainer}></div>
              </div>
              <div className={styles.mainImgDiv}>
                  <div className={styles.grayContainer}></div>
                  <div className={styles.img2}></div>
              </div>
              <div className={styles.mainImgDiv}>
                  <div className={styles.img3}></div>
                  <div className={styles.grayContainer}></div>
              </div>
              <div className={styles.mainImgDiv}>
                  <div className={styles.grayContainer}></div>
                  <div className={styles.img4}>
                    <Image src="/assets/hero-2.png" alt='hero-section-4' height={75} width={828} priority/>
                  </div>
              </div>
          </div>
    </div>
  )
}
