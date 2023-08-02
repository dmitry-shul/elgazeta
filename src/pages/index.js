import styles from "@/styles/styles.module.css"
import Head from "next/head"

export default function Main() {
  return (
    <>
      <Head>
        <title>Главная - Маладзік</title>
      </Head>

      <div className={styles.imageBlock}>
        <div className={styles.logo}></div>
        <div className={styles.text}>
          Интернет-издание учащихся объединения по интересам <br/>
          ​"Школа журналистики" ГУДО "Молодечненский центр творчества детей и молодежи "Маладик"
        </div>
      </div>
      
      <div className="container">
        <div className={styles.main}>
          <ArchiveButton />
          <RubricsList />
        </div>
      </div>
    </>
  )
}



const ArchiveButton = () => {
  return (
    <div className={styles.archiveBtn}>
      <div className={styles.archiveBtn__border}>
        АРХИВ 2019 - 2022
      </div>
    </div>
  )
}



const RubricsList = () => {
  return (
    <div className={styles.rubrics}>
      <Rubric />
    </div>
  )
}



const Rubric = () => {
  return (
    <div>
      787u
    </div>
  )
}