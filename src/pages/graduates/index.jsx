import Student from "@/components/Student/Student"
import styles from "./Graduates.module.css"
import Head from "next/head"

const Graduates = () => {
  return (
    <>
      <Head>
        <title>Выпускники - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.graduates}>
          <h1>Выпускники</h1>

          <div className={styles.graduatesList}>
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

export default Graduates