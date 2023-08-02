import Link from "next/link"
import styles from "./Header.module.css"
import { useRouter } from "next/router"

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Маладзік</h1>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <CustomLink href="/" prefetch={false}>Главная</CustomLink>
          <CustomLink href={{}} prefetch={false}>Наша редакция</CustomLink>
          <CustomLink href={{}} prefetch={false}>Выпускники</CustomLink>
          <CustomLink href="/contacts" prefetch={false}>Контакты</CustomLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header



const CustomLink = ({href, children, ...props}) => {
  const {pathname} = useRouter()

  return (
    <li style={pathname === href ? {borderBottom: "2px solid #474747"} : {}}><Link href={href}>{children}</Link></li>
  )
}