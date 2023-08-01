import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Маладзік</h1>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>Главная</li>
          <li>Наша редакция</li>
          <li>Выпускники</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header