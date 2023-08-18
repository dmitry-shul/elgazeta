import styles from "./Student.module.css"

const Student = ({student}) => {
  const {name, description, avatar} = student

  return (
    <div className={styles.student}>
      <div className={styles.info}>
        <h4>{name}</h4>

        <p>{description}</p>
      </div>

      <div 
        className={styles.avatar}
        style={{backgroundImage: `url(${avatar.url})`}}
      ></div>
    </div>
  )
}

export default Student