import styles from "./FramedCart.module.css";
import Link from "next/link";
import Image from "next/image";
function FramedCart() {
    return (
        <div className={styles.drawer}>
      <main className={styles.epmty_info}>
        <div className={styles.empty_title}>
          <h2>Ваше замовлення прийнято !</h2>
        </div>
        <span>Найблищим часом ми з вами зв'яжемось</span>
        <Image className={styles.frimg} height={100} width={100} src="/framed.gif" alt="img"/>
        <Link href="/">
        <button> НАЗАД</button>
        </Link>
      </main>
      </div>
    );
}
export default FramedCart;
