import Student from "@/components/Student/Student"
import styles from "./Graduates.module.css"
import Head from "next/head"
import { client } from "@/contentful/contentful"

const Graduates = ({graduates}) => {

  //console.log(graduates)

  return (
    <>
      <Head>
        <title>Выпускники - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.graduates}>
          <h1>Выпускники</h1>

          <div className={styles.graduatesList}>
            {
              graduates?.map(graduate => 
                <Student student={graduate} key={graduate.name} />
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Graduates



export async function getServerSideProps() {
  const data = await client.getEntries({
    content_type: "graduates",
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
      graduates: sortedData,
    },
  }
}