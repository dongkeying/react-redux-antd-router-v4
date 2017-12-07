import React, { Component } from 'react';
// import { Carousel } from 'antd';
// import 'antd/lib/carousel/style/css';
import Slider from 'react-slick';

class Banner extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            dots:true
        };
        return (
            <Slider {...settings}>
                <div><img src={require('../../images/banner1.jpg')} alt="瑜伽网" /></div>
                <div><img src={require('../../images/banner2.jpg')} alt="瑜伽网" /></div>
                <div><img src={require('../../images/banner3.jpg')} alt="瑜伽网" /></div>
                <div><img src={require('../../images/banner4.jpg')} alt="瑜伽网" /></div>
            </Slider>
        );
    }
}
export default Banner;