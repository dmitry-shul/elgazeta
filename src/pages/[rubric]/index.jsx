import { useRouter } from "next/router"
import styles from "./Rubric.module.css"
import Head from "next/head"
import { client } from "@/contentful/contentful"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderToStaticMarkup } from 'react-dom/server'

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
              posts?.map(post => 
                <Post post={post} key={post.id} onClick={() => push(`${asPath}/${post.title.toLowerCase().split(" ").join("-")}`)} />
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

        <p className={styles.styleTest1} dangerouslySetInnerHTML={{__html: post.previewText}} />

        <div className={styles.views_comments}>
          <div>Комментариев: {post.comments.length}</div>
          <div>Просмотров: {post.views}</div>
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



export async function getStaticPaths() {
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
}



export async function getStaticProps(context) {
  const {params} = context

  const rubric = rubricsArr.find(i => i[0] === params.rubric)

  const data = await client.getEntries({
    content_type: rubric[1],
  })

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const file = node.data.target.fields.file
        const jsx = (
          <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0"}}>
            <img src={file.url} alt="img" width="60%" height={file.datails?.image.height} />
            <div style={{marginTop: "20px"}}>{node.data.target.fields.description}</div>
          </div>
        )
        return renderToStaticMarkup(jsx)
      }
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
      comments: Object.values(item.fields.comments),
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
      posts: sortedData,
    },
  }
}


const rubricsArr = [
  ["в-центре-внимания", "rubric_1"],
  ["хобби-ты", "rubric_2"],
  ["день-в-календаре", "rubric_3"],
  ["ровесник", "rubric_4"],
  ["в-мире-профессий", "rubric_5"],
  ["блокнот", "rubric_6"]
]