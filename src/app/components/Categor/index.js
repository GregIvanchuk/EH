import React from "react";
import styles from "./Categor.module.css";
import { usePathname } from 'next/navigation'
function Categor ({categories}) { 
 const pathName = usePathname();
return(
    <>
      <ul className={(pathName == "/") ? styles.categories : styles.categories2 }>
      {/* <li  className={styles.active}>Тест</li> */}
{categories.map((value,i) => <li key={i}  className={styles.categories_Item}>{value}</li>)}
      </ul>
       </>
         )}
     export default Categor;
  //    .catItems {
  //     margin-bottom: 30px;
  //     display: flex;
  //     gap: 12px;
  //     padding-left: 0px;
  //     padding-bottom: 0px;
  //     padding-top: 0px;
  // }
  // @media (max-width: 1150px) {
  //     .catItems {
  //         justify-content: center;
  //         align-items: center;
  //         gap: 10px;
  //     }
  // }
  // @media (max-width: 700px) {
  //     .catItems {
  //         gap: 5px;
  //     }
  // }
  // @media (max-width: 621px) {
  //     .catItems {
  //         overflow-x: scroll;
  //         width: 100vw;
  //         margin-top: 0;
  //         margin-bottom: 0;
  //         -ms-overflow-style: none;
  //         scrollbar-width: none;
  //     }
  //     .catItems::-webkit-scrollbar{
  //         width: 0;
  //         height: 0;
  
  //     }
  //     .catNav {
  //         display: flex;
  //         align-items: center;
  //         height: 50px;
  //         padding-bottom: 0px;
  //         padding-top: 0px;
  //         width: 100vw;
  //         overflow-x: scroll;
  //         -ms-overflow-style: none;
  //         scrollbar-width: none;
  //     }
  //     .catNav::-webkit-scrollbar{
  //         width: 0;
  //         height: 0;
  //     }
  // }
  // @media (max-width: 583px) {
  //     .catItems {
  //         overflow-x: scroll;
  //         width: 110vw;
  //         margin-top: 0;
  //         margin-bottom: 0;
  //     }
  // }
  // @media (max-width: 554px) {
  //     .catItems {
  //         overflow-x: scroll;
  //         width: 120vw;
  //         margin-top: 0;
  //         margin-bottom: 0;
  //     }
  // }
  // @media (max-width: 505px) {
  //     .catItems {
  //         overflow-x: scroll;
  //         width: 130vw;
  //         margin-top: 0;
  //         margin-bottom: 0;
  //     }
  // }
  // @media (max-width: 475px) {
  //     .catItems {
  //         width: 135vw;
  //     }
  // }
  // @media (max-width: 450px) {
  //     .catItems {
  //         width: 140vw;
  //     }
  // }
  // @media (max-width: 435px) {
  //     .catItems {
  //         width: 145vw;
  //     }
  // }
  // @media (max-width: 420px) {
  //     .catItems {
  //         width: 150vw;
  //     }
  // }
  // @media (max-width: 405px) {
  //     .catItems {
  //         width: 155vw;
  //     }
  // }
  // @media (max-width: 390px) {
  //     .catItems {
  //         width: 160vw;
  //     }
  // }
  // @media (max-width: 375px) {
  //     .catItems {
  //         width: 165vw;
  //     }
  // }
  // @media (max-width: 360px) {
  //     .catItems {
  //         width: 170vw;
  //     }
  // }
  // .catItem {
  //     -webkit-tap-highlight-color: transparent;
  //     white-space: nowrap;
  //     cursor: pointer;
  //     font-family: "Marmelad";
  //     List-style-type: none;
  //     color: rgb(173, 173, 173);
  //     font-weight: 600;
  //     font-size: 17px;
  // }
  // .active {
  //     -webkit-tap-highlight-color: transparent;
  //     white-space: nowrap;
  //     cursor: pointer;
  //     font-family: "Marmelad";
  //     List-style-type: none;
  //     color: rgb(0, 0, 0);
  //     font-weight: 600;
  //     font-size: 17px;
  //     List-style-type: none;
  //     border-bottom: 3px solid   #222;
  // }
  