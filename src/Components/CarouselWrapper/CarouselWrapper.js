import React from "react";
import Carousel from "react-bootstrap/lib/Carousel";
import Image from "react-bootstrap/lib/Image";

import "./CarouselWrapper.css";

class CarouselWrapper extends React.Component{

    render(){

        return(
            <Carousel>
                <Carousel.Item>
                    <Image responsive className="pg-carousel-image" src="https://lh6.googleusercontent.com/-SUFzj-Z7_P4/AAAAAAAAAAI/AAAAAAAAABQ/F6WRgAztFDA/photo.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image responsive className="pg-carousel-image" src="https://lh6.googleusercontent.com/-SUFzj-Z7_P4/AAAAAAAAAAI/AAAAAAAAABQ/F6WRgAztFDA/photo.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image responsive className="pg-carousel-image" src="https://lh6.googleusercontent.com/-SUFzj-Z7_P4/AAAAAAAAAAI/AAAAAAAAABQ/F6WRgAztFDA/photo.jpg" />
                </Carousel.Item>
            </Carousel>
        );

    }

}

export default CarouselWrapper;