import React from 'react'
import styles from "./Trustee.module.scss";
import Image from 'next/image';

export default function Trustees() {
  return (
    <div className={styles.main}>
        <h1 className={styles.subHeading}>Our Trustees</h1>
        <div className={styles.trustee1}>
          <div className={styles.quoteContainer}>
            <div className={styles.imgContainer}>
              <Image src="/trustee1.jpeg" alt="trustee-1" height={300} width={300}/>
            </div>
            <span className={styles.quoteOpening}>
              <div className={styles.svgContainer}>
                    <svg width="32" height="32" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8413 3.15479C17.4565 5.79736 15.394 8.55273 13.6538 11.4209C11.9458 14.2891 10.8179 17.0444 10.27 19.687C10.689 20.1382 11.1885 20.5732 11.7686 20.9922C12.3809 21.4111 13.0254 21.814 13.7021 22.2007C14.3789 22.5552 15.0718 22.8774 15.7808 23.1675C16.4897 23.4575 17.1826 23.667 17.8594 23.7959C18.1172 24.376 18.3105 25.0366 18.4395 25.7778C18.5684 26.4868 18.6328 27.1636 18.6328 27.8081C18.6328 29.0327 18.3911 30.1929 17.9077 31.2886C17.4565 32.3843 16.812 33.3511 15.9741 34.189C15.1685 35.0269 14.2017 35.7036 13.0737 36.2192C11.9458 36.7026 10.7373 36.9443 9.44824 36.9443C8.32031 36.9443 7.19238 36.7349 6.06445 36.3159C4.96875 35.8647 3.98584 35.2041 3.11572 34.334C2.24561 33.4316 1.53662 32.2876 0.98877 30.9019C0.440918 29.5161 0.166992 27.8564 0.166992 25.9229C0.166992 24.2148 0.408691 22.3618 0.89209 20.3638C1.40771 18.3657 2.24561 16.271 3.40576 14.0796C4.59814 11.8882 6.14502 9.61621 8.04639 7.26367C9.97998 4.91113 12.3486 2.52637 15.1523 0.109375L19.8413 3.15479ZM45.3164 3.15479C44.124 4.47607 43.0122 5.82959 41.981 7.21533C40.9497 8.60107 40.0151 10.0029 39.1772 11.4209C38.3716 12.8389 37.6787 14.2407 37.0986 15.6265C36.5186 17.0122 36.0835 18.3657 35.7935 19.687C36.2124 20.1382 36.7119 20.5732 37.292 20.9922C37.9043 21.4111 38.5488 21.814 39.2256 22.2007C39.9023 22.5552 40.5952 22.8774 41.3042 23.1675C42.0132 23.4575 42.7061 23.667 43.3828 23.7959C43.6406 24.376 43.8179 25.0366 43.9146 25.7778C44.0435 26.4868 44.1079 27.1636 44.1079 27.8081C44.1079 29.0327 43.8662 30.1929 43.3828 31.2886C42.9316 32.3843 42.2871 33.3511 41.4492 34.189C40.6436 35.0269 39.6768 35.7036 38.5488 36.2192C37.4209 36.7026 36.2124 36.9443 34.9233 36.9443C33.7954 36.9443 32.6675 36.7349 31.5396 36.3159C30.4438 35.8647 29.4609 35.2041 28.5908 34.334C27.7207 33.4316 27.0117 32.2876 26.4639 30.9019C25.916 29.5161 25.6421 27.8564 25.6421 25.9229C25.6421 24.2148 25.8838 22.3618 26.3672 20.3638C26.8828 18.3657 27.7207 16.271 28.8809 14.0796C30.0732 11.8882 31.6201 9.61621 33.5215 7.26367C35.4551 4.91113 37.8237 2.52637 40.6274 0.109375L45.3164 3.15479Z" 
                    fill="black"/>
                    </svg>
              </div>
            </span>
          </div>

          {/* text */}
          <div className={styles.content}>
            <p className={styles.voice}>I am committed to making a lasting impact on the lives of those in need. Our mission is to provide quality healthcare and education to underprivileged communities, empowering them to build a brighter future. We believe that every individual, regardless of their background, deserves access to these essential services. Together, we are paving the way for a healthier and more educated society.</p>
            <p className={styles.name}>Mrs.Then Amirtham Prathiba</p>
            <p className={styles.position}>Managing Director</p>
          </div>
        </div>
        <div className={styles.trustee2}>
          <div className={styles.quoteContainer}>
            <div className={styles.imgContainer}>
              <Image src="/trustee2.jpeg" alt="trustee-2" height={300} width={300}/>
            </div>
            <span className={styles.quoteOpening}>
                <div className={styles.svgContainer}>
                  <svg width="32" height="32" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8413 3.15479C17.4565 5.79736 15.394 8.55273 13.6538 11.4209C11.9458 14.2891 10.8179 17.0444 10.27 19.687C10.689 20.1382 11.1885 20.5732 11.7686 20.9922C12.3809 21.4111 13.0254 21.814 13.7021 22.2007C14.3789 22.5552 15.0718 22.8774 15.7808 23.1675C16.4897 23.4575 17.1826 23.667 17.8594 23.7959C18.1172 24.376 18.3105 25.0366 18.4395 25.7778C18.5684 26.4868 18.6328 27.1636 18.6328 27.8081C18.6328 29.0327 18.3911 30.1929 17.9077 31.2886C17.4565 32.3843 16.812 33.3511 15.9741 34.189C15.1685 35.0269 14.2017 35.7036 13.0737 36.2192C11.9458 36.7026 10.7373 36.9443 9.44824 36.9443C8.32031 36.9443 7.19238 36.7349 6.06445 36.3159C4.96875 35.8647 3.98584 35.2041 3.11572 34.334C2.24561 33.4316 1.53662 32.2876 0.98877 30.9019C0.440918 29.5161 0.166992 27.8564 0.166992 25.9229C0.166992 24.2148 0.408691 22.3618 0.89209 20.3638C1.40771 18.3657 2.24561 16.271 3.40576 14.0796C4.59814 11.8882 6.14502 9.61621 8.04639 7.26367C9.97998 4.91113 12.3486 2.52637 15.1523 0.109375L19.8413 3.15479ZM45.3164 3.15479C44.124 4.47607 43.0122 5.82959 41.981 7.21533C40.9497 8.60107 40.0151 10.0029 39.1772 11.4209C38.3716 12.8389 37.6787 14.2407 37.0986 15.6265C36.5186 17.0122 36.0835 18.3657 35.7935 19.687C36.2124 20.1382 36.7119 20.5732 37.292 20.9922C37.9043 21.4111 38.5488 21.814 39.2256 22.2007C39.9023 22.5552 40.5952 22.8774 41.3042 23.1675C42.0132 23.4575 42.7061 23.667 43.3828 23.7959C43.6406 24.376 43.8179 25.0366 43.9146 25.7778C44.0435 26.4868 44.1079 27.1636 44.1079 27.8081C44.1079 29.0327 43.8662 30.1929 43.3828 31.2886C42.9316 32.3843 42.2871 33.3511 41.4492 34.189C40.6436 35.0269 39.6768 35.7036 38.5488 36.2192C37.4209 36.7026 36.2124 36.9443 34.9233 36.9443C33.7954 36.9443 32.6675 36.7349 31.5396 36.3159C30.4438 35.8647 29.4609 35.2041 28.5908 34.334C27.7207 33.4316 27.0117 32.2876 26.4639 30.9019C25.916 29.5161 25.6421 27.8564 25.6421 25.9229C25.6421 24.2148 25.8838 22.3618 26.3672 20.3638C26.8828 18.3657 27.7207 16.271 28.8809 14.0796C30.0732 11.8882 31.6201 9.61621 33.5215 7.26367C35.4551 4.91113 37.8237 2.52637 40.6274 0.109375L45.3164 3.15479Z" 
                  fill="black"/>
                  </svg>
                </div>
            </span>
          </div>

            {/* text */}
            <div className={styles.content}>
            <p className={styles.voice}>
            Our vision is to create a world where no one is deprived of basic healthcare and education due to poverty. We established this trust to bring meaningful change to underserved communities, ensuring they have the tools and support to thrive. I am passionate about driving initiatives that uplift lives and create opportunities for future generations. Our efforts are focused on building a foundation for lasting progress and hope.
            </p>
            <p className={styles.name}>Mr.Prabhakar</p>
            <p className={styles.position}>Co-Founder</p>
          </div>
        </div>
    </div>
  )
}
