import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import styles from "./Contact.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const headingRef = useRef(null);
    const glassyDivRef = useRef(null); 
    const contactUsRef = useRef(null);


    useEffect(() => {
        const letters = headingRef.current.querySelectorAll("div"); 
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current, 
                start: "top 70%", 
                end: "bottom 20%", 
                scrub: true, 
                markers: false,
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
            { y: 200, opacity: 0 }, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power2.out", 
            }, 
            "+=0.7"
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
                        <div>
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder='Name'/>
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder='Email'/>
                        </div>
                        <div>
                            <label htmlFor="phone"></label>
                            <input type="tel" id="phone" name="phone" placeholder='Phone'/>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <label htmlFor="message"></label>
                        <textarea id="message" name="message" placeholder='Message'></textarea>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3208 0.470431L5.83964 2.22483C-0.535636 3.41779 -1.029 6.7934 4.74261 9.73068L7.29115 11.0256L7.78204 13.8873C8.89819 20.3695 12.2197 20.8494 15.1453 14.951L19.5011 6.18732C21.4454 2.25074 19.5738 -0.320996 15.3208 0.470431ZM14.839 6.00327L10.4679 9.34979C10.2955 9.48108 10.095 9.52501 9.90491 9.49755C9.71483 9.47009 9.53518 9.37125 9.40747 9.1966C9.16057 8.85894 9.23211 8.36943 9.56546 8.1156L13.9365 4.76907C14.2699 4.51524 14.7501 4.58461 14.997 4.92227C15.2439 5.25992 15.1724 5.74943 14.839 6.00327Z" fill="#767676"/>
                        </svg>
                        <p>Send</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
