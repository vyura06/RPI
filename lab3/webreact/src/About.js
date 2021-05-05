import React from 'react';
import { Timeline, TimelineItem}  from 'vertical-timeline-component-for-react';
import {Container, Card, Col, Row, Image } from 'react-bootstrap';
import Slider from './components/Slider'
import belousov from './img/Belousov.jpg';

export const About = () => (
    <>
        <Row>
            <Col>
                <Card style={{ width: '16rem', border: "1rem", marginBottom: "1rem", backgroundColor: "transparent" }}>
                    <Container>
                        <Col>
                            <Image src={belousov} roundedCircle style={{ width: '25rem', height: "25rem", marginTop: "4rem"}} />
                        </Col>
                    </Container>
                </Card>
            </Col>
            <Col md={8} style={{fontFamily:"Orelega One"}}>
                <Timeline lineColor={'#ddd'}>
                <TimelineItem
                    key="001"
                    dateText="Biography"
                    style={{ color: '#e86971' }}
                >
                    <h1>Oleg Belousov</h1>
                    <h4>16.11.1945 - 26.03.2009</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="04/2009 – 11/2010"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateComponent={(
                    <div
                        style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: 'rgb(150, 150, 150)',
                        color: '#fff',
                        }}
                    >
                        11/2008 – 04/2009
                    </div>
                    )}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="08/2008 – 11/2008"
                    dateInnerStyle={{ background: '#76bb7f' }}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="005"
                    dateText="04/2009 – 11/2010"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="006"
                    dateText="08/2008 – 11/2008"
                    dateInnerStyle={{ background: '#76bb7f' }}
                >
                    <h3>Title, Company</h3>
                    <h4>Subtitle</h4>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                    <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    </p>
                </TimelineItem>
                </Timeline>
            </Col>
            <Col>
                <Container>
                    <Container><Slider></Slider></Container>
                    <div style={{marginTop:"5rem", marginLeft:"1rem"}}>
                        <iframe width="1080" height="630" src="https://www.youtube.com/embed/wcaZcbain2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Container>
            </Col>
            
        </Row>
    </>
)