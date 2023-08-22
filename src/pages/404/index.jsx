import { useRouter } from "next/router"
import styles from "./404.module.css"
import Head from "next/head"

const NotFounded = () => {
  const {push} = useRouter()

    return (
      <>
        <Head>
          <title>Ошибка - Страница не найдена</title>
        </Head>
  
        <div className="container">
          <div onClick={() => push("/")} className={styles.error}>
            <p>Страница не найдена</p>
            <div className={styles.button}>&#8249; На главную</div>
          </div>
        </div>
      </>
    )
  }
  
  export default NotFounded