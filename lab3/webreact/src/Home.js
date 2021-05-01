import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Slider from './components/Slider'
import Jumbotron from './components/Jumbotron'
import ocean from './ocean.jpg';

export const Home = () => (
    <>
        <Slider></Slider>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={ocean}></Card.Img>
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text> lorem </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={ocean}></Card.Img>
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text> lorem </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={ocean}></Card.Img>
                        <Card.Body>
                            <Card.Title>WebDev Blog</Card.Title>
                            <Card.Text> lorem </Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
        <Jumbotron></Jumbotron>
        <Container style={{marginBottom: "30px"}}>
            <Row>
                <Col md={7}>
                    <img src={ocean} height={300} width={600}/>
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
    </>
)