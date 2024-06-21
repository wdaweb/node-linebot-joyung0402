import axios from 'axios'
import airTemplate from '../templates/air.js'

export const air = async (event) => {
  try {
    const a = event.message.text
    const { data } = await axios.get('https://data.moenv.gov.tw/api/v2/aqx_p_488?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=datacreationdate%20desc&format=JSON')

    const replies = data.records.filter(b => b.county.includes(a))

    if (replies.length === 0) {
      await event.reply({ type: 'text', text: '查無結果，請重新輸入' })
      return
    }

    const result = replies.slice(0, 5).map(b => {
      const { sitename, county, status, 'pm2.5': pm25, datacreationdate } = b

      const template = airTemplate()

      template.body.contents[0].text = sitename
      template.body.contents[1].contents[0].contents[1].text = county
      template.body.contents[1].contents[1].contents[1].text = status
      template.body.contents[1].contents[2].contents[1].text = `pm2.5:${pm25}`
      template.body.contents[1].contents[3].contents[1].text = datacreationdate

      return template
    })

    await event.reply({
      type: 'flex',
      altText: '查詢結果',
      contents: {
        type: 'carousel',
        contents: result
      }
    })
  } catch (error) {
    console.log(error)
    await event.reply({ type: 'text', text: '發生錯誤' })
  }
}
