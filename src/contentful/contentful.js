import { createClient } from "contentful"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderToStaticMarkup } from 'react-dom/server'


export const client = createClient({
  space: "flmyowsuuy7q",
  accessToken: "ZsFzT6y_SOy0dSmuR9Sso9y009ay9QuesCjYPnOCQAA",
  environment: "master"
})


const contentful = require("contentful-management")

export const connect = async () => {
  let client = await contentful.createClient({
    accessToken: "CFPAT-GTf4BKwM1wgBQfw6gHBK3WMW4xcAjAZrLGqRg0-weN4"
  })
  let space = await client.getSpace("flmyowsuuy7q")
  return await space.getEnvironment("master")
}


export const getAllPosts = async (type) => {
  return await client.getEntries({
    content_type: type,
  })
}


export const getPost = async (id) => {
  return await client.getEntry(id)
}


/*export const getPost = async (id) => {
  let env = await connect()
  return await env.getEntry(id)
}*/


export const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const file = node.data.target.fields.file
      const jsx = (
        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0"}}>
          <img src={file.url} alt="img" width="80%" height={file.datails?.image.height} />
          <div style={{marginTop: "20px"}}>{node.data.target.fields.description}</div>
        </div>
      )
      return renderToStaticMarkup(jsx)
    }
  }
}









/*export const getData = async (type) => {
  const res = await client.getEntries({
    content_type: type,
  })

  const sortedData = res.items.map(item => {
    return {
      ...item.fields,
      text: documentToHtmlString(item?.fields?.text, options),
      previewText: `${documentToHtmlString(item?.fields?.text).split("").slice(0, 180).join("")}...`,
      id: item.sys?.id,
      date: item.fields.date.split("-").reverse().join("."),
      comments: Object.values(item.fields.comments),
      image: {url: item.fields.image.fields.file.url, 
        description: item.fields.image.fields.description, 
        width: item.fields.image.fields.file.details.image.width, 
        height: item.fields.image.fields.file.details.image.height},
    }
  })
  return sortedData;
}*/




/*export const postUpdate = async () => {
  let env = await connect()
  let res = await env.getEntry("1cf4GogGdGxkcdTJP7hKbt")
  //console.log("ggg", ggg)
  //let all = await env.getEntries({content_type: "rubric_1"})
  //console.log("all", all)
  //console.log(ggg.fields.image["en-US"].sys.id)
  //let ttt = await env.getAsset(ggg.fields.image["en-US"].sys.id)
  //console.log(ttt)
  //console.log(ggg.fields.date["en-US"].split("-").reverse().join("."))
  //console.log("richText", richTextReducer(ggg.fields.text["en-US"]))
  //const aaa = documentToHtmlString(ggg.fields.text["en-US"]);
  //console.log(aaa)
  //ggg.fields.views["en-US"] = 61
  //ggg.fields.comments["en-US"] = {...ggg.fields.comments["en-US"], "ffr34r3f": "tt235235r3t"}
  //ggg.update()
  return res
}*/










/*
const [data, setData] = useState([]);
  const [upd, setUpd] = useState([]);

  useEffect(() => {
    getData().then((response) => setData(response))
    postUpdate().then((response) => setUpd(response))
    console.log("data", data)
    console.log("upd", upd)
    console.log("obj", Object.assign({}, [{date:"18.08.2023", name:"Gega", text:"Очень интересно dadada"}, ...data[0].comments]))
  }, []);


  const handler = () => {
    upd.fields.comments["en-US"] = Object.assign({}, [{date:"18.08.2023", name:"Gega", text:"Очень интересно dadada"}, ...data[0].comments])
    upd.update()
    console.log("update done")
  }
*/