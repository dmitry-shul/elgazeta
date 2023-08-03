import styles from "./Authors.module.css"
import Head from "next/head"

const Authors = () => {
  return (
    <>
      <Head>
        <title>Наша редакция - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.authors}>
          <h1>Наша редакция</h1>

          <div className={styles.authorsList}>
            <Author />
            <Author />
            <Author />
            <Author />
            <Author />
            <Author />
          </div>
        </div>
      </div>
    </>
  )
}

export default Authors



const Author = () => {
  return (
    <div className={styles.author}>
      <div className={styles.info}>
        <h4>Андреева Мария</h4>

        <p>
          Андреева Мария, 14 лет, учащаяся 8 класса гимназии №7 г.
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