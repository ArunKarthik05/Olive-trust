'use client'
import { useEffect, useState, useRef } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Stat from "@/components/Stat/Stat";
import Goals from '@/components/Goals/Goals';
import Trustees from '@/components/Trustees/Trustees';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact-Us/Contact';
import useIsMobile from '@/Hooks/IsMobile';
import Missions from '@/components/Missions/Missions';

export default function Home() {
  const isMobile = useIsMobile();
  const navItems = [
    { name: "Home", link: "hero" },
    { name: "Get Involved", link: "stat" },
    { name: "Mission", link: "missions" },
    { name: "Goals", link: "goals" },
    { name: "Success Stories", link: "trustees" },
  ];

  const heroRef = useRef(null);
  const statRef = useRef(null);
  const goalsRef = useRef(null);
  const contactRef = useRef(null);
  const trusteesRef = useRef(null);
  const missionsRef = useRef(null);

  const refs = {
    hero: heroRef,
    stat: statRef,
    missions: missionsRef,
    goals: goalsRef,
    contact: contactRef,
    trustees: trusteesRef,
  };

  const [currentSection, setCurrentSection] = useState("Home");
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateWindowSize);



    const handleDOMContentLoaded = () => {
      // Create the cursor element once if not created
      // cursor = document.querySelector(`.${styles.custom}`);
      // if (!cursor) {
        const cursor = document.createElement('div');
        // para = document.createElement('p');
        // para.textContent = currentSection;
        // para.classList.add(styles.currentDiv)
        cursor.classList.add(styles.custom);
        // cursor.appendChild(para);
        document.body.appendChild(cursor);
      // } else {
      //   para = cursor.querySelector('p');
      // }

      if (!isMobile) {
        const smoothCursor = () => {
          let mouseX = 0;
          let mouseY = 0;
          let cursorX = 0;
          let cursorY = 0;
          const speed = 0.1;

          const update = () => {
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;
            cursorX += distX * speed;
            cursorY += distY * speed;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(update);
          };

          document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
          });

          const handleMouseOver = (e) => {
            const computedStyle = window.getComputedStyle(e.target);
            if (computedStyle.cursor === 'pointer') {
              cursor.style.display = 'none';
            } else {
              cursor.style.display = 'block';
            }
          };

          document.addEventListener('mouseover', handleMouseOver);

          update();
        };

        smoothCursor();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [isMobile, windowSize]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight / 2;
  //     for (const key in refs) {
  //       const ref = refs[key].current;
  //       if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
  //         setCurrentSection(key);
  //         const cursor = document.querySelector(`.${styles.custom}`);
  //         const para = cursor ? cursor.querySelector(`${styles.currentDiv}`) : null;
  //         if (para) {
  //           para.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  //         }
  //         break;
  //       }
  //     }
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  

  return (
    <div className={styles.page}>
      <Navbar navItems={navItems} refs={refs} />

      <main>
        <section ref={heroRef}>
          <Hero />
        </section>

        <div ref={statRef}>
          <Stat />
        </div>

        <div ref={missionsRef}>
          <Missions />
        </div>

        <div ref={goalsRef}>
          <Goals />
        </div>

        <section ref={contactRef}>
          <Contact />
        </section>

        <section ref={trusteesRef}>
          <Trustees />
        </section>
      </main>

      <footer>
        <Footer navItems={navItems} refs={refs} />
      </footer>
    </div>
  );
}
