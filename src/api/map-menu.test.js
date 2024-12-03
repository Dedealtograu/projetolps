import { mapMenu, mapMenuLinks } from './map-menu'

describe('mapMenu', () => {
  it('should return a predefined object if there is no data', () => {
    const menu = mapMenu()

    expect(menu.newTab).toBe(false)
    expect(menu.text).toBe('')
    expect(menu.srcImg).toBe('')
    expect(menu.link).toBe('')
  })

  it('should map menu to match key and value required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_link: '#home',
      logo_text: 'Logo',
      menu_links: [
        {
          url: '#intro',
          open_in_new_tab: false,
          link_text: 'intro',
        },
        {
          url: '#grid-one',
          open_in_new_tab: false,
          link_text: 'grid-one',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    })

    expect(menu.newTab).toBe(false)
    expect(menu.text).toBe('Logo')
    expect(menu.srcImg).toBe('a.svg')
    expect(menu.link).toBe('#home')
    expect(menu.menu_links[0].newTab).toBe(false)
    expect(menu.menu_links[0].link).toBe('#intro')
    expect(menu.menu_links[0].children).toBe('intro')
  })

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks()

    expect(links).toEqual([])
  })

  it('should map links passed', () => {
    const links = mapMenuLinks([
      {
        url: '#intro',
        open_in_new_tab: false,
        link_text: 'intro',
      },
      {},
    ])

    expect(links[0].newTab).toBe(false)
    expect(links[0].link).toBe('#intro')
    expect(links[0].children).toBe('intro')
  })
})
