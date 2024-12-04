export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { url: srcImg = '' } = '',
    menu_links: menu_links,
  } = menu

  return {
    newTab,
    text,
    link,
    srcImg,
    menu_links: mapMenuLinks(menu_links),
  }
}

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const { url: link = '', open_in_new_tab: newTab = false, link_text: children = '' } = item

    return {
      link,
      newTab,
      children,
    }
  })
}