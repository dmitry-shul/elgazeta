import styles from "./Graduates.module.css"
import Head from "next/head"

const Graduates = () => {
  return (
    <>
      <Head>
        <title>Выпускники - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.graduates}>
          <h1>Выпускники</h1>

          <div className={styles.graduatesList}>
            <Graduate />
            <Graduate />
            <Graduate />
            <Graduate />
            <Graduate />
            <Graduate />
          </div>
        </div>
      </div>
    </>
  )
}

export default Graduates



const Graduate = () => {
  return (
    <div className={styles.graduate}>
      <div className={styles.info}>
        <h4>gggАндреева Мария</h4>

        <p>
          gggАндреева Мария, 14 лет, учащаяся 8 класса гимназии №7 г.
          Молодечно. Машу всегда интересовали литература и
          журналистика, в будущем она хочет связать профессию именно с
          этим. Маша пишет стихи и рассказы, любит читать. Среди
          понравившихся произведений – «Код да Винчи» Дэна Брауна и
          «Секретное окно, секретный сад» Стивена Кинга. Любимой
          русской поэтессой является Марина Цветаева. Также ей нравится
          поэзия Ремарка и Эмили Дикинсон.
          Большой интерес вызывает культура других стран, их известные
          личности. Девочка мечтает объехать весь мир, начиная с Канберры
          и заканчивая Готхобом.
        </p>
      </div>

      <div 
        className={styles.avatar}
        style={{backgroundImage: "url('https://elgazeta.weebly.com/uploads/1/4/4/3/144357286/267454491_orig.jpg')"}}
      ></div>
    </div>
  )
}