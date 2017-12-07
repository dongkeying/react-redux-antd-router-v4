import React,{Component} from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        ></div>
    );
}
class Slick extends Component {
    render() {
        var settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return ( 
            <div className="slick-wrap">
                <Slider {...settings}>
                    <div className="item"><img src={require('../../images/banner1.jpg')} alt="瑜伽网" /></div>
                    <div className="item"><img src={require('../../images/banner2.jpg')} alt="瑜伽网" /></div>
                    <div className="item"><img src={require('../../images/banner3.jpg')} alt="瑜伽网" /></div>
                    <div className="item"><img src={require('../../images/banner4.jpg')} alt="瑜伽网" /></div>
                </Slider>
            </div>
        )
    }
}
export default Slick;