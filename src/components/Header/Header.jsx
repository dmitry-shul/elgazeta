import Link from "next/link"
import styles from "./Header.module.css"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  useEffect(()  => {
    isOpenMenu 
    ? document.body.style = "overflow: hidden"
    : document.body.style = ""
  }, [isOpenMenu])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1><Link href="/">Маладзік</Link></h1>
        </div>

        <nav className={styles.nav}>
          <div onClick={() => setIsOpenMenu(true)} className={styles.menu}><span style={{fontSize: "24px", marginRight: "6px", paddingTop: "3px"}}>&equiv;</span>МЕНЮ</div>

          <ul className={styles.ul}>
            <Links />
          </ul>
        </nav>
      </div>

      <ul style={isOpenMenu ? {right: "0"} : {}} className={styles.menu__ul}>
        <div className={styles.closeBtn} onClick={() => setIsOpenMenu(false)}>&#10006;</div>
        <Links onClick={() => setIsOpenMenu(false)} />
      </ul>
    </>
  )
}

export default Header



const Links = ({...props}) => {
  return (
    <>
      <CustomLink {...props} href="/">Главная</CustomLink>
      <CustomLink {...props} href="/authors">Наша редакция</CustomLink>
      <CustomLink {...props} href="/graduates">Выпускники</CustomLink>
      <CustomLink {...props} href="/contacts">Контакты</CustomLink>
    </>
  )
}



const CustomLink = ({href, children, ...props}) => {
  const {pathname} = useRouter()

  return (
    <li style={pathname === href ? {borderBottom: "2px solid #474747"} : {}}>
      <Link 
        {...props}
        style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} 
        href={href} 
        prefetch={false}
      >{children}</Link>
    </li>
  )
}