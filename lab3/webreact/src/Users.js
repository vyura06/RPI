import React from 'react';
import { Table, Container, Accordion, Card, Button} from 'react-bootstrap';

export const Users = () => (
    <Container>
        <h1>Filmmakers of Belarus</h1>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Year of birth</th>
                    <th>User page</th>
                </tr>
            </thead>
            <tbody style={{ backgroundColor: "lightblue", opacity: "0.6", color: "black", fontWeight: "400"}}>
                <tr>
                    <td>1</td>
                    <td>Yuri</td>
                    <td>Azaryonok</td>
                    <td>27.02.1965</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sergey</td>
                    <td>Arlanov</td>
                    <td>05.02.1973</td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Oleg</td>
                    <td>Belousov</td>
                    <td>16.11.1945</td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Vladimir</td>
                    <td>Bychkov</td>
                    <td>05.01.1929</td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Joseph</td>
                    <td>Veinerovich</td>
                    <td>24.12.1909</td>
                    <td></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Igor</td>
                    <td>Volchek</td>
                    <td>18.05.1946</td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Stanislav</td>
                    <td>Haiduk</td>
                    <td>10.01.1945</td>
                    <td></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Victor</td>
                    <td>Dashuk</td>
                    <td>16.09.1938</td>
                    <td></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Sergey</td>
                    <td>Arlanov</td>
                    <td>05.02.1973</td>
                    <td></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Yuri</td>
                    <td>Elkhov</td>
                    <td>07.12.1940</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    </Container>
)