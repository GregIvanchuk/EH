"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Goods from './components/Goods'
import { useEffect,useState } from 'react'
import Cart from './cart/page'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Додано useState
  useEffect(() => {
     setTimeout(() => {
        setIsLoading(false);
      }, 500)
  },[])
  return (
    <main className={styles.main}>
      { 
      isLoading ?
      <div className={styles.preloadContainer}>
      <Image className={styles.logoPreload} width={300} height={300} src="/logo.svg"/>
      </div> :
      <>
      <Header/>
     <Slider/>
    <Goods/>
     <Footer/> 
     </>
    }
    </main>
   
  )
}
