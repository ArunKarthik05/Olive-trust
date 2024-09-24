'use client'
import { useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import Stat from "@/components/Stat/Stat";
import Goals from '@/components/Goals/Goals';

export default function Home() {
  const navItems = [
    { name: "Home", link: "" },
    { name: "Get Involved", link: "" },
    { name: "Donate", link: "" },
    { name: "Impact Areas", link: "" },
    { name: "Success Stories", link: "" },
  ];

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const cursor = document.createElement('div');
      cursor.classList.add(styles.custom); 
      document.body.appendChild(cursor);

      const moveCursor = (e) => {
        const { clientX, clientY } = e;
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      };

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
      <section>
        <Hero />
      </section>
      <section>
        <Stat />
      </section>
      <section>
        <Goals />
      </section>
    </div>
  );
}
