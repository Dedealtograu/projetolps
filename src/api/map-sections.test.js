import { mapSectionTwoColumns, mapSectionGrid, mapSectionContent, mapImageGrid } from './map-sections'

describe('mapSections', () => {
  it('should map sections two columns', () => {
    const data = mapSectionTwoColumns({
      title: '',
      description: '',
      image: {
        url: '',
      },
      metadata: {
        background: false,
        section_id: '',
      },
    })

    expect(data.component).toBe('')
    expect(data.title).toBe('')
    expect(data.text).toBe('')
    expect(data.srcImg).toBe('')
    expect(data.background).toBe(false)
    expect(data.sectionId).toBe('')
  })

  it('should map sections two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      id: 4,
      title: 'January brings us Firefox 85',
      description: 'abc',
      image: {
        id: 1,
        documentId: 'j559oklx9vgu38grvwtzmexh',
        name: 'imagem.svg',
        alternativeText: null,
        caption: null,
        width: 1030,
        height: 730,
        formats: null,
        hash: 'imagem_3ed0595e1b',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        previewUrl: null,
        provider: 'cloudinary',
        provider_metadata: {
          public_id: 'imagem_3ed0595e1b',
          resource_type: 'image',
        },
        createdAt: '2024-11-07T22:17:12.551Z',
        updatedAt: '2024-11-07T22:17:12.551Z',
        publishedAt: '2024-11-07T22:17:12.553Z',
      },
      metadata: {
        id: 9,
        name: 'home',
        section_id: 'home',
        background: true,
      },
    })

    expect(data.component).toBe('section.section-two-columns')
    expect(data.title).toBe('January brings us Firefox 85')
    expect(data.text).toBe('abc')
    expect(data.srcImg).toBe('a.svg')
    expect(data.background).toBe(true)
    expect(data.sectionId).toBe('home')
  })

  it('should map sections grid with data', () => {
    const data = mapSectionGrid({
      __component: 'section.section-grid',
      id: 4,
      title: 'My Grid',
      description: 'Uma breve descrição',
      text_grid: [
        {
          id: 7,
          title: 'Teste 1',
          description: 'abc.',
        },
        {
          id: 8,
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
      ],
      image_grid: [],
      metadata: {
        id: 11,
        name: 'grid-one',
        section_id: 'gridone',
        background: true,
      },
    })

    expect(data.component).toBe('section.section-grid-text')
    expect(data.title).toBe('My Grid')
    expect(data.description).toBe('Uma breve descrição')
    expect(data.background).toBe(true)
    expect(data.sectionId).toBe('gridone')
    expect(data.grid[0].title).toBe('Teste 1')
    expect(data.grid[0].description).toBe('abc.')
  })

  it('should map sections grid', () => {
    const data = mapSectionGrid(undefined)

    expect(data.component).toBe('section.section-grid-text')
    expect(data.title).toBe('')
    expect(data.description).toBe('')
    expect(data.background).toBe(false)
    expect(data.sectionId).toBe('')
  })

  it('should map image grid', () => {
    const data = mapImageGrid(undefined)

    expect(data.component).toBe('section.section-grid-image')
    expect(data.title).toBe('')
    expect(data.description).toBe('')
    expect(data.background).toBe(false)
    expect(data.sectionId).toBe('')
  })

  it('should map image grid with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid-image',
      id: 4,
      title: '',
      description: '',
      image_grid: [
        {
          alternativeText: 'abc',
          caption: null,
          width: 1030,
          height: 730,
          formats: null,
          hash: 'imagem_3ed0595e1b',
          ext: '.svg',
          mime: 'image/svg+xml',
          size: 30.31,
          url: 'a.svg',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: 'imagem_3ed0595e1b',
            resource_type: 'image',
          },
        },
      ],
    })

    expect(data.component).toBe('section.section-grid-image')
    expect(data.title).toBe('')
    expect(data.description).toBe('')
    expect(data.background).toBe(false)
    expect(data.sectionId).toBe('')
    expect(data.grid[0].srcImg).toBe('a.svg')
    expect(data.grid[0].altText).toBe('abc')
  })
  // mapSectionContent final
  it('should map sections content', () => {
    const data = mapSectionContent({
      title: '',
      content: [{ children: [{ text: '' }] }],
      metadata: {
        background: false,
        section_id: '',
      },
    })

    expect(data.component).toBe('')
    expect(data.title).toBe('')
    expect(data.html).toBe('')
    expect(data.background).toBe(false)
    expect(data.sectionId).toBe('')
  })

  it('should map sections content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      id: 3,
      title: 'news coverage and some surprises',
      content: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'abc',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: '',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: 'We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: '',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: 'abc.',
              type: 'text',
            },
          ],
        },
      ],
      metadata: {
        id: 10,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    })

    expect(data.component).toBe('section.section-content')
    expect(data.title).toBe('news coverage and some surprises')
    expect(data.html).toBe('abc')
    expect(data.background).toBe(false)
    expect(data.sectionId).toBe('intro')
  })
})
