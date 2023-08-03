import Student from "@/components/Student/Student"
import styles from "./Authors.module.css"
import Head from "next/head"

const Authors = () => {
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