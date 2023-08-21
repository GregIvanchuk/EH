import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { fetchUserData } from '../Redux/auth';

function LoginForm() {
  const dispatch = useDispatch();
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
  });

  useEffect(() => {
    function handleResize() {
      setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmit = async (data) => {
    const values = await dispatch(fetchUserData(data))
    if (!values.payload) return alert("Не вдалося авторизуватись");
    if ("token" in values.payload) localStorage.setItem("token", values.payload.token);
  };

  if (screenWidth < 1200) {
    return <div>Ваш екран занадто малий для перегляду цієї сторінки</div>;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* ... ваш код ... */}
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
