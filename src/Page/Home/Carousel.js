import React, { memo } from 'react';
import Slider from "react-slick";

function Carousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className="carousel" id="carousel">
            <Slider {...settings}>
                <div>
                    <img src={`./img/trailer/trailer_1.jpg`} alt="trailer" />
                    <button className="btnPlayVideo">
                        <a href="https://www.youtube.com/watch?v=eLd55DPT9lE" rel="noreferrer" target="_blank" ><img src="./img/play-video.png" alt="btnPlay" /></a>
                    </button>
                </div>
                <div>
                    <img src={`./img/trailer/trailer_2.jpg`} alt="trailer" />
                    <button className="btnPlayVideo">
                        <a href="https://www.youtube.com/watch?v=EL733nvX1Pk" rel="noreferrer" target="_blank">
                            <img src="./img/play-video.png" alt="btnPlay" />
                        </a>
                    </button>
                </div>
                <div>
                    <img src={`./img/trailer/trailer_3.jpg`} alt="trailer" />
                    <button className="btnPlayVideo">
                        <a href="https://www.youtube.com/watch?v=XnuDetmX9lU" rel="noreferrer" target="_blank">
                            <img src="./img/play-video.png" alt="btnPlay" />
                        </a>
                    </button>

                </div>
                <div>
                    <img src={`./img/trailer/trailer_4.jpg`} alt="trailer" />
                    <button className="btnPlayVideo">
                        <a href="https://www.youtube.com/watch?v=tHjUvdbKKuY" rel="noreferrer" target="_blank">
                            <img src="./img/play-video.png" alt="btnPlay" />
                        </a>
                    </button>
                </div>
                <div>
                    <img src={`./img/trailer/trailer_5.jpg`} alt="trailer" />
                    <button className="btnPlayVideo">
                        <a href="https://www.youtube.com/watch?v=IkkZDcGNOpM" rel="noreferrer" target="_blank">
                            <img src="./img/play-video.png" alt="btnPlay" />
                        </a>
                    </button>
                </div>
            </Slider>
        </div>
    )
}
export default memo(Carousel);