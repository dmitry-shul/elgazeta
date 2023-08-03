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
    <a href="https://elgazeta.wixsite.com/molo" target="_blank" rel="noreferrer">
      <div className={styles.archiveBtn}>
        <div className={styles.archiveBtn__border}>
          АРХИВ 2019 - 2022
        </div>
      </div>
    </a>
  )
}



const RubricsList = () => {
  return (
    <div className={styles.rubrics}>
      {
        rubricsArray.map(item =>
          <Rubric key={item.id} item={item} />   
        )
      }
    </div>
  )
}



const Rubric = ({item}) => {

  const {link, width, height, text, positionX, positionY} = item

  return (
    <div className={styles.rubric} style={{backgroundImage: `url(${link})`, width, height, backgroundPositionX: positionX, backgroundPositionY: positionY}}>
      <div className={styles.rubric__border}>
        <p>{text}</p>
      </div>
    </div>
  )
}



const rubricsArray = [
  {id: 1, link: '/assets/images/1rub.jpg', width: "564px", height: "336px", text: "В ЦЕНТРЕ ВНИМАНИЯ", positionX: "center", positionX: "center"},
  {id: 2, link: '/assets/images/2rub.jpg', width: "362px", height: "336px", text: "ХОББИ-ТЫ", positionX: "center", positionY: "top"},
  {id: 3, link: '/assets/images/3rub.webp', width: "374px", height: "312px", text: "ДЕНЬ В КАЛЕНДАРЕ", positionX: "center", positionY: "center"},
  {id: 4, link: '/assets/images/4rub.jpg', width: "558px", height: "312px", text: "РОВЕСНИК", positionX: "center", positionY: "top"},
  {id: 5, link: '/assets/images/5rub.jpg', width: "600px", height: "304px", text: "В МИРЕ ПРОФЕССИЙ", positionX: "center", positionY: "top"},
  {id: 6, link: '/assets/images/6rub.jpg', width: "316px", height: "304px", text: "БЛОКНОТ", positionX: "center", positionY: "center"},
]