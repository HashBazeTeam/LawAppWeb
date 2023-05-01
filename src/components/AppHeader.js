import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { useTranslation } from 'react-i18next'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
const logoPhoto = require("../assets/images/logo.png")

import { selectors, thunks } from "src/store";

const AppHeader = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const unfoldable = useSelector(selectors.ui.selectUnfoldable);
  const sidebarShow = useSelector(selectors.ui.selectSidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          // onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          onClick={() => dispatch(thunks.ui.setSidebarShow(!sidebarShow))}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
        <img
                          className="h-8 w-auto sm:h-10"
                          src={logoPhoto}
                        />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/law-admin" component={NavLink} activeClassName="active">
              {t("dashboard")}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
