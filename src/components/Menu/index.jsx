import P from 'prop-types'
import { SectionContainer } from '../SectionContainer'
import { LogoLink } from '../LogoLink'
import { NavLinks } from '../NavLinks'
import * as styled from './styles'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as MenuClose } from '@styled-icons/material-outlined/Close'
import { useState } from 'react'

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <styled.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? <MenuClose aria-label="Close menu" /> : <MenuIcon aria-label="Open menu" />}
      </styled.Button>
      <styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </styled.MenuContainer>
        </SectionContainer>
      </styled.Container>
    </>
  )
}

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
}
