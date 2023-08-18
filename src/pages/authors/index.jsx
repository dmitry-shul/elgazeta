import Student from "@/components/Student/Student"
import styles from "./Authors.module.css"
import Head from "next/head"
import { useEffect, useState } from "react"
import { client, getData, postUpdate } from "@/contentful/contentful"

const Authors = ({data}) => {
  /*const [data, setData] = useState([]);
  const [upd, setUpd] = useState([]);

  useEffect(() => {
    getData("rubric_1").then((response) => setData(response))
    postUpdate().then((response) => setUpd(response))
    console.log("data", data)
    console.log("upd", upd)
    console.log("obj", Object.assign({}, [{date:"18.08.2023", name:"Gega", text:"Очень интересно dadada"}, ...data[0].comments]))
  }, []);*/

  console.log(data)

  return (
    <>
      <Head>
        <title>Наша редакция - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.authors}>
          <h1>Наша редакция</h1>

          <div className={styles.authorsList}>
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
          </div>
        </div>
      </div>
    </>
  )
}

export default Authors



export async function getStaticProps() {
  //const data = getData("rubric_1")
  
  const data = await client.getEntries({
    content_type: "rubric_1",
  })

  return {
    props: {
      data,
    },
  }
}