import React, {useState} from 'react';
import {Navbar, Nav, Button, Container, Modal, Form, ModalTitle} from 'react-bootstrap';
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

    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { t, i18n } = useTranslation();

    return(
        <>
        <Styles>
            <Navbar collapseOnSelect expend="lg" bg='dark' variant='dark'>
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <button key={lng} style={{ borderRadius: "10px", backgroundColor: "#007bff", boxShadow: "2px 3px", opacity: "0.9",fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
                <Container>
                <Navbar.Brand><Trans i18nKey="description.part1">Blog</Trans></Navbar.Brand>
                <Navbar.Toggle aria controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/"><Trans i18nKey="description.part2">Home</Trans></Link></Nav.Link>
                        <Nav.Link><Link to="/users"><Trans i18nKey="description.part3">Filmmakers</Trans></Link></Nav.Link>
                        <Nav.Link><Link to="/about"><Trans i18nKey="description.part4">About</Trans></Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variants="primary" className="mr-2" onClick={handleShow}><Trans i18nKey="description.part5">Log In</Trans></Button>
                        <Button variants="primary" onClick={handleShow}><Trans i18nKey="description.part6">Sign Out</Trans></Button>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <ModalTitle><Trans i18nKey="description.part7">Log In</Trans></ModalTitle>
            </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><Trans i18nKey="description.part8">Email Adress</Trans></Form.Label>
                    <Form.Control type="email" placeholder="Enter email"></Form.Control>
                    <Form.Text className="text-muted"><Trans i18nKey="description.part9">We will never share your email width anyone else.</Trans></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><Trans i18nKey="description.part10">Password</Trans></Form.Label>
                    <Form.Control type="password" placeholder="Enter password"></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me"></Form.Check>
                </Form.Group>
            </Form>
        </Modal.Body>
        </Modal>
        </>

    );
}