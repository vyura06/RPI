import React from 'react';
import JSONDATA from './components/MOCK_DATA.json';
import { Table, Container, Row, Col} from 'react-bootstrap';
import Search from './components/Search';

export const Users = () => (

    <Container>
        <Row>
            
                <Col><h1 style={{marginTop:"1rem", fontFamily:"Orelega One"}}>Filmmakers of Belarus</h1></Col>
                <Col md={3} style={{marginTop:"0.4rem", fontFamily:"Orelega One"}}><Search></Search></Col>
                <Table striped bordered hover size="lg" style={{marginTop:"1rem", fontFamily:"Orelega One"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Year of birth</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: "lightblue", opacity: "0.6", color: "black", fontWeight: "400" }}>
                        {
                            JSONDATA.map((val, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{val.first_name}</th>
                                        <th>{val.last_name}</th>
                                        <th>{val.year_of_birth}</th>
                                    </tr>
                                );
                            })
                        }
                    </tbody>

                </Table>
        </Row>
    </Container >
)