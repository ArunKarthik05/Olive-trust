import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import styles from "./Contact.module.scss";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const headingRef = useRef(null);
    const glassyDivRef = useRef(null); 
    const contactUsRef = useRef(null);


    useEffect(() => {
        const letters = headingRef.current.querySelectorAll("div"); // Select all div elements
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current, // The element that triggers the animation
                start: "top 70%", // When to start the animation
                end: "bottom 20%", // When to end the animation
                scrub: true, // Smooth scrubbing
                markers: false, // Disable markers for debugging
            }
        });

        letters.forEach((letter, index) => {
            timeline.fromTo(letter, 
                { y: -200, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.5, 
                    delay: index * 0.1 
                }, 
                0
            );
        });

        timeline.fromTo( [glassyDivRef.current, contactUsRef.current],
            { y: 200, opacity: 0 }, // Starting position (coming from below)
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power2.out", // Easing function for smoothness
            }, 
            "<" // Start this animation at the same time the letters finish
        );

        return () => {
            timeline.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const headingText = "CONTACT US".split("").map((letter, index) => (
        <div key={index} className={styles.letter}>{letter}</div> 
    ));

    return (
        <div className={styles.contact}>
            <h1 ref={headingRef} className={styles.heading}>
                {headingText}
            </h1>

            <div className={styles.glassyDiv} ref={glassyDivRef}>
                    <p>Olive Org</p>
                    <p>+91 93484039378</p>
                    <p>oliveorg@gmail.com</p>
                    <p>Pavoochatram,Tenkasi,TamilNadu</p>
            </div>

            <div className={styles.contactUs} ref={contactUsRef}>
                <div className={styles.left}>
                    <div className={styles.row1}>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Phone</div>
                    </div>
                    <div className={styles.row2}>Message</div>
                </div>
                <div className={styles.right}>Send</div>
            </div>
        </div>
    );
}
