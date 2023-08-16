"use client"
import Image from 'next/image'
import styles from './Goods.module.css'
import { useState } from 'react'
import Good from './Good';
import Categor from '../Categor';
export default function Goods() {
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
  const categories = ["Все","Протеїн","Гейнер","Креатин","Амінокислоти","Вітаміни","Омега-3","Інше"]
  const ar = [1,2,3,4,5,6,7,8]
  return (
    <div className={styles.wrapper}>
    <Categor categories ={categories}  />
     <div className={styles.goods}>
     <Good/>
     <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/> <Good/>
     </div>
     </div>
   
  )
}
