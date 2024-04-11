import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import m1 from "./images/move (21).jpg";
import m2 from "./images/move (22).jpg";
import m3 from "./images/move (23).jpg";
import m4 from "./images/move (24).jpg";
import m5 from "./images/move (25).jpg";
import m6 from "./images/move (26).jpg";
import m7 from "./images/move (27).jpg";
import m8 from "./images/move (28).jpg";
import m9 from "./images/move (29).jpg";
import m10 from "./images/move (30).jpg";
import m11 from "./images/move (37).jpg";
import m12 from "./images/move (38).jpg";
import m13 from "./images/move (39).jpg";

const MovieRow4 = () => {
    let carousel = document.querySelector(".movie_slider");
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
            <h3 className='move_type'>New movies on Netflix</h3>
            <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}>
                <img src={m2} className="poster_img" draggable={false} />
                <img src={m1} className="poster_img" draggable={false} />
                <img src={m3} className="poster_img" draggable={false} />
                <img src={m4} className="poster_img" draggable={false} />
                <img src={m5} className="poster_img" draggable={false} />
                <img src={m6} className="poster_img" draggable={false} />
                <img src={m7} className="poster_img" draggable={false} />
                <img src={m8} className="poster_img" draggable={false} />
                <img src={m9} className="poster_img" draggable={false} />
                <img src={m10} className="poster_img" draggable={false} />
                <img src={m11} className="poster_img" draggable={false} />
                <img src={m12} className="poster_img" draggable={false} />
                <img src={m13} className="poster_img" draggable={false} />
            </Carousel>
        </>
    );
}

export default MovieRow4;