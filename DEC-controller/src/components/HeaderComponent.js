/*
* Copyright (c) 2020 Gouvernement du Québec
* Auteur: Julio Cesar Torres (torj01)
* SPDX-License-Identifier: LiLiQ-P-v.1.1
* License-Filename: LICENSES/LILIQ-P11ENunicode.txt
*/
import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Button }                     from '@material-ui/core'
import { useHistory, useLocation }    from 'react-router-dom';
import { useTranslation }             from 'react-i18next'
import { globalStyles }               from '../assets/styles/globalStyles';
import Auth                           from '../helpers/Auth';
import useWindowDimensions            from '../helpers/useWindowDimensions';
import QuebecLogo                     from '../assets/images/dec.png';
import LoginIcon                      from '@material-ui/icons/AccountCircle';
import LogoutIcon                     from '@material-ui/icons/ExitToApp';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();

  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogin = () => {
    history.push('/login');
  };

  const handleLogout = () => {
    Auth.signout();
    history.replace('/');
  };

  const handleClickLogo = () => {
    window.location.href = "http://emetteur-dec-issuer.apps.exp.lab.pocquebec.org/";
  }

  return (
    <Navbar color="light" light expand="sm" fixed="top" style={globalStyles.navbar}>     
      <NavbarBrand className="navbar-brand oneliner">
        <img src={QuebecLogo} alt="quebec-logo" onClick={handleClickLogo} style={globalStyles.navbarLogo} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ml-auto">
          {Auth.getAuth() ? (
            <NavItem>
                <Button startIcon={<LogoutIcon />} color="secondary" variant="contained" onClick={handleLogout} >
                    {t('translation:btnLogout')}
                </Button>
            </NavItem>
          ) : (
              <NavItem>
                 <Button startIcon={<LoginIcon />} color="primary" variant="contained" onClick={handleLogin} >
                      {t('translation:btnLogin')}
                  </Button> 
              </NavItem>
            )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
