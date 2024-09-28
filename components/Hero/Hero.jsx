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
                <svg className={styles.star} width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.648 5.89893C5.9607 6.56869 5.11767 6.90419 5.01507 7.59852C4.91247 8.29286 5.62077 8.88765 7.03612 10.076L7.40201 10.3832C7.80375 10.7212 8.004 10.8908 8.11896 11.1206C8.23515 11.3504 8.25122 11.6158 8.2846 12.1467L8.31427 12.6297C8.42923 14.4977 8.48732 15.4316 9.09796 15.7536C9.70861 16.0756 10.4676 15.573 11.9855 14.5665L12.3786 14.3059C12.81 14.0196 13.0251 13.8758 13.2723 13.8377C13.5196 13.7996 13.7692 13.8672 14.2686 14.0049L14.7235 14.1302C16.4813 14.6144 17.3602 14.8565 17.8385 14.3612C18.3182 13.866 18.0796 12.9603 17.6037 11.1501M18.019 8.32604C18.9906 6.75794 19.4752 5.9739 19.1612 5.34469C18.8472 4.71794 17.9399 4.66019 16.1278 4.54835L15.658 4.51886C15.1438 4.48691 14.8867 4.47093 14.663 4.35296C14.4392 4.23498 14.2748 4.02852 13.946 3.61561L13.6456 3.23956C12.4886 1.78575 11.9089 1.05823 11.2352 1.16515C10.5628 1.27329 10.2401 2.14337 9.59612 3.88474" stroke="black" stroke-linecap="round"/>
                <path d="M4.97306 7.59608C2.08673 9.69507 -0.122207 13.7099 1.01996 20.8192C2.03234 17.8551 5.08184 15.482 8.48981 14.3391" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.47624 18.3602C8.47624 18.3602 9.25994 20.0684 10.2241 20.6582C11.1883 21.2444 13.0746 21.1621 13.0746 21.1621C13.0746 21.1621 11.3564 21.94 10.7631 22.8986C10.1722 23.8571 10.2563 25.7337 10.2563 25.7337C10.2563 25.7337 9.47255 24.0255 8.50838 23.4356C7.54545 22.8506 5.6579 22.9317 5.6579 22.9317C5.6579 22.9317 7.3761 22.1538 7.96944 21.1953C8.5603 20.2367 8.47624 18.3602 8.47624 18.3602ZM18.6124 17.1313C18.6124 17.1313 18.0908 18.2705 17.448 18.6625C16.8052 19.0545 15.5468 18.9992 15.5468 18.9992C15.5468 18.9992 16.6927 19.5178 17.087 20.1568C17.4814 20.7959 17.4257 22.0469 17.4257 22.0469C17.4257 22.0469 17.9474 20.9077 18.5901 20.5157C19.2329 20.1237 20.4913 20.179 20.4913 20.179C20.4913 20.179 19.3454 19.6604 18.9511 19.0213C18.5568 18.3823 18.6124 17.1313 18.6124 17.1313Z" stroke="black" stroke-linejoin="round"/>
                </svg>
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
