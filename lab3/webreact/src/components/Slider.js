import { Carousel } from 'react-bootstrap';
import React from 'react';
import fotoap from '../img/Fotoap.jpg';

export default function Navibar() {
    return(
       <Carousel style={{height:"20rem", width:"100%"}}>
           <Carousel.Item>
               <img
                class="h-100 d-inline-block"
                src={fotoap}
               />
           </Carousel.Item>
           
           <Carousel.Item>
               <img
                class="h-100 d-inline-block"
                src={fotoap}
               />
           </Carousel.Item>

           <Carousel.Item>
               <img
                class="h-100 d-inline-block"
                src={fotoap}
               />
           </Carousel.Item>
       </Carousel>

    );
}