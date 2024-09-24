import React, { useEffect, useRef, useState } from 'react'
import styles from "./Goals.module.scss";
import Image from 'next/image';

export default function Goals() {
  const [activeContainer, setActiveContainer] = useState(0); 
  const scrollContainer = useRef(null);

  const handleNext = () => {
    if (activeContainer < 2 ) {
        scrollContainer.current.scrollBy({ left: 1000, behavior: 'smooth' });
        setActiveContainer(activeContainer + 1);
    }else{
        setTimeout(() => {
            scrollContainer.current.scrollTo({ left: 0, behavior: 'auto' }); 
            setActiveContainer(0);
        }, 500);
    }
};

  useEffect(() => {
    const intervalId = setInterval(() => {
        handleNext();
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [activeContainer]); 

  return (
    <div className={styles.goals}>
      <div className={styles.upperContent}>
        <div className={styles.scrollContainer} ref={scrollContainer}>
          <div className={styles.imgContainer}>
            <Image src="/hospital.jpg" alt="college-plan" height={75} width={828}/> 
          </div>
          <div className={styles.imgContainer}>
            <Image src="/college.jpg" alt="college-plan" height={75} width={828}/> 
          </div>
          <div className={styles.item}></div>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.heading}>Goals and Objectives</h1>
            <p>At Olive Org, Our Goals and objectives for the upcoming years for the well being for every living being by
            providing <span>Healthcare</span> and <span>Education</span>. We are in the mission to build a brighter future.</p>
        </div>
      </div>

      <div className={styles.hospital}>
        <div className={styles.content}>
          <h1 className={styles.subHeading}>Our Vision for HealthCare</h1>
          <p>At Olive charity trust, we are committed to transforming healthcare access for rural and underserved communities. Our mission is to build a fully-equipped hospital in rural areas, where quality medical care is often unavailable. This hospital will provide essential healthcare services, including maternal care, emergency treatment, and preventive health programs, ensuring that even the most marginalized have access to life-saving treatments. We believe that good health is a fundamental right, and through this initiative, we strive to bridge the healthcare gap for the poor. Join us in creating a healthier, more equitable future for all.</p>
        </div>
        <div className={styles.imgContainer}><Image src="/hos-2.avif" alt='hospital-interior' height={500} width={828}/></div>
      </div>
    </div>
  )
}
