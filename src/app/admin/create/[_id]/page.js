"use client"
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { usePathname } from 'next/navigation'
import axios from '../../../axios';
import styles from './create.module.css';
import HeaderAdmin from '@/app/components/HeaderAdmin';
function create(props) {
  const pathname = usePathname()
  const [imgUrl, setImgUrl] =  React.useState("");
  // const [imgUrl2, setImgUrl2] =  React.useState("");
  // const [imgUrl3, setImgUrl3] =  React.useState("");
  function extractRestOfString(inputString, delimiter) {
    const delimiterIndex = inputString.indexOf(delimiter);
    
    if (delimiterIndex !== -1) {
      return inputString.slice(delimiterIndex + delimiter.length);
    }
    
    return inputString;
  }
  const id = extractRestOfString(pathname, '/admin/create/');  
  
  const isEditing = (id != "0") ? true : false;
  const { register, handleSubmit, reset , setValue , formState: { errors } } = useForm();
  // const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
  const onSubmit = (data) => {
    const newData =  { ...data, imgmain: imgUrl };
    { isEditing ?  axios.patch(`/posts/${id}`, newData)
    .then(function (response) {
      alert("Елемент успішно відредаговано)");
      reset()
    })
    .catch(function (error) {
      alert("Не вдалося відредагувати елемент) Спробуйте будь ласка пізніше)");
    })
     : axios.post("/posts", newData)
    .then(function (response) {
      alert("Елемент успішно додано)");
      reset()
    })
    .catch(function (error) {
      alert("Не вдалося додати елемент) Спробуйте будь ласка пізніше)");
    }); }
  };
  const handleChangeFile = async (event) => {
    try {
        const formData = new FormData ()
        const file = event.target.files[0];
        formData.append('image', file)
        const {data} = await axios.post("/upload", formData)
        setImgUrl(`http://localhost:4444${data.url}`);
       
    } catch (error) {
      console.warn(error);
      alert("Помилка при завантаженні файлу")
    }
  }
  // const handleChangeFile2 = async (event) => {
  //   try {
  //       const formData = new FormData ()
  //       const file = event.target.files[0];
  //       formData.append('image', file)
  //       const {data} = await axios.post("/upload", formData)
  //       setImgUrl2(`http://localhost:4444${data.url}`);
       
  //   } catch (error) {
  //     console.warn(error);
  //     alert("Помилка при завантаженні файлу")
  //   }
  // }
  // const handleChangeFile3 = async (event) => {
  //   try {
  //       const formData = new FormData ()
  //       const file = event.target.files[0];
  //       formData.append('image', file)
  //       const {data} = await axios.post("/upload", formData)
  //       setImgUrl3(`http://localhost:4444${data.url}`);
  //   } catch (error) {
  //     console.warn(error);
  //     alert("Помилка при завантаженні файлу")
  //   }
  // }
 
  React.useEffect(()=>{
    if (id) {
    axios.get(`/posts/${id}`).then( ({data}) => {
      setValue("title", data.title.toString());
      setValue("price", data.price);
      setValue("text1", data.text1);
      setValue("category", data.category);
      setImgUrl(data.imgmain);
      // setImgUrl2(data.imgsecond);
      // setImgUrl3(data.imgthird);
    } ).catch((err) =>{
      console.log(err);
    })
  }
  },[])

  return (
    <>
    <HeaderAdmin/>
    <div className={styles.wrapper}>
    <div className={styles.content}>
    <div className={styles.item}>
  <label htmlFor="img1">Фото товару:</label>
  <input 
    onChange={handleChangeFile}   
    className={styles.inputPhoto} 
    placeholder=" фото 1" 
    type="file" 
    id="img1" 
  />
  {isEditing && <img width={100} height={100} src={imgUrl} alt="product" />}
</div>


    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.item}>
  <label htmlFor="category"></label>
  <select className={styles.select} id="category" {...register('category', { required: true })}>
    <option className={styles.option1} value="1">Протеїн</option>
    <option className={styles.option} value="2">Гейнер</option>
    <option className={styles.option} value="3">Креатин</option>
    <option className={styles.option} value="4">Амінокислоти</option>
    <option className={styles.option} value="5">Вітаміни</option>
    <option className={styles.option} value="6">Омега-3</option>
    <option className={styles.option} value="7">Інше</option>

  </select>
  {errors.category && <span style={{color:"red"}}>snajdshb</span>}
</div>
      <div className={styles.item}>
        <label htmlFor="title"></label>
        <input   className={styles.input}  placeholder=" назва товару" type="text" id="name" {...register('title', { required: true })} />
        {errors.title && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      
      <div className={styles.item}>
        <label htmlFor="price"></label>
        <input   className={styles.input}  placeholder=" ціна" type="number" id="price" {...register('price', { required: true })} />
        {errors.price && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      <div className={styles.item}>
      <label htmlFor="text1"></label>
      <textarea className={styles.textarea}  placeholder=" опис товару " rows="4" cols="50" type="text" id="text1" {...register('text1', { required: true })}/>
      {errors.text1 && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div>
      {/* <div className={styles.item}>
      <label htmlFor="text2"></label>
      <textarea className={styles.textarea}  placeholder=" опис товару 2" rows="4" cols="50" type="text" id="text2" {...register('text2', { required: true })}/>
      {errors.text2 && <span style={{color:"red"}} >всі поля мають бути заповнені</span>}
      </div> */}
      
      <button className={styles.button} type="submit">
       { isEditing ? "ЗБЕРЕГТИ ЕЛЕМЕНТ" : "СТВОРИТИ ЕЛЕМЕНТ"  }
        </button>
    </form>
    </div>
    </div>
    </>
  );
}

export default  create;
