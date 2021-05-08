import { Carousel } from 'react-bootstrap';
import React from 'react';
import fotoap from '../img/Fotoap.jpg';

export default function Navibar() {
    return(
       <Carousel style={{height:"40rem", width:"100%"}}>
           <Carousel.Item>
               <img
                className="d-block w-100"
                src={fotoap}
                alt="First slide"
               />
            <Carousel.Caption>
                <h3>Web Debeloper Blog</h3>
                <p>lorem</p>
            </Carousel.Caption>
           </Carousel.Item>
           
           <Carousel.Item>
               <img
                className="d-block w-100"
                src={fotoap}
                alt="First slide"
               />
            <Carousel.Caption>
                <h3>Web Debeloper Blog</h3>
                <p>lorem</p>
            </Carousel.Caption>
           </Carousel.Item>

           <Carousel.Item>
               <img
                className="d-block w-100"
                src={fotoap}
                alt="First slide"
               />
            <Carousel.Caption>
                <h3>Web Debeloper Blog</h3>
                <p>lorem</p>
            </Carousel.Caption>
           </Carousel.Item>
       </Carousel>

    );
}