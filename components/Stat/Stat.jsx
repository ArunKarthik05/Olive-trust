'use client'
import React, { useState,useRef } from 'react'
import styles from "./Stat.module.scss";
import { missionsData } from '@/data/Missions';
import Image from 'next/image';

export default function Stat() {
    const [activeMission,setActiveMission] = useState(0);
    const missionRefs = useRef([]);
    const scrollContainer = useRef(null)


    const handleNext = () => {
        if (activeMission < missionsData.missions.length - 1) {
            scrollContainer.current.scrollBy({ left: 1200, behavior: 'smooth' });
            setActiveMission(activeMission + 1);
        }
    };

    const handlePrev = () => {
        if (activeMission > 0) {
            scrollContainer.current.scrollBy({ left: -500, behavior: 'smooth' });
            setActiveMission(activeMission - 1);
        }
    };



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
        <h2 className={`${styles.subHeading} ${styles.heading2}`}>Empowering Lives, Creating Futures</h2>
        <p className={`${styles.statPara} ${styles.para2}`}>At OliveOrg, we are on a heartfelt mission to empower 
        unprivileged lives by providing them with the essential resources  and <br/>opportunities they need to build a brighter future.
        </p>
        
        <div className={styles.grayContainer}><p>We believe that by working together, we can create a world where every child has the opputunity to reach their full potential.</p></div>

        {/* scroller */}
        <div className={styles.gridWrapper} ref={scrollContainer}>
            {/* item */}
            {missionsData.missions.map((item,i)=>(
            <div className={styles.gridContainer} key={i} ref={(el) => (missionRefs.current[i] = el)}>
                <div className={styles.gridItem}>

                {/* buttons */}
                <div className={styles.buttons}>
                        <button className={`${activeMission === 0 ? styles.disabled : ''}`} onClick={handlePrev}>
                            <span className={styles.svgContainer}>
                                <svg style={{transform:"rotate(180deg)"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g><path d="M23.725 11.3364L23.7242 11.3355L18.8256 6.4605C18.4586 6.09529 17.865 6.09665 17.4997 6.46368C17.1345 6.83067 17.1359 7.42425 17.5028 7.7895L20.7918 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H20.7917L17.5029 16.2105C17.1359 16.5757 17.1345 17.1693 17.4997 17.5363C17.865 17.9034 18.4587 17.9047 18.8256 17.5395L23.7242 12.6645L23.7251 12.6636C24.0922 12.2971 24.0911 11.7016 23.725 11.3364Z" fill="black"></path></g>
                                </svg>
                            </span>
                            <span>Prev Mission</span>
                        </button>
                        <button className={`${activeMission === 3 ? styles.disabled : ''}`} onClick={handleNext}>
                            <span>Next Mission</span>
                        <span className={styles.svgContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><g><path d="M23.725 11.3364L23.7242 11.3355L18.8256 6.4605C18.4586 6.09529 17.865 6.09665 17.4997 6.46368C17.1345 6.83067 17.1359 7.42425 17.5028 7.7895L20.7918 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H20.7917L17.5029 16.2105C17.1359 16.5757 17.1345 17.1693 17.4997 17.5363C17.865 17.9034 18.4587 17.9047 18.8256 17.5395L23.7242 12.6645L23.7251 12.6636C24.0922 12.2971 24.0911 11.7016 23.725 11.3364Z" fill="black"></path></g>
                                </svg>
                            </span> 
                        </button>
                    </div>

                    {/* heading */}
                    <h2 className={styles.subHeading}>Mission</h2> 


                    {/* 3linecontent */}
                    <p className={styles.content}>{item.content}</p>


                    <div className={styles.allmissions}>
                        {missionsData.allmissions.map((mission,index)=>(
                            <div className={`${activeMission === index ? styles.active : ''} ${styles.mission}`} key={index}><p>{mission}</p></div>
                        ))}
                    </div>

                </div>
                <div className={styles.gridItem}>
                    {/* video1 */}
                    <video className={styles.video} src={missionsData.missions[activeMission].video} autoPlay loop muted controls></video>
                </div>

                {/* images */}
                {missionsData.missions[activeMission].images.map((img,i)=>(
                    <div className={styles.gridItem} key={i}>
                        <Image src={img} alt={missionsData.missions[activeMission].mission} height={300} width={300}/>
                    </div>
                ))}
            </div>
            ))}
        </div>
    </div>
  )
}