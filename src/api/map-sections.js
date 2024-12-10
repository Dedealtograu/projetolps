export const mapSections = (sections = []) => {
  return sections.map((section) => {
    //console.log(section)
    if (section.__component === 'section.section-two-columns') {
      mapSectionTwoColumns(section)
    }

    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section

      if (text_grid.length > 0) {
        return mapSectionGrid(section)
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section)
      }
    }

    if (section.__component === 'section.section-content') {
      mapSectionContent(section)
    }

    return section
  })
}

export const mapSectionTwoColumns = (section) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' },
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  }
}

/* export const mapSectionGrid = (section) => {
  return section
} */

export const mapSectionGrid = (section = {}) => {
  const {
    // eslint-disable-next-line no-unused-vars
    __component: component = '',
    title = '',
    description: description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid,
  }
}

export const mapImageGrid = (section = {}) => {
  const {
    // eslint-disable-next-line no-unused-vars
    __component: component = '',
    title = '',
    description: description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const { url: srcImg = '', alternativeText: altText = '' } = img

      return {
        srcImg,
        altText,
      }
    }),
  }
}

export const mapSectionContent = (section = {}) => {
  //console.log(section.content)
  const {
    __component: component = '',
    title = '',
    content: [
      {
        children: [{ text: html = '' }],
      },
    ] = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section
  //console.log(html)
  return {
    component,
    title,
    html,
    background,
    sectionId,
  }
}
