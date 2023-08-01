import styles from "@/styles/styles.module.css"
import Head from "next/head"
import Image from "next/image"

export default function Main() {
  return (
    <>
      <Head>
        <title>Главная - Маладзік</title>
      </Head>

      <div className={styles.imageBlock}>
        <Image src="" width={10} height={10} alt="" />
        <div>
          Интернет-издание учащихся объединения по интересам
          ​"Школа журналистики" ГУДО "Молодечненский центр творчества детей и молодежи "Маладик"
        </div>
      </div>

      <div className={styles.main}>
        <ArchiveButton />
        <RubriksList />
      </div>
    </>
  )
}



const ArchiveButton = () => {
  return (
    <div className={styles.archive}>
      <div className={styles.archive__border}>
        АРХИВ 2019 - 2022
      </div>
    </div>
  )
}



const RubriksList = () => {
  return (
    <>
      dfd
    </>
  )
}