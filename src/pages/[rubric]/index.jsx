import { useRouter } from "next/router"
import styles from "./Rubric.module.css"
import Head from "next/head"

const Rubric = () => {
  const {query, push, asPath} = useRouter()
  const title = getTitle(query)

  return (
    <>
      <Head>
        <title>{title} - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.rubric}>
          <h1>{title}</h1>

          <div className={styles.postList}>
            <Post onClick={() => push(`${asPath}/${"post"}`)} />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  )
}

export default Rubric



const Post = ({...props}) => {
  return (
    <div {...props} className={styles.post}>
      <div 
        className={styles.avatar}
        style={{backgroundImage: "url('https://elgazeta.weebly.com/uploads/1/4/4/3/144357286/1693732819_orig.jpg')"}}
      ></div>
      
      <div className={styles.info}>
        <div style={{marginBottom: "10px"}}>16.08.2023</div>

        <h4>ЮНЫЕ ЖУРНАЛИСТЫ ПРИНЯЛИ УЧАСТИЕ В ПЕРВОМ НАЦИОНАЛЬНОМ ДЕТСКОМ МЕДИАФОРУМЕ</h4>

        <p>
          На шее – разноцветные ланьярды с бейджами, в руках – блокноты с эмблемой в виде двух букв «М», а в глазах – задорный огонёк и жажда познания. Кто же эти молодые люди, замеченные в коридорах и аудиториях факультета...
        </p>

        <div className={styles.views_comments}>
          <div>Комментариев: 18</div>
          <div>Просмотров: 56</div>
        </div>
      </div>
    </div>
  )
}



const getTitle = (query) => {
  let a = query?.rubric?.split("-").join(" ")
  let b = a[0].toUpperCase() + a.slice(1)
  return b;
}