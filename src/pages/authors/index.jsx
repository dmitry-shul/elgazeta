import Student from "@/components/Student/Student"
import styles from "./Authors.module.css"
import Head from "next/head"
import { useEffect, useState } from "react"
import { getData, postUpdate } from "@/contentful/contentful"

const Authors = () => {
  const [data, setData] = useState([]);
  const [upd, setUpd] = useState([]);

  useEffect(() => {
    getData().then((response) => setData(response))
    postUpdate().then((response) => setUpd(response))
    console.log("data", data)
    console.log("upd", upd)
    console.log("obj", Object.assign({}, [{date:"18.08.2023", name:"Gega", text:"Очень интересно dadada"}, ...data[0].comments]))
  }, []);

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