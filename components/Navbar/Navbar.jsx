'use client'
import React, { useState } from 'react'
import styles from "./Navbar.module.scss";

export default function Navbar({navItems}) {
  const [activeIndex,setActiveIndex] = useState(0);

  const handleClick= (index)=>{
    setActiveIndex(index)
  }
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}></div>
        <div className={styles.itemsWrapper}>
          {navItems.map((item,i)=>{
            return(
              <p key={i} className={activeIndex === i && `${styles.active}`} onClick={()=>handleClick(i)}>{item.name}</p>
            )
          })}
        </div>
        <div className={styles.contactUs}>
          <p>Contact Us</p>
        </div>
    </nav>
  )
}
