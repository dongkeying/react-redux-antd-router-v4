import React,{Component} from 'react'
import Slider from 'react-slick';
class Teacher extends Component {
    render() {
        var settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode : true
        };
        return ( 
            <div className="teacher-item">
                <Slider {...settings}>
                    <div>
                        <img src='http://www.yujia.com/Public/attached/image/20151204/20151204093513_13319.jpg' alt=""/>
                        <p>宋光明</p>
                        <p>理疗瑜伽</p>
                    </div>
                </Slider>
            </div>  
        )
    }
}
export default Teacher;