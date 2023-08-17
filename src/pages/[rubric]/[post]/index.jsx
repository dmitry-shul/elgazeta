import Head from "next/head"
import styles from "./Post.module.css"
import { useRouter } from "next/router"
import Image from "next/image"

const Post = () => {
  const {query} = useRouter()
  const {postTitle, rubricTitle} = getTitle(query)

  //console.log(query, postTitle, rubricTitle)

  return (
    <>
      <Head>
        <title>{postTitle} - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.postBlock}>
          <h1>{rubricTitle}</h1>

          <div className={styles.post}>
            <h3>ЮНЫЕ ЖУРНАЛИСТЫ ПРИНЯЛИ УЧАСТИЕ В ПЕРВОМ НАЦИОНАЛЬНОМ ДЕТСКОМ МЕДИАФОРУМЕ</h3>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Post



const getTitle = (query) => {
  let a = query?.post?.split("-").join(" ")
  let postTitle = a[0].toUpperCase() + a.slice(1)
  let c = query?.rubric?.split("-").join(" ")
  let rubricTitle = c[0].toUpperCase() + c.slice(1)
  return {postTitle, rubricTitle};
}