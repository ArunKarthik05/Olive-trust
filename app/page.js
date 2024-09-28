'use client'
import { useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Stat from "@/components/Stat/Stat";
import Goals from '@/components/Goals/Goals';
import Trustees from '@/components/Trustees/Trustees';
import Footer from '@/components/Footer/Footer';
import Contact from '@/components/Contact-Us/Contact';
import useIsMobile from '@/Hooks/IsMobile';

export default function Home() {
  const isMobile = useIsMobile;
  const navItems = [
    { name: "Home", link: "" },
    { name: "Get Involved", link: "" },
    { name: "Mission", link: "" },
    { name: "Goals", link: "" },
    { name: "Success Stories", link: "" },
  ];
  
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const cursor = document.createElement('div');
      cursor.classList.add(styles.custom); 
      document.body.appendChild(cursor);

      if( !isMobile){
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
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);


  return (
    <div className={styles.page}>
      <Navbar navItems={navItems} />

      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Stat />
        </section>
        <section>
          <Goals />
        </section>
        <section>
          <Contact/>
        </section>
        <section>
          <Trustees/>
        </section>
      </main>
      
      <footer>
        <Footer navItems={navItems}/>
      </footer>
    </div>
  );
}
