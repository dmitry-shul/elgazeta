import styles from "@/styles/styles.module.css"
import Head from "next/head"
import { useRouter } from "next/router"

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
          ​"Школа журналистики" ГУО "Молодечненский центр творчества детей и молодежи "Маладзик"
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
  const {push} = useRouter()

  return (
    <div className={styles.rubrics}>
      {
        rubricsArray.map(item =>
          <Rubric onClick={() => push(`/${item.text.toLowerCase().split(" ").join("-")}`)} key={item.id} item={item} />   
        )
      }
    </div>
  )
}



const Rubric = ({item, ...props}) => {

  const {link, width, height, text, positionX, positionY} = item

  return (
    <div {...props} className={styles.rubric} style={{backgroundImage: `url(${link})`, width, height, backgroundPositionX: positionX, backgroundPositionY: positionY}}>
      <div className={styles.rubric__border}>
        <p>{text}</p>
      </div>
    </div>
  )
}



const rubricsArray = [
  {id: 1, link: '/assets/images/1rub.jpg', width: "564px", height: "336px", text: "В ЦЕНТРЕ ВНИМАНИЯ", positionX: "center", positionX: "center"},
  {id: 3, link: '/assets/images/3rub.webp', width: "374px", height: "336px", text: "ДЕНЬ В КАЛЕНДАРЕ", positionX: "center", positionY: "center"},
  {id: 2, link: '/assets/images/newrub2.jpg', width: "362px", height: "330px", text: "ХОББИ-ТЫ", positionX: "center", positionY: "top"},
  {id: 4, link: '/assets/images/4rub.jpg', width: "570px", height: "330px", text: "РОВЕСНИК", positionX: "center", positionY: "top"},
  {id: 6, link: '/assets/images/newrub1.jpg', width: "564px", height: "312px", text: "ИНТЕРВЬЮ", positionX: "center", positionY: "center"},
  {id: 5, link: '/assets/images/6rub.jpg', width: "372px", height: "312px", text: "БЛОКНОТ", positionX: "center", positionY: "top"},
]
