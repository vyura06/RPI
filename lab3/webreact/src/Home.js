import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import Slider from './components/Slider'
import Jumbotron from './components/Jumbotron'
import ocean from './ocean.jpg';

export const Home = () => (
    <>
        <Jumbotron></Jumbotron>
        <Container style={{ marginBottom: "2rem", marginTop: "5rem" }}>
            <Row>
                <Col md={7}>
                    <img src={ocean} height={300} width={600} />
                </Col>

                <Col md={5}>
                    <h2>Web Developer Blog</h2>
                    <p>
                        esfkjnsfknsfsfnsjfjsmfsmfbsfsbhmsbfshbfs
                        fsjfmsbfmsfbshfsmbfshbkfsbfbsejhfsbfshmfbsmf
                        sfskfxdcfvghjbhknjlkm;l
                        fsmfsefmsef,sfse
                        sfsfesfsfsefseflksefsefnskfjnsekjfs
                        fslsfnskefhsefhsekfsekeufhsekfseifjesofselifjseo
                        flskfsfskuehfksefsehfhmsbfsjf
                </p>
                </Col>
            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem', width: "100%"}}>
            <Card style={{ width: '18rem', border: "1rem", marginTop: '1rem' }}>
                <Card.Img variant="top" src={ocean} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Container>
        <Jumbotron></Jumbotron>
        <Container style={{ marginTop: '1rem', marginBottom: "2rem" }}>
            <Row>
                <Col>
                    <Card style={{ width: '16rem', border: "1rem", marginBottom: "1rem", backgroundColor: "transparent"}}>
                        <Container>
                            <Col>
                                <Image src={ocean} roundedCircle style={{ width: '200px', height: "200px", marginTop: "1rem" }} />
                            </Col>
                        </Container>
                        <Card.Body style={{ alignContent: "center"}}>
                            <Card.Title>Vechorko Yura</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>Web Developer Blog</h2>
                    <p>
                        esfkjnsfknsfsfnsjfjsmfsmfbsfsbhmsbfshbfs
                        fsjfmsbfmsfbshfsmbfshbkfsbfbsejhfsbfshmfbsmf
                        sfskfxdcfvghjbhknjlkm;l
                        fsmfsefmsef,sfse
                        sfsfesfsfsefseflksefsefnskfjnsekjfs
                        fslsfnskefhsefhsekfsekeufhsekfseifjesofselifjseo
                        flskfsfskuehfksefsehfhmsbfsjf
                </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '16rem', border: "1rem", marginBottom: "1rem", backgroundColor: "transparent"}}>
                        <Container>
                            <Col>
                                <Image src={ocean} roundedCircle style={{ width: '200px', height: "200px", marginTop: "1rem" }} />
                            </Col>
                        </Container>
                        <Card.Body>
                            <Card.Title>Blog</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={8}>
                    <h2>Web Developer Blog</h2>
                    <p>
                        esfkjnsfknsfsfnsjfjsmfsmfbsfsbhmsbfshbfs
                        fsjfmsbfmsfbshfsmbfshbkfsbfbsejhfsbfshmfbsmf
                        sfskfxdcfvghjbhknjlkm;l
                        fsmfsefmsef,sfse
                        sfsfesfsfsefseflksefsefnskfjnsekjfs
                        fslsfnskefhsefhsekfsekeufhsekfseifjesofselifjseo
                        flskfsfskuehfksefsehfhmsbfsjf
                </p>
                </Col>
            </Row>
        </Container>
        <Slider></Slider>
    </>
)