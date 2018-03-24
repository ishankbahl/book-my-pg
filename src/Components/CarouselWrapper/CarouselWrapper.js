import React from "react";
import Carousel from "react-bootstrap/lib/Carousel";

class CarouselWrapper extends React.Component{

    render(){

        return(
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://lh6.googleusercontent.com/-SUFzj-Z7_P4/AAAAAAAAAAI/AAAAAAAAABQ/F6WRgAztFDA/photo.jpg" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://lh6.googleusercontent.com/-SUFzj-Z7_P4/AAAAAAAAAAI/AAAAAAAAABQ/F6WRgAztFDA/photo.jpg" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="https://lh6.googleusercontent.com/-SUFzj-Z7_P4/AAAAAAAAAAI/AAAAAAAAABQ/F6WRgAztFDA/photo.jpg" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

    }

}

export default CarouselWrapper;