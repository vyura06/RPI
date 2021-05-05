import { Carousel } from 'react-bootstrap';
import React from 'react';
import ocean from '../ocean.jpg';

export default function Navibar() {
    return(
       <Carousel>
           <Carousel.Item style={{'height':'500px'}}>
               <img
                className="d-block w-100"
                src={ocean}
                alt="First slide"
               />
            <Carousel.Caption>
                <h3>Web Debeloper Blog</h3>
                <p>lorem</p>
            </Carousel.Caption>
           </Carousel.Item>
           
           <Carousel.Item style={{'height':'500px'}}>
               <img
                className="d-block w-100"
                src={ocean}
                alt="First slide"
               />
            <Carousel.Caption>
                <h3>Web Debeloper Blog</h3>
                <p>lorem</p>
            </Carousel.Caption>
           </Carousel.Item>

           <Carousel.Item style={{'height':'500px'}}>
               <img
                className="d-block w-100"
                src={ocean}
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