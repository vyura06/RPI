import React from 'react';
import JSONDATA from './components/MOCK_DATA.json';
import { Table, Container, Row, Col } from 'react-bootstrap';
import Search from './components/Search';
import { useTranslation } from 'react-i18next'

export default function Users(){

    const { t } = useTranslation();

    return(
        <>
            <Container>
                <Row>
                    <Container fluid style={{ marginTop: "1rem", fontFamily: "Orelega One", marginBottom:"3rem" }}>
                        <Row>
                            <div class="col-sm">
                                <h1>{t("home.logo")}</h1>
                                <Search></Search>
                            </div>
                            
                        </Row>
                    </Container>
                    <Table striped bordered hover size="lg" style={{ marginTop: "1rem", fontFamily: "Orelega One" }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>{t("users.first")}</th>
                                <th>{t("users.last")}</th>
                                <th>{t("users.year")}</th>
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
        </>
    )
}