import { mapData } from './map-data'

describe('mapData', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0]

    expect(pagesData.footerHtml).toBe('')
    expect(pagesData.slug).toBe('')
    expect(pagesData.title).toBe('')
  })

  it('should map data even if data present', () => {
    const pagesData = mapData([{ footer_text: '<p>Teste</p>', slug: 'slug', title: 'title' }])[0]

    expect(pagesData.footerHtml).toBe('<p>Teste</p>')
    expect(pagesData.slug).toBe('slug')
    expect(pagesData.title).toBe('title')
  })
})
