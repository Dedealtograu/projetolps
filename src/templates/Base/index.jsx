import P from 'prop-types'
import * as styled from './styles'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <styled.Container>
        {children}
        <Footer footerHtlm={footerHtml} />
      </styled.Container>
      <GoTop />
    </>
  )
}

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
}
