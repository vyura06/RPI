import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import i18n from '../i18n';

import { useTranslation } from 'react-i18next'

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &: hover{
            color: white
        }
    }
`

function Navibar() {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const { t } = useTranslation();

    return (
        <>  
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">{t("home.logo")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">{t("home.home")}</Nav.Link>
                            <Nav.Link href="/users">{t("home.film")}</Nav.Link>
                            <Nav.Link href="/about">{t("home.about")}</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                <div onClick={() => changeLanguage('en')}>{t("home.lng-en")}</div>
                            </Nav.Link>
                            <Nav.Link onClick={() => changeLanguage('ru')}>{t("home.lng-ru")}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>    
        </>
    );
}

export default Navibar