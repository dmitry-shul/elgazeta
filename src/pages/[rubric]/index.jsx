import { useRouter } from "next/router"
import styles from "./Rubric.module.css"
import Head from "next/head"
import { client } from "@/contentful/contentful"

const Rubric = ({posts}) => {
  const {query, push, asPath} = useRouter()
  const title = getTitle(query)

  console.log(posts)

  return (
    <>
      <Head>
        <title>{title} - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.rubric}>
          <h1>{title}</h1>

          <div className={styles.postList}>
            {
              /*posts?.map(post => 
                <Post post={post} key={post} onClick={() => push(`${asPath}/${"юные-журналисты-приняли-участие-в-первом-национальном-детском-медиафоруме"}`)} />
              )*/
            }
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



export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: "rubric_1",
  })

  const newData = data.items.map(item => {
    return {
      ...item.fields,
      text: documentToHtmlString(item?.fields?.text, options),
      previewText: `${documentToHtmlString(item?.fields?.text).split("").slice(0, 180).join("")}...`,
      id: item.sys?.id,
      date: item.fields.date.split("-").reverse().join("."),
      comments: Object.values(item.fields.comments),
      image: {url: item.fields.image.fields.file.url, 
        discription: item.fields.image.fields.discription, 
        width: item.fields.image.fields.file.details.image.width, 
        height: item.fields.image.fields.file.details.image.height},
    }
  })

  const sortedData = "i"

  return {
    props: {
      authors: newData,
    },
  }
}