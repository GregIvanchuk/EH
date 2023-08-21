"use client"
import styles from "./OrdersForm.module.css";
import React from "react";
import { useState } from "react";
import FramedCart from "../FramedCart";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { clearItems } from "../../Redux/cartSlice";
function OrdersForm({ openCart,itemsCart,setItemsCart,sum }) {
    const cartItems = useSelector (state => state.cart.cartItems)
    const totalCount = useSelector((state) => state.cart.totalCount);
    const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);

    const cats = [];
for (let i = 0; i < cartItems.length; i++ ){
  if (cartItems[i].category == 1) cats.push(cartItems[i].category);
  console.log(cats);
}


    let [onSub, setOnSub] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
  const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
 
  const onSubmit = (data) => {
    const newData = { ...data,totalCount:totalCount,  cartTotalPrice:cartTotalPrice };
    newData.items = []; // Створення масиву items в newData
    cartItems.forEach((item) => {
      newData.items.push({ // Додавання нового об'єкту до масиву
        title: item.title,
        price: item.price,
        count: item.count,
      });
    });
      console.log("---------------------");
      console.log(newData);
      console.log("---------------------");
    axios.post(apiForm2, newData)
    .then((response) => {
      if (response.status === 200) {
        dispatch(clearItems())
        setOnSub(!onSub);
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Form submission failed.');
    });
  };
        
    // fetchData() 


    return onSub ? (
        <FramedCart openCart={openCart} />
    ) : (
        <div className={styles.drawer}>
          <h2 className={styles.h2}>Заповніть поля:</h2>
            <div className={styles.cart_Items}>
                <div className={styles.form}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("fullName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="fullName"
                            type="text"
                            placeholder="прізвище та ім'я"
                        />
                        {errors.fullName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.fullName.message}</p>}
                        <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder="e-mail" type="email" id="email" {...register('email', { required:"Field is required" })} />
       
      </div>
      {errors.email && <span style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}} >{errors.email.message}</span>}    
                        <input 
                            {...register("phone",{ 
                                required: "Field is required",
                            })}
                            name="phone"
                            type="tel"
                            placeholder="телефон"
                        />
                         {errors.phone && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.phone.message}</p>}
                        <input
                            {...register("city",{ 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="city"
                            type="text"
                            placeholder="місто"
                        />
                        {errors.city && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.city.message}</p>}

                        <input
                            {...register("number",{ 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="number"
                            type="number"
                            placeholder="відділення нової пошти"
                        />
                        {errors.number && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.city.message}</p>}
                        <button className={styles.submit} type="submit">ОФОРМИТИ</button>
                        <Link href="/cart"> <button className={styles.back} >НАЗАД</button> </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default OrdersForm;
