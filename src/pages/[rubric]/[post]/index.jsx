import Head from "next/head"
import styles from "./Post.module.css"
import { useRouter } from "next/router"
import { getAllPosts, getPost } from "@/contentful/contentful"

const Post = () => {
  const {query} = useRouter()
  const {postTitle, rubricTitle} = getTitle(query)

  //console.log(query, postTitle, rubricTitle)

  return (
    <>
      <Head>
        <title>{postTitle} - Маладзік</title>
      </Head>

      <div className="container">
        <div className={styles.postBlock}>
          <h1>{rubricTitle}</h1>

          <div className={styles.post}>
            <h3>ЮНЫЕ ЖУРНАЛИСТЫ ПРИНЯЛИ УЧАСТИЕ В ПЕРВОМ НАЦИОНАЛЬНОМ ДЕТСКОМ МЕДИАФОРУМЕ</h3>

            <div className={styles.date_view}>
              <div>16.08.2023</div>
              <div>Просмотров: 26</div>
            </div>

            <div className={styles.mainImage} style={{backgroundImage: "url(/assets/images/1rub.jpg)", width: "100%", height: "500px"}}></div>

            <div className={styles.richText}>{text}</div>

            <div style={{fontSize: "18px"}}>Автор: Ксения Лебедева</div>

            <div className={styles.comments}>
              <h3 style={{fontSize: "22px"}}>Комментариев: 1</h3>

              <div style={{margin: "16px 0", borderBottom: "1px solid #EAEAEA", padding: "0 0 16px 0"}}>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "6px", color: "grey"}}>
                  <div>Анна</div>
                  <div>16.08.2023</div>
                </div>
                <div>Очень интересно</div>
              </div>

              <div style={{marginTop: "40px"}}>
                <h4 style={{fontSize: "22px"}}>Оставить комментарий</h4>
                <div style={{margin: "20px 0", display: "flex", flexDirection: "column"}}>
                  <input type="text" placeholder="Имя" className={styles.comments__name} />
                  <textarea placeholder="Комментарий" className={styles.comments__text}></textarea>
                </div>
                <div className={styles.commentBtn}>Отправить</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Post



export async function getStaticPaths() {
  const data_1 = await getAllPosts("rubric_1")
  const data_2 = await getAllPosts("rubric_2")
  /*const data_3 = await getAllPosts("rubric_3")
  const data_4 = await getAllPosts("rubric_4")
  const data_5 = await getAllPosts("rubric_5")
  const data_6 = await getAllPosts("rubric_6")*/

  const data = await [...data_1.items, ...data_2.items]

  return {
    paths: data.map(dt => ({
      params: {
        id: dt.sys.id,
      },
    })),
    fallback: "blocking"
  }
}



export async function getStaticProps(context) {
  const {params} = context
  
  const post = await getPost(params.id)

  return {
    props: {
      post,
    },
  }
}



const getTitle = (query) => {
  let a = query?.post?.split("-").join(" ")
  let postTitle = a[0].toUpperCase() + a.slice(1)
  let c = query?.rubric?.split("-").join(" ")
  let rubricTitle = c[0].toUpperCase() + c.slice(1)
  return {postTitle, rubricTitle};
}


const text = `На шее – разноцветные ланьярды с бейджами, в руках – блокноты с эмблемой в виде двух букв «М», а в глазах – задорный огонёк и жажда познания. Кто же эти молодые люди, замеченные в коридорах и аудиториях факультета журналистики БГУ? Около 70 школьников из разных регионов страны были приглашены на первый Национальный детский медиафорум и получили возможность ближе познакомиться с профессией журналиста.
Открылся форум диалоговой площадкой с участием представителей Министерства образования и заместителя декана факультета журналистики БГУ. Спикеры не только ответили на вопросы будущих абитуриентов, но и предложили вместе порассуждать о развитии средств массовой информации.
Как сделать качественный фоторепортаж? Как найти героя для журналистской публикации? Какими должны быть современные медиа для детей? Ответы на эти и многие другие вопросы участники форума смогли получить во время мастер-классов, которые провели преподаватели факультета журналистики.
К примеру, очень интересной и полезной была лекция Игоря Александровича Королёва о верификации пользовательского фото- и видеоконтента. Мы узнали о том, как отличить настоящую фотографию от фейка, и познакомились с программами, которые могут в этом помочь.
Фотография
– Больше всего мне понравился мастер-класс «Телевизионный проект: от идеи до реализации», – поделился впечатлениями председатель Молодежного парламента г. Молодечно Даниил Радюк. – Я узнал много нового, например, что такое сценарный план и в чём его отличие от известного всем сценария. Помимо этого новшеством для меня была сценарная заявка. Нам рассказали о том, как она оформляется и из чего состоит.
Форум запомнился и ярким музыкальным приветствием студентов, и экскурсией по факультету журналистики. Побывать в теле- и радиостудии и не попробовать прочесть текст с суфлера или записать свой голос на радио – это не для  нас, самых талантливых и креативных юных журналистов!
Фотография
Даниил в радиостудии
Первый национальный детский медиафорум прошел под девизом «3D: Думай. Действуй. Достигай» и  стал площадкой для общения  молодежи. Во время форсайт-сессии мы обменялись опытом, представили свои медиапроекты и пофантазировали на тему будущего журналистики.
Этот вопрос затронули и спикеры «Зачетного» разговора – политический обозреватель ОНТ Игорь Тур и гендиректор Агентства «Минск-Новости», председатель Белорусского союза журналистов Андрей Кривошеев. 
Фотография
"Зачетный" разговор с Игорем Туром и Андреем Кривошеевым
– Журналистика всегда будет актуальной, – отметил Андрей Евгеньевич. – Всегда будут люди, которые  будут собирать, анализировать и транслировать данные, формировать смыслы.`