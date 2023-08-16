"use client"
import Image from 'next/image'
import styles from './Good.module.css'
import { useState } from 'react'
export default function Good() {
  let [isAdd, setIsAdd] = useState(true);
  let [isPress, setIsPress,] = useState(false);
  let clickAddCard = () => {
      setIsAdd(!isAdd);
      if (isAdd == false) onPlus({urlImg,title,company, price, id,count})
  };
  let pressAddFav = () => {
      setIsPress(!isPress);
      if (isPress == false) onHeart({urlImg,title,company, price, id})
  }
  let pressAddDescr = (id) => {
      openDescr();
      onDescr(id);
  }
  return (
      <div className={styles.goodItem}>
      <Image className={styles.descr} height={30} width={30} src={"/descr.png"} alt='jk'/>
      <div className={styles.contImg}>
               <Image height={170} width={170} src={"/good8.jpg"} alt='jk'/>
               </div>
               <p className={styles.title}>Протеїн 1 кг </p>
               <p className={styles.brand}>Optimum Nutrition</p>
               <div className={styles.goodFooter}>
               <p className={styles.price}>1999 ₴</p>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M12 2c0.3 0 0.5 0.2 0.5 0.5v8.5h8.5c0.3 0 0.5 0.2 0.5 0.5s-0.2 0.5-0.5 0.5h-8.5v8.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-8.5h-8.5c-0.3 0-0.5-0.2-0.5-0.5s0.2-0.5 0.5-0.5h8.5v-8.5c0-0.3 0.2-0.5 0.5-0.5z"/>
</svg>

               </div>
            </div>
   
  )
}
