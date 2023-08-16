import styles from './Description.module.css';
import React from 'react';
// import { useState,  } from 'react'; 
function  Description({isPress,setIsPress}) {
    // {openDescr,items,id}
    // onClick={() => openDescr()}
    return (
    <div className={styles.wrapper} >
    <div className={styles.container}>
    <div onClick={() => setIsPress(!isPress) } className={styles.closeIcon}></div>
        <h2 className={styles.h2}>Опис товару:</h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia consequatur, sequi voluptates tempore, ad, voluptatibus repellat velit quo ullam maxime iure unde optio provident rem odit beatae deleniti eum atque?
            {/* { items.map((obj,index) => (obj.id == id) ? obj.description : "") } */}
            </p> 
        <button  >Придбати</button>
    </div>
   </div>
    )}
    export default Description;