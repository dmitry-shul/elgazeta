import Student from "@/components/Student/Student"
import styles from "./Authors.module.css"
import Head from "next/head"
import { client } from "@/contentful/contentful"

const Authors = ({authors}) => {

  //console.log(authors)

  return (
    <>
      <Head>
        <title>Наша редакция - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.authors}>
          <h1>Наша редакция</h1>

          <div className={styles.authorsList}>
            {
              authors?.map(author => 
                <Student student={author} key={author.name} />
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Authors



export async function getServerSideProps() {
  const data = await client.getEntries({
    content_type: "authors",
  })

  const newData = data.items.map(item => {
    return {
      name: item.fields.name,
      description: item.fields.description,
      avatar: {
        url: item.fields.avatar.fields.file.url,
        width: item.fields.avatar.fields.file.details.image.width,
        height: item.fields.avatar.fields.file.details.image.height,
      }
    }
  })

  const sortedData = newData.sort((a, b) => a.name.localeCompare(b.name))

  return {
    props: {
      authors: sortedData,
    },
  }
}