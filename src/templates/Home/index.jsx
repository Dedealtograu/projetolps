import { useEffect, useRef, useState } from 'react'
import { Base } from '../Base'
//import { mockBase } from '../Base/mock'
import { mapData } from '../../api/map-data'
import { PageNotFoud } from '../PageNotFoud'
import { Loading } from '../Loading'
import { GridTwoColumn } from '../../components/GridTwoColumn'
import { GridSection } from '../../components/GridSection'
import { GridContent } from '../../components/GridContent'
import { GridImage } from '../../components/GridImage'

function Home() {
  const [data, setData] = useState([])
  const isMounted = useRef(true)

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/api/pages?populate[menu][populate]=*&populate[sections][populate]=*',
      )
      const json = await data.json()
      const attributes = json.data[0]
      const pageData = mapData([attributes])

      setData(() => pageData[0])
    }

    if (isMounted.current === true) {
      load()
    }

    return () => {
      isMounted.current = false
    }
  }, [])

  if (data === undefined) {
    return <PageNotFoud />
  }

  if (data && !data.slug) {
    return <Loading />
  }

  const { footerHtml, sections, menu, slug } = data
  const { link, text, menu_links, srcImg } = menu

  //console.log(sections)

  return (
    <Base links={menu_links} logoData={{ text, link, srcImg }} footerHtml={footerHtml[0].children[0].text}>
      {sections.map((section, index) => {
        const { __component } = section
        const key = `${slug}-${index}`

        if (__component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />
        }

        if (__component === 'section.section-content') {
          return <GridContent key={key} {...section} />
        }

        if (__component === 'section.section-grid-text') {
          return <GridSection key={key} {...section} />
        }

        if (__component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />
        }
      })}
    </Base>
  )
}

export default Home
