import { useEffect } from 'react';
import Swiper from 'swiper';
//import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

const SwiperSection: React.FC = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // Swiper settings
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        return () => {
            swiper.destroy(); // Clean up swiper instance on component unmount
        };
    }, []);

    return (
        <section className="section-dark text-light no-top no-bottom position-relative overflow-hidden z-1000">
            <div className="v-center">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {/* First Slide with Video Background */}
                        <div className="swiper-slide">
                            <div className="swiper-inner" style={{ position: 'relative' }}>
                                <video
                                    className="swiper-video-background"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: '-1',
                                    }}
                                >
                                    <source src="http://localhost:3000/videos/background22.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="sw-caption z-1000">
                                    <div className="container">
                                        <div className="row g-4 align-items-center">
                                            <div className="spacer-double"></div>
                                            <div className="col-lg-8 offset-lg-2 text-center">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="slider-extra mb-3">
                                                        <span className="d-stars">
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                        </span>
                                                    </div>
                                                    <h1 className="slider-title mb-4">Where Festivals Turn Into Grand Celebrations</h1>
                                                    <p className="col-lg-8 offset-lg-2 slider-teaser px-4 mb-0">
                                                    Experience the soul through vibrant streets, where every corner offers a glimpse into the lively culture and rich heritage that define the local spirit.
                                                    </p>
                                                    <div className="spacer-30"></div>
                                                    <a className="btn-main mb10 mb-3" href="https://www.festivalsofindia.in/" target='_blank'>Explore More</a>
                                                </div>
                                            </div>
                                            <div className="spacer-single"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Retain the gate outline */}
                                <div className="abs abs-centered w-40">
                                    {/* <div className="box-slider-decor"></div> */}
                                </div>
                                {/* Removed the overlay to prevent blur */}
                                {/* <div className="sw-overlay"></div> */}
                            </div>
                        </div>

                        {/* Second Slide with Video Background */}
                        <div className="swiper-slide">
                            <div className="swiper-inner" style={{ position: 'relative' }}>
                                <video
                                    className="swiper-video-background"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: '-1',
                                    }}
                                >
                                    <source src="http://localhost:3000/videos/background21.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="sw-caption z-1000">
                                    <div className="container">
                                        <div className="row g-4 align-items-center">
                                            <div className="spacer-double"></div>
                                            <div className="col-lg-8 offset-lg-2 text-center">
                                                <div className="spacer-single"></div>
                                                <div className="sw-text-wrapper">
                                                    <div className="slider-extra mb-3">
                                                        <span className="d-stars">
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                            <i className="icofont-star"></i>
                                                        </span>
                                                    </div>
                                                    <h1 className="slider-title mb-4">Explore Destination Beyond Imagination</h1>
                                                    <p className="col-lg-8 offset-lg-2 slider-teaser px-4 mb-0">
                                                    Experience the timeless beauty of India, where ancient traditions meet vibrant cultures. From the majestic Himalayas to the golden sands of Rajasthan, every corner tells a story.
                                                    </p>
                                                    <div className="spacer-30"></div>
                                                    <a className="btn-main mb10 mb-3" href="https://www.incredibleindia.org/content/incredible-india-v2/en.html" target='_blank'>Explore India</a>
                                                </div>
                                            </div>
                                            <div className="spacer-single"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Retain the gate outline */}
                                <div className="abs abs-centered w-40">
                                    <div className="box-slider-decor"></div>
                                </div>
                                {/* Overlay kept for the second slide */}
                                <div className="sw-overlay op-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </section>
    );
};

export default SwiperSection;
