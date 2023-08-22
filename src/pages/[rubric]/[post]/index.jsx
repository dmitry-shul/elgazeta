import Head from "next/head"
import styles from "./Post.module.css"
import { useRouter } from "next/router"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { getPost, options } from "@/contentful/contentful"

const Post = ({post}) => {
  const {query} = useRouter()
  const {postTitle, rubricTitle} = getTitle(query)

  //console.log(post)

  return (
    <>
      <Head>
        <title>{postTitle} - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.postBlock}>
          <h1>{rubricTitle}</h1>

          <div className={styles.post}>
            <h3>{post.title}</h3>

            <div className={styles.date_view}>
              <div>{post.date}</div>
              <div>Просмотров: {post.views}</div>
            </div>

            <div className={styles.mainImage} style={{backgroundImage: `url(${post.image.url})`, width: "100%", height: post.image.height}}></div>

            <div className={styles.richText} dangerouslySetInnerHTML={{__html: post.text}} />

            <div style={{fontSize: "18px"}}>Автор: {post.author}</div>

            <div className={styles.comments}>
              <h3 style={{fontSize: "22px"}}>Комментариев: {post.comments.length}</h3>

              {
                post.comments.map(com => 
                  <div key={com.name + com.text + com.date} style={{margin: "16px 0", borderBottom: "1px solid #EAEAEA", padding: "0 0 16px 0"}}>
                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: "6px", color: "grey"}}>
                      <div>{com.name}</div>
                      <div>{com.date}</div>
                    </div>
                    <div>{com.text}</div>
                  </div>
                )
              }

              <div style={{marginTop: "40px"}}>
                <h4 style={{fontSize: "22px"}}>Оставить комментарий</h4>
                <div style={{margin: "20px 0", display: "flex", flexDirection: "column"}}>
                  <input type="text" placeholder="Имя" className={styles.comments__name} />
                  <textarea placeholder="Комментарий" className={styles.comments__text}></textarea>
                </div>
                <div className={styles.commentBtn}>Отправить</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Post



export async function getServerSideProps(context) {
  const {params} = context

  const post = await getPost(params.post)

  const newData = {
    id: post.sys.id,
    title: post.fields.title,
    views: post.fields.views,
    author: post.fields.author,
    comments: Object.values(post.fields.comments),
    date: post.fields.date.split("-").reverse().join("."),
    text: documentToHtmlString(post?.fields?.text, options),
    image: {url: post.fields.image.fields.file.url, 
        description: post.fields.image.fields.description, 
        width: post.fields.image.fields.file.details.image.width, 
        height: post.fields.image.fields.file.details.image.height
      },
  }
 
  return { 
    props: {
      post: newData,
    } 
  }
}



const getTitle = (query) => {
  let a = query?.post?.split("-").join(" ")
  let postTitle = a[0].toUpperCase() + a.slice(1)
  let c = query?.rubric?.split("-").join(" ")
  let rubricTitle = c[0].toUpperCase() + c.slice(1)
  return {postTitle, rubricTitle};
}















/*
export async function getStaticPaths() {
  const data_1 = await getAllPosts("rubric_1")
  const data_2 = await getAllPosts("rubric_2")
  /*const data_3 = await getAllPosts("rubric_3")
  const data_4 = await getAllPosts("rubric_4")
  const data_5 = await getAllPosts("rubric_5")
  const data_6 = await getAllPosts("rubric_6")*/

  /*const data = await [...data_1.items, ...data_2.items]

  return {
    paths: data.map(dt => ({
      params: {
        post: dt.sys.id,
      },
    })),
    paths: rubricsArr.map(arr => ({
      params: {
        rubric: arr[0],
      },
    })),
    fallback: "blocking"
  }
}



export async function getStaticProps(context) {
  const {params} = context
  
  const post = await getPost(params.id)

  return {
    props: {
      post,
    },
  }
}
*/