"use client"
import Image from 'next/image'
import styles from './Goods.module.css'
import { useState } from 'react'
import Good from './Good';
import Categor from '../Categor';
import Description from '../Description';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCatId,setSelected } from "../../Redux/filterSlice";
import { fetchGoods } from '@/app/Redux/goodsSlice';
import ReactPaginate from 'react-paginate';
export default function Goods() {
  const isLoading = useSelector(state => state.goods.status === 'loading');
  const dispatch = useDispatch()
  let [isPress, setIsPress,] = useState(false);
  const goods = useSelector((state) => state.goods.goods)
  const catId = useSelector((state) => state.filter.catId)
  const inputValued =  useSelector((state) => state.search.inputValue)
  const [idf,setIdf] =  useState(0);
  const pullOut = (idt) =>{
    setIdf(idt);
  }
  const [currentPage, setCurrentPage] = useState(0); // Додайте стан для поточної сторінки
  const goodsPerPage = 4; // Кількість товарів на одній сторінці
  const pullOutD = (idd) =>{
    setIdf(idd);
  }
  useEffect(() => {
    dispatch(fetchGoods())
  }, []);
  useEffect(() => {
scrollTo({ top: 0, behavior: 'smooth' }); // Вгору сторінки з плавністю
  }, [currentPage]);
  console.log(goods);
  const categories = ["Bce","Протеїн","Гейнер","Креатин","Амінокислоти","Вітаміни","Омега-3","Інше"]
  const ar = [1,2,3,4,5,6,7,8]
  const startIndex = currentPage * goodsPerPage;
  const endIndex = startIndex + goodsPerPage;
  const currentGoods = goods.slice(startIndex, endIndex);
  const filtredGoods = goods.filter((item) =>
    item.title.toLowerCase().includes(inputValued.toLowerCase())
         ) 
         console.log(filtredGoods);
         const handlePageClick = ({ selected }) => {
          setCurrentPage(selected);
        };
  return (
    <div className={styles.wrapper}>
      <Categor categories ={categories} catId={catId} OnclickCatIndex={(id) => dispatch(getCatId(id))}/>
     {/* <div className={styles.goods}>
     {
     isLoading ? <Image className={styles.loader} width={500} height={300} src="/Loading.gif" alt='gif'/>:
     inputValued ? 
    ( (catId == 0) ? 
    filtredGoods.map((item,index) => <Good isPress={isPress} setIsPress={setIsPress} setIdf={setIdf} callback2={(idd)=> pullOut(idd)}  callback={(idt)=> pullOut(idt)} key={index}  good={...item}/>):
    filtredGoods.filter((obj => (obj.category === catId)))
     .map((item,index)=> <Good isPress={isPress} setIsPress={setIsPress} setIdf={setIdf}  callback={(idt)=> pullOut(idt)}  key={index}  good={...item}/>)
    ):
    ((catId == 0) ? 
    currentGoods.map((item,index) => <Good isPress={isPress} setIsPress={setIsPress} setIdf={setIdf} callback2={(idd)=> pullOut(idd)}  callback={(idt)=> pullOut(idt)} key={index}  good={...item}/>):
    goods.filter((obj => (obj.category === catId)))
  .map((item,index)=> <Good isPress={isPress} setIsPress={setIsPress} setIdf={setIdf}  callback={(idt)=> pullOut(idt)}  key={index}  good={...item}/>)
    )
   }    
     </div> */}
     <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          breakLabel={'...'}
          pageCount={Math.ceil(goods.length / goodsPerPage)}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
        />
     {isPress ?
     <Description isPress={isPress} setIsPress={setIsPress}  good = {goods.find(obj => obj._id == idf)} /> : null
      }
     </div>
     
  )
}
