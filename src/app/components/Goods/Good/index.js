"use client"
import Image from 'next/image'
import styles from './Good.module.css'
import { usePathname } from 'next/navigation'
import { useSelector,useDispatch } from "react-redux";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import {addCartItems} from '@/app/Redux/cartSlice';
import { fetchRemoveGoods } from '@/app/Redux/goodsSlice';
export default function Good({isPress, setIsPress, setIdf, good}) {
  const cartItems  = useSelector(state => state.cart.cartItems)
  // const [isClicked,setIsClicked] = useState(false);
  const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj._id === good._id ))
  const pathname = usePathname();
  const isEditing = (pathname == "/" ) ? true : false  ;
//   let pressAddFav = () => {
//       setIsPress(!isPress);
//       if (isPress == false) onHeart({urlImg,title,company, price, id})
//   }
const pressAddDescr = (_id) => {
  setIdf(_id);
  setIsPress(!isPress)
}
const dispatch  = useDispatch(); 
// const addCart = (obj) =>{
//   setIsClicked(!isClicked);
//   dispatch(addCartItems(obj))
// }
const removeGood = (_id) => {
    console.log(_id)
   dispatch(fetchRemoveGoods(_id));
};
  return (
      <div className={styles.goodItem}>
         { isEditing ? null :
   <div className={styles.editItems}>
                  <Image onClick={() => removeGood(good._id)}  width={50} height={50} className={styles.delete} src="/trashBox.png" alt="jjk" />
                  <Link href={`/admin/create/${good._id}`}> <Image width={50} height={50} className={styles.edit} src="/edit.png" alt="hjh" /></Link>
                  </div>
                  }
      {/* <Image  className={styles.descr} height={30} width={30} src={"/descr.png"} alt='jk'/> */}
      <div className={styles.contImg}>
               <Image height={170} width={170} src={good.imgmain} alt='jk'/>
               </div>
               <p className={styles.title}>{good.title}</p>
               <div className={styles.goodFooter}>
               <p className={styles.price}>{good.price} ₴</p>
                <Image className={styles.pressAddDescr} onClick={() => pressAddDescr(good._id) } height={30} width={30} src={"/addGood2.png"} alt='jk'/>
               </div>
            </div>
   
  )
}
