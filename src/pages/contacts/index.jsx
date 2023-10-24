import styles from "./Contacts.module.css"
import Head from "next/head"

const Contacts = () => {

  return (
    <>
      <Head>
        <title>Контакты - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.contacts}>
          <h1>Контакты</h1>

          <div className={styles.info}>
            <span><b>Молодечненский центр творчества детей и молодежи "Маладзик"</b></span>
            <span>Адрес: 222310, Минская обл., г. Молодечно, ул. Машерова, 3</span>
            <span>Телефон: 8 (0176) 58-05-33</span>
            <span>E-mail: <a href="mailto:rgmaladzik@gmail.com">rgmaladzik@gmail.com</a></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
