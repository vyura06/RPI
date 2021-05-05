import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import Jumbotron from './components/Jumbotron'

import fotoap from './img/Fotoap.jpg';
import belousov from './img/Belousov.jpg';
import yura from './img/Yura.jpg';
import zahar from './img/Zahar.jpg';


export const Home = () => (
    <>
        <Jumbotron></Jumbotron>
        <Container style={{ marginBottom: "2rem", marginTop: "5rem", fontFamily:"Orelega One"}}>
            <Row>
                <Col md={7}>
                    <img src={fotoap} height={312} width={500} />
                </Col>

                <Col md={4}>
                <h2>About the project:</h2>
                    <a>   
                    This project is a study assignment for second year students. It aims to popularize Belarusian directors among young people. Tell about the first Belarusian film, eminent representatives of Belarusian direction, show how interesting and exciting cinema can be.
                    </a>
                </Col>
            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container style={{ paddingTop: '1rem', paddingBottom: '2rem', width: "100%", fontFamily:"Orelega One"}}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', border: "1rem"}}>
                        <Card.Body style={{backgroundColor:"#343a40", color: "white", fontWeight:"200"}}><Card.Title>Doer of the day:</Card.Title></Card.Body>
                        <Card.Img variant="top" src={belousov} rounded style={{ width: '288px', height: "288px"}}/>
                        <Card.Body style={{backgroundColor:"#343a40", color: "white"}}>
                            <Card.Text>Oleg Belousov</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem style={{backgroundColor:"#343a40", color: "white"}}>16.11.1945 - 26.03.2009</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:"#343a40", color: "white"}}>!</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={8}>
                    <div style={{fontSize:"2rem"}}>About him:</div>
                    <a style={{fontSize:"1.4rem"}}>
                    Oleg Pavlovich Belousov (Belarusian Aleg Paulavich Belavusak) - Soviet and Belarusian animator, screenwriter, director.
                    Born on November 16, 1945 in the city of Slutsk, Minsk region. Graduated from BSU (1966). He worked as a literary contributor to the newspaper "Literature and Art" (1968-1973). Founder and artistic director of the cartoon studio of the Belarusfilm film studio (1975-1989), animation studios, including the ABC studio (1989-1995), vice-president of the Kadr-2 film and video studio (since 1995. ).
                    Member of the Belarusian Union of Journalists, the Belarusian Union of Cinematographers, the Belarusian Union of Artists and the Belarusian Popular Front "Renaissance". [1]
                    Author of the book "My City" (2005) and a collection of poems "Kazantip Notebook" (2006)
                    </a>
                </Col>

            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container style={{ marginTop: '1rem', marginBottom: "2rem", fontFamily:"Orelega One"}}>
            <p style={{ textAlign: "center",marginBottom:"2rem",fontSize:"3rem"}}>Project developers:</p>
            <Row style={{
                    height: "18rem",
                    outline: "0.2rem solid rgba(255,255,255,0.8)",
                    padding: "0.6rem",
                    outlineOffset: "-0.85rem",
                    outlineColor: "rgba(52, 58, 64, 1)",
                    marginBottom: "2rem"
                    }}>
                <Col>
                    <Card style={{ width: '16rem', border: "1rem", marginBottom: "1rem", backgroundColor: "transparent" }}>
                        <Container>
                            <Col>
                                <Image src={yura} roundedCircle style={{ width: '200px', height: "200px", marginTop: "1rem" }} />
                            </Col>
                        </Container>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", fontSize:"1.6rem"}}>Vechorko Yura</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>About me:</h2>
                    <div>
                        gh
                    </div>
                    <ul style={{ backgroundColor: "transparent", width: "10rem", fontSize: "0.8rem" }}>
                        <li><a><svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121"/></svg></a></li>
                        <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" /><path d="m.396 7.977h4.976v16.023h-4.976z" /><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" /></svg></a></li>
                        <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" /></svg></a></li>
                    </ul>
                </Col>
            </Row>

            <Row style={{
                    height: "18rem",
                    outline: "0.2rem solid rgba(255,255,255,0.8)",
                    padding: "0.6rem",
                    outlineOffset: "-0.85rem",
                    outlineColor: "rgba(52, 58, 64, 1)",
                    marginBottom: "4rem"
                    }}>
                <Col>
                    <Card style={{ width: '16rem', border: "1rem", marginBottom: "1rem", backgroundColor: "transparent" }}>
                        <Container>
                            <Col>
                                <Image src={zahar} roundedCircle style={{ width: '200px', height: "200px", marginTop: "1rem" }} />
                            </Col>
                        </Container>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", fontSize:"1.6rem"}}>Zahar Shestokovich</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>About me:</h2>
                    <div>
                        esfkjnsfknsfsfnsjfjsmfsmfbsfsbhmsbfshbfs
                        fsjfmsbfmsfbshfsmbfshbkfsbfbsejhfsbfshmfbsmf
                        sfskfxdcfvghjbhknjlkm;l
                        fsmfsefmsef,sfse
                        sfsfesfsfsefseflksefsefnskfjnsekjfs
                        fslsfnskefhsefhsekfsekeufhsekfseifjesofselifjseo
                        flskfsfskuehfksefsehfhmsbfsjf
                    </div>
                    <ul style={{ backgroundColor: "transparent", width: "10rem", fontSize: "0.8rem" }}>
                        <li><a><svg enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#212121" /></svg></a></li>
                        <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z" /></svg></a></li>
                        <li><a><svg id="Bold" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" /></svg></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
)