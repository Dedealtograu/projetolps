import { useEffect, useRef, useState } from 'react'
import { Base } from '../Base'
import { mockBase } from '../Base/mock'
import { mapData } from '../../api/map-data'
import { PageNotFoud } from '../PageNotFoud'

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
      console.log(pageData)
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
    return <h1>Carregando...</h1>
  }

  return <Base {...mockBase} />
}

export default Home
