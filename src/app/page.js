import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Goods from './components/Goods'
export default function Home() {
  
  return (
    <main className={styles.main}>
     <Header/>
     <Slider/>

    <Goods/>
     <Footer/>
    </main>
   
  )
}
