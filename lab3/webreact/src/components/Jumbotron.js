import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import ocean from '../ocean.jpg';
import styled from 'styled-components';

const Styles = styled.div `
    .jumbo {
        background: url(${ocean}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: 2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Web Developer Blog</h1>
                <p>ksfnskjfsfsenfskfsjnfskfnsjfnse
                sefksfsjnfsekfnesnfeskensfjsnfs
                seflksfeslflfsnefsjfnsekfns</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;