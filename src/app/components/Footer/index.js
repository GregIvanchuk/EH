"use client"
import styles from './Footer.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink, scroller  } from "react-scroll";
// import { isMobile } from 'react-device-detect';
// function handleClickStart()  {
//     scroller.scrollTo("home", {
//       duration: 800,
//       delay: 0,
//       smooth: "easeInOutQuart",
//     });
//   }
  
function Footer() {  
  return (
    <>
    <footer className={styles.footer}>
   <a  href='https://www.instagram.com/s.p.studio.ua/' target="_blank" className={styles.fd}>© 2023 Simplifier of business processes.</a>
           <div className={styles.threeBlock}>
             <a href='https://www.instagram.com/s.p.studio.ua/' target="_blank"><Image className={styles.icon}  width={30} height={30} src="/instagram.png" alt="instagram" /></a>
             <a href='https://www.facebook.com/profile.php?id=100088519397111' target="_blank"><Image className={styles.icon} width={30} height={30} src="/facebook.png" alt="facebook" /></a>
             <a href="viber://chat?number=+380937725057"><Image className={styles.icon} width={30} height={30} src="/viber.png" alt="viber" /></a>
             <a  href="https://t.me/+380937725057" target="_blank" ><Image className={styles.icon} width={35} height={35} src="/telegram.png" alt="telegram" /></a>
           </div>
    </footer>
    </>
  );
}

export default Footer;