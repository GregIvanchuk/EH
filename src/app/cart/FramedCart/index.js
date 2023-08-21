import styles from "./FramedCart.module.css";
import Link from "next/link";
function FramedCart() {
    return (
        <div className={styles.drawer}>
      <main className={styles.epmty_info}>
        <div className={styles.empty_title}>
          <h2>Ваше замовлення прийнято !</h2>
        </div>
        <span>Через декілька хвилин ми вам зателефонуємо.</span>
        <img className={styles.frimg} height={100} width={100} src="/images/framed.png"/>
        <Link href="/">
        <button> Назад</button>
        </Link>
      </main>
      </div>
    );
}
export default FramedCart;
