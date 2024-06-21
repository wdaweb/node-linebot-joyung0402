export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '屏東(枋山)',
          weight: 'bold',
          size: 'xl',
          align: 'start'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'xxl',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '縣市',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '屏東縣',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 2
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '空氣品質',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '良好',
                  wrap: true,
                  color: '#cc3838',
                  size: 'lg',
                  flex: 2,
                  weight: 'bold'
                }
              ],
              margin: '5px'
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'PM2.5',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '2',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 2
                }
              ],
              margin: '8px'
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '時間',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '2024-06-21 11:00',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 2
                }
              ]
            }
          ],
          borderColor: '#aaaaaa',
          borderWidth: 'normal',
          cornerRadius: '15px',
          paddingAll: 'xl'
        }
      ]
    }
  }
}
