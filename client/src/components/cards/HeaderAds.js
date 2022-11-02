import { Carousel } from 'antd';
import React from 'react';
import { Image } from 'antd';
const contentStyle = {
    height: '500px',
    objectFit: 'cover',

};
const HeaderAds = () => (

    <Carousel autoplay>
        <div>
            <Image style={contentStyle} src="/h1.png" />
        </div>
        <div>
            <Image style={contentStyle} src="/h2.png" />
        </div>
        <div>
            <Image style={contentStyle} src="/h3.png" />
        </div>
    </Carousel>

);
export default HeaderAds;