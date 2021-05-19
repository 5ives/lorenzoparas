import "../App.css";
import React, { Component } from 'react';
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpg";
import seven from "../images/7.jpg";
import eight from "../images/8.jpg";
import nine from "../images/9.jpg";
import ten from "../images/10.jpg";
import eleven from "../images/11.jpg";
import twelve from "../images/12.jpg";
import thirteen from "../images/13.jpg";
import fourteen from "../images/14.jpg";

function Home() {
    let [slideIndex, setSlideIndex] = React.useState(0);
    let interval;

    React.useEffect(() => {
        showSlides();
    }, []);

    React.useEffect(() => {
        interval = setInterval(showSlides, 2000);
        return () => {
            clearInterval(interval);
        }   
    }, [slideIndex]);

    const showSlides = () => {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        const currSlide = slideIndex % slides.length;
        slides[currSlide].style.display = "block";
        setSlideIndex(slideIndex++);
    }

  	return (
        <div class="container">
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src={one}/>
                </div>
                <div class="mySlides fade">
                    <img src={two}/>
                </div>
                
                <div class="mySlides fade">
                    <img src={three}/>
                </div>

                <div class="mySlides fade">
                    <img src={four}/>
                </div>

                <div class="mySlides fade">
                    <img src={five}/>
                </div>

                <div class="mySlides fade">
                    <img src={six}/>
                </div>

                <div class="mySlides fade">
                    <img src={seven}/>
                </div>

                <div class="mySlides fade">
                    <img src={eight}/>
                </div>

                <div class="mySlides fade">
                    <img src={nine}/>
                </div>

                <div class="mySlides fade">
                    <img src={ten}/>
                </div>

                <div class="mySlides fade">
                    <img src={eleven}/>
                </div>

                <div class="mySlides fade">
                    <img src={twelve}/>
                </div>

                <div class="mySlides fade">
                    <img src={thirteen}/>
                </div>

                <div class="mySlides fade">
                    <img src={fourteen}/>
                </div>
            </div>
        </div>
    );
}

export default Home;
