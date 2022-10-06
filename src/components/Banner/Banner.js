import React, { useState } from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/slide_bg.png'
import Loading from '../Loading/Loading';
import Slider from "react-slick";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 500,
        cssEase: "linear"
    };



    return (

        <Slider className='slider-bg' {...settings} >
            <div className=' '>
                <div className='single-slider'>
                    <div className='left-banner-div'>
                        <h3 className='banner-left-text'>
                            শুধু কমেন্ট করেই জিতে নিন পুরস্কার। এখনই অংশগ্রহণ করে আপনার রিওয়ার্ডস লুফে নিন। </h3>
                        <p className='banner-desc'> ব্লগবিডি তে চলছে টপ কমেন্টারস ক্যাম্পেইন । প্রতি সপ্তাহে সার্বাধিক কমেন্টস করে জিতে নিন আকর্ষর্ণীয় রিওয়ার্ডস । নিয়মিত চোখ রাখুন https://blog-bd.netlify.app এর https://blog-bd.netlify.app এই লিংকে। ক্যাম্পেইনে অংশগ্রহণ করতে আপনাকে কোনো রেজিস্ট্রেশন করতে হবে না। প্রতি সপ্তাহের পোস্ট গুলোতে কমেন্ট করতে থাকুন.. </p>
                        <button className='banner-button'>আরো দেখুন</button>
                    </div>
                    <div className='right-banner-div'>
                        <img width='513px' height='360px' src="https://trickbd.com/wp-content/uploads/2022/09/29/commenters-templete.jpg" alt="" />
                    </div>
                </div>

            </div>
            <div className=' '>
                <div className='single-slider'>
                    <div className='left-banner-div'>
                        <h3 className='banner-left-text'>Shon Shon (শন শন) রিভিউ bhoot.com এর সত্য ঘটনা অবলম্বনে নির্মিত একটি সিরিজ।  </h3>
                        <p className='banner-desc'>  হ্যালো সবাইকে। আসা করি সবাই ভালো আছেন। আপনারা জানেন যে কাল রাতে bhoot.com এর একটা সিরিজ শন শন রিলিজ হয়েছে। এটা দেখার জন্য আমি অনেক এক্সাইটেড ছিলাম। ১০ তারিখ সন্ধ্যার দিকে ১ দিনের subscription কিনেছিলাম ভেবেছিলাম দুপুর ১২ টার দিকে.. </p>
                        <button className='banner-button'>আরো দেখুন</button>
                    </div>
                    <div className='right-banner-div'>
                        <img width='513px' height='360px' src="https://trickbd.com/wp-content/uploads/2022/09/30/IMG_20220930_081721.jpg" alt="" />
                    </div>
                </div>

            </div>


        </Slider>
    );
};

export default Banner;




