import { createClient } from "contentful"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { renderToStaticMarkup } from 'react-dom/server'

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const file = node.data.target.fields.file
      const jsx = (
        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0"}}>
          <img src={file.url} alt="img" width="60%" height={file.datails?.image.height} />
          <div style={{marginTop: "20px"}}>{node.data.target.fields.description}</div>
        </div>
      )
      return renderToStaticMarkup(jsx)
    }
  }
}

const useContentful = () => {

  const client = createClient({
    space: "flmyowsuuy7q",
    accessToken: "ZsFzT6y_SOy0dSmuR9Sso9y009ay9QuesCjYPnOCQAA",
    environment: "master"
  })

  const getData = async () => {
    const res = await client.getEntries({
      content_type: "rubric_1",
    })

    const sortedData = res.items.map(item => {

      return {
        ...item.fields,
        text: documentToHtmlString(item?.fields?.text, options),
        previewText: `${documentToHtmlString(item?.fields?.text).split("").slice(0, 180).join("")}...`,
        id: item.sys?.id,
        date: item.fields.date.split("-").reverse().join("."),
        comments: Object.values(item.fields.comments),
        mainImage: {url: item.fields.image.fields.file.url, discription: item.fields.image.fields.discription, width: item.fields.image.fields.file.details.image.width, height: item.fields.image.fields.file.details.image.height},
      }
    })

    return sortedData;
  }
  return { getData }
} 

export default useContentful
