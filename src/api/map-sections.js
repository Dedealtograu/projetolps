export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      mapSectionTwoColumns(section)
    }

    if (section.__component === 'section.section-grid') {
      // eslint-disable-next-line no-empty-pattern
      const { __component: { text_grid: [], image_grid: [] } = '' } = section

      if (text_grid.length > 0) {
        mapSectionGrid(section)
      }

      if (image_grid.length > 0) {}

      //mapSectionGrid(section)
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

export const mapSectionContent = (section = {}) => {
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

  return {
    component,
    title,
    html,
    background,
    sectionId,
  }
}

export const mapSectionGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid,
  }
}
