import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./Goals.module.scss";
import VideoBackground from '../VideoScroll/Video';
import Image from 'next/image';
import useIsMobile from '@/Hooks/IsMobile';
gsap.registerPlugin(ScrollTrigger);

export default function Goals() {
  const words = ["A","VISION","FOR","PROVIDING","BETTER","HEALTHCARE"]
  const IsMobile = useIsMobile()
  const goalsRef = useRef(null);
  const leftImgRef = useRef(null); // Ref for left imgContainer
  const rightImgRef = useRef(null); // Ref for right imgContainer
  const textRef = useRef(null); // Ref for text container

  useEffect(() => {
    const leftImg = leftImgRef.current;
    const rightImg = rightImgRef.current;
    const text = textRef.current;

    // GSAP animation for left image
    gsap.fromTo(leftImg, 
      { x: -500, opacity: 0 }, // Initial state
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: leftImg,
          start: 'top 75%', // Animation starts when the top of the imgContainer is at 75% of the viewport height
          end: 'top 25%', // Animation ends when the top of the imgContainer is at 25% of the viewport height
          scrub: true,
          delay: 0.2, // Add delay to the left image animation
        },
      }
    );

    // GSAP animation for right image
    gsap.fromTo(rightImg,
      { x: 200, opacity: 0 }, // Initial state
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: rightImg,
          start: 'top 75%', 
          end: 'top 25%', 
          scrub: true,
          // markers: true
        },
      }
    );

    // GSAP animation for text
    gsap.fromTo(text, 
      { y: 50, opacity: 0 }, // Initial state
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: text,
          start: 'top 50%', // Animation starts when the top of the text is at 75% of the viewport height
          end: 'top 40%', // Animation ends when the top of the text is at 25% of the viewport height
          scrub: true,
        },
      }
    );

    return () => {
      // Cleanup GSAP animations on unmount
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={goalsRef} className={styles.goals}>
      <VideoBackground/>
      <div className={styles.scroll}>
        <div className={styles.healthcare}>
          {words.map((word,i)=>(
            <>
            <h1 key={i} className={`${styles.heading} ${i === words.length-1 ? styles.slanted : ""}`}>{word}</h1>
            </>
          ))
          }
          {/* <h1 className={styles.heading}>THIS IS A VISION FOR PROVIDING
            <br />BETTER
          </h1>
          <h1 className={`${styles.heading} ${styles.slanted}`}>HEALTH CARE</h1> */}
        </div>

          {/* {!IsMobile &&
            <div ref={leftImgRef} className={styles.imgContainer}>
              <Image src="/assets/hospital.png" alt="hospital-image-1" height={400} width={300}/>  
            </div> 
          } */}
          <div className={styles.center} ref={textRef}>
            <p>&quot;Our goal is to build a hospital that provides quality, affordable healthcare to those in need.
            We&apos;re committed to creating a healthier future through compassionate care and innovation.&quot;
            </p>
          </div>


          {/* {!IsMobile &&
            <div ref={rightImgRef} className={styles.imgContainer}>
              <Image src="/assets/hospital-1.png" alt="hospital-image-2" height={400} width={300}/>  
            </div> 
          } */}
        </div>

    </div>
  )
}
