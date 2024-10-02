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
    };
  }, []);

  return (
    <div ref={goalsRef} className={styles.goals}>
      <VideoBackground/>
      <div className={styles.scroll}>
        <div className={styles.healthcare}>
        {IsMobile ? (
            words.map((word,i)=>(
              <div className={i === words.length-1 ? styles.h1Container : ""} key={i}>
                <h1 className={`${i === words.length-1 ? styles.slanted : styles.Goalheading
                  
                }`}>{word}</h1>
              </div>
            ))
        ): (
          <>
            <h1 className={styles.heading}>A VSISION FOR 
              <br />PROVIDING BETTER</h1> 
              <h1 className={styles.slanted}>HEALTHCARE</h1>
          </>
        )}
        </div>
          <div className={styles.center} ref={textRef}>
            <p>&quot;Our goal is to build a hospital that provides quality, affordable healthcare to those in need.
            We&apos;re committed to creating a healthier future through compassionate care and innovation.&quot;
            </p>
          </div>

        </div>

    </div>
  )
}
