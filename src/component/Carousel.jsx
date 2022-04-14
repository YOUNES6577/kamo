import React from 'react'
import S1 from './Produits/slider1.jpg'
import S2 from './Produits/Slider4.jpeg'
import S3 from './Produits/slider5.jpeg'
import S4 from './Produits/slider6.jpeg'
import { Carousel } from '3d-react-carousal';


export default class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
        })
    }
    render() {
        let slides = [
            <img src={S1} alt="1" />,
            <img src={S2} alt="2" />,
            <img src={S3} alt="3" />,
            <img src={S4} alt="4" />,
        ];
        return <div className="carousel" >
            <Carousel slides={slides}
                showIndicators={true}
                fade={false}
                autoplay={true}
                autoplayHoverPause={true}
            />
        </div>

    }
}



