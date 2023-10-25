import { useRouter } from "next/router"
import styles from "./Rubric.module.css"
import Head from "next/head"
import { client, getAllPosts, options } from "@/contentful/contentful"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderToStaticMarkup } from 'react-dom/server'

const Rubric = ({data, posts}) => {
  const {query, push, asPath} = useRouter()
  const title = getTitle(query)

  //console.log(data)
  //console.log(posts)

  return (
    <>
      <Head>
        <title>{title} - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.rubric}>
          <h1>{title}</h1>

          <div className={styles.postList}>
            { posts.length === 0
              ? <div style={{width: "100%", fontSize: "22px", display: "flex", justifyContent: "center"}}>Записей нет</div>
              : posts?.map((post, i) => 
                  <Post post={post} key={post.id} onClick={() => push(`${asPath}/${post.id}`)} />
                )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Rubric



const Post = ({post, ...props}) => {
  return (
    <div {...props} className={styles.post}>
      <div 
        className={styles.avatar}
        style={{backgroundImage: `url(${post.image.url})`}}
      ></div>
      
      <div className={styles.info}>
        <div style={{marginBottom: "10px"}}>{post.date}</div>

        <h4>{post.title}</h4>

        {/*<div className={styles.styleTest1} dangerouslySetInnerHTML={{__html: post.previewText}} />*/}

        <div className={styles.styleTest1}>{post.previewText.replace(/<[^>]+>/g, '')}</div>

        <div className={styles.views_comments}>
          <div>Комментариев: {post.comments.length}</div>
          <div>Просмотров: {post.views}</div>
        </div>
      </div>
    </div>
  )
}



/*export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {rubric: "в-центре-внимания"},
      },
      {
        params: {rubric: "хобби-ты"},
      },
      {
        params: {rubric: "день-в-календаре"},
      },
      {
        params: {rubric: "ровесник"},
      },
      {
        params: {rubric: "в-мире-профессий"},
      },
      {
        params: {rubric: "блокнот"},
      },
    ],
    fallback: false,
  }
}*/



export async function getServerSideProps(context) {
  const {params} = context

  const rubric = rubricsArr.find(i => i[0] === params.rubric)

  const data = await getAllPosts(rubric[1])

  if (!data) {
    return {
      notFound: true,
    }
  }

  const newData = data.items.map(item => {
    return {
      ...item.fields,
      text: documentToHtmlString(item?.fields?.text, options),
      previewText: `${documentToHtmlString(item?.fields?.text).split("").slice(0, 260).join("")}...`,
      id: item.sys?.id,
      date: item.fields.date.split("-").reverse().join("."),
      dateNum: item.fields.date.split("-").reverse()[2]*10000 + item.fields.date.split("-").reverse()[1]*100 + item.fields.date.split("-").reverse()[0],
      comments: item.fields.comments === undefined ? [] : Object.values(item.fields.comments),
      image: {url: item.fields.image.fields.file.url, 
        description: item.fields.image.fields.description, 
        width: item.fields.image.fields.file.details.image.width, 
        height: item.fields.image.fields.file.details.image.height
      },
    }
  })

  const sortedData = newData.sort((a, b) => b.dateNum - a.dateNum)

  return {
    props: {
      data,
      posts: sortedData,
    },
  }
}



export const rubricsArr = [
  ["в-центре-внимания", "rubric_1"],
  ["хобби-ты", "rubric_2"],
  ["день-в-календаре", "rubric_3"],
  ["ровесник", "rubric_4"],
  ["в-мире-профессий", "rubric_5"],
  ["интервью", "rubric_6"]
]



const getTitle = (query) => {
  let a = query?.rubric?.split("-").join(" ")
  let b = a[0].toUpperCase() + a.slice(1)
  return b;
}
