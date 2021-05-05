import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../i18n';
import { useTranslation, Trans} from 'react-i18next';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &: hover{
            color: white
        }
    }
`

const lngs = {
    en: {nativeName: 'En'},
    ru: {nativeName: 'Ru'}
};

export default function Navibar() {

    const { t, i18n } = useTranslation();

    return(
        <>
        <Styles>
            <Navbar collapseOnSelect expend="lg" bg='dark' variant='dark'>
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng} style={{ borderRadius: "10px", backgroundColor: "#007bff", boxShadow: "2px 3px", opacity: "0.9",fontWeight: i18n.language === lng ? 'bold' : 'normal', fontFamily:"Orelega One"}} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
                <Container>
                <Navbar.Brand style={{fontSize:'1.5rem', fontFamily:"Orelega One"}}><Trans i18nKey="description.part1" >Filmmakers of Belarus</Trans></Navbar.Brand>
                <Navbar.Toggle aria controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{fontSize:'1.2rem', fontFamily:"Orelega One"}}>
                        <Nav.Link><Link to="/"><Trans i18nKey="description.part2">Home</Trans></Link></Nav.Link>
                        <Nav.Link><Link to="/users"><Trans i18nKey="description.part3">Filmmakers</Trans></Link></Nav.Link>
                        <Nav.Link><Link to="/about"><Trans i18nKey="description.part4">More details</Trans></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        </>

    );
}