import Link from "next/link"
import styles from "./Header.module.css"
import { useRouter } from "next/router"
import { useState } from "react"

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  console.log(isOpenMenu)

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Маладзік</h1>
      </div>

      <nav className={styles.nav}>
        <div onClick={() => setIsOpenMenu(!isOpenMenu)} className={styles.menu}><span style={{fontSize: "24px", marginRight: "6px", paddingTop: "3px"}}>&equiv;</span>МЕНЮ</div>

        {/*<ul className={styles.menu__ul}>
          <CustomLink menu={true} href="/">Главная</CustomLink>
          <CustomLink menu={true} href={{}}>Наша редакция</CustomLink>
          <CustomLink menu={true} href={{}}>Выпускники</CustomLink>
          <CustomLink menu={true} href="/contacts">Контакты</CustomLink>
        </ul>*/}

        <ul className={styles.ul}>
          <CustomLink href="/">Главная</CustomLink>
          <CustomLink href={{}}>Наша редакция</CustomLink>
          <CustomLink href={{}}>Выпускники</CustomLink>
          <CustomLink href="/contacts">Контакты</CustomLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header



const CustomLink = ({href, children, menu}) => {
  const {pathname} = useRouter()

  return (
    <li style={pathname === href && menu ? {borderBottom: "2px solid #474747"} : pathname === href ? {borderBottom: "2px solid #474747"} : {}}>
      <Link 
        style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} 
        href={href} 
        prefetch={false}
      >{children}</Link>
    </li>
  )
}