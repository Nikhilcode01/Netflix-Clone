import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import p1 from "./poster/p (1).jpg";
import p2 from "./poster/p (2).jpg";
import p3 from "./poster/p (3).jpg";
import p4 from "./poster/p (4).jpg";
import p5 from "./poster/p (5).jpg";
import p6 from "./poster/p (6).jpg";
import p7 from "./poster/p (7).jpg";
import p8 from "./poster/p (8).jpg";
import p9 from "./poster/p (9).jpg";
import p10 from "./poster/p (10).jpg";
import p11 from "./poster/p (11).jpg";
import p12 from "./poster/p (12).jpg";
import p13 from "./poster/p (13).jpg";
import p14 from "./poster/p (14).jpg";
import p15 from "./poster/p (15).jpg";
import p16 from "./poster/p (16).jpg";
import p17 from "./poster/p (17).jpg";
import p18 from "./poster/p (18).jpg";
import p19 from "./poster/p (19).jpg";
import p20 from "./poster/p (20).jpg";
const MovieRow1 = () => {
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
            <h3 className='move_type'>Popular on Netflix</h3>
            <Carousel responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                className="movie_slider">
                <img src={p1} className="poster_img large_poster" draggable={false} />
                <img src={p2} className="poster_img large_poster" draggable={false} />
                <img src={p3} className="poster_img large_poster" draggable={false} />
                <img src={p4} className="poster_img large_poster" draggable={false} />
                <img src={p5} className="poster_img large_poster" draggable={false} />
                <img src={p6} className="poster_img large_poster" draggable={false} />
                <img src={p7} className="poster_img large_poster" draggable={false} />
                <img src={p8} className="poster_img large_poster" draggable={false} />
                <img src={p9} className="poster_img large_poster" draggable={false} />
                <img src={p10} className="poster_img large_poster" draggable={false} />
                <img src={p11} className="poster_img large_poster" draggable={false} />
                <img src={p12} className="poster_img large_poster" draggable={false} />
                <img src={p13} className="poster_img large_poster" draggable={false} />
                <img src={p14} className="poster_img large_poster" draggable={false} />
                <img src={p15} className="poster_img large_poster" draggable={false} />
                <img src={p16} className="poster_img large_poster" draggable={false} />
                <img src={p17} className="poster_img large_poster" draggable={false} />
                <img src={p18} className="poster_img large_poster" draggable={false} />
                <img src={p19} className="poster_img large_poster" draggable={false} />
                <img src={p20} className="poster_img large_poster" draggable={false} />
            </Carousel>

        </>
    );
}

export default MovieRow1;