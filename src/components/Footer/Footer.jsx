import React from 'react';
import { useState } from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div className={styles.footer}>
      <div className="container">
        <p>© 2022 - {date.getFullYear()}  Электронный ресурс</p>
      </div>
    </div>
  )
}

export default Footer