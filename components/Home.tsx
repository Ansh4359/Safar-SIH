'use client'
import Image from 'next/image';
import Link from 'next/link';
import Slider from './Slider.Home';
import Reservation from "./Reservation";
import FeaturesSection from './FeatureSection';
const Home = () => {
    return (
        <>
            <div className="no-bottom no-top" id="content">

                <div id="top"></div>
                <Slider />




                <section className="relative lines-deco">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 sm-hide">
                                <div className="relative wow fadeInUp" data-wow-delay=".3s">
                                    <div className="abs top-0 w-100">
                                        <div className="shape-mask-1 jarallax">
                                            <img src="images/misc/a.jpg" className="jarallax-img" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 text-center">
                                <div className="wow scaleIn">
                                    <div className="subtitle id-color mb-3">Welcome To Safar</div>
                                    <h2 className="wow fadeInUp">Experience India’s Rich Culture with Safar's Hospitality</h2>

                                    <div className="text-center wow fadeInUp" data-wow-delay=".5s">
                                        <h4 className="fw-bold mb-1">4.9 out of 5</h4>
                                        <div className="de-rating-ext fs-18">
                                            <span className="d-stars">
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                            </span>
                                        </div>
                                        <span className="d-block fs-14 mb-0">Based on 25000+ reviews</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 sm-hide">
                                <div className="relative wow fadeInUp" data-wow-delay=".3s">
                                    <div className="abs top-0 w-100">
                                        <div className="shape-mask-1 jarallax">
                                            <img src="images/misc/b.jpg" className="jarallax-img" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="spacer-double"></div>

                        <FeaturesSection />
                    </div>

                </section>

                <section className="jarallax relative overflow-hidden text-light section-dark">
                    <div className="abs abs-centered w-30">
                        <div className="box-slider-decor"></div>
                    </div>
                    <img src="images/background/bg.jpg" className="jarallax-img" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="owl-single-dots owl-carousel owl-theme">
                                    <div className="item">
                                        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                        <h3 className="mb-4 wow fadeInUp fs-36">Your journey, our guarantee: Authentic experiences, free from fraud.</h3>
                                        
                                    </div>

                                    <div className="item">
                                        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                        <h3 className="mb-4 wow fadeInUp fs-36">Travel with confidence; we ensure every destination is as genuine as your sense of adventure.</h3>
                                     
                                    </div>

                                    <div className="item">
                                        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                        <h3 className="mb-4 wow fadeInUp fs-36">Explore the world with peace of mind; our commitment is to integrity and genuine travel.</h3>
                                   
                                    </div>

                                    <div className="item">
                                        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                                        <h3 className="mb-4 wow fadeInUp fs-36">Discover destinations you can trust; where every promise is delivered and every experience is real.</h3>
                                        {/* <span className="wow fadeInUp">Donette Fondren</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative bg-light lines-deco">
                    <div className="container-fluid relative z-2">
                        <div className="row g-4">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="subtitle id-color wow fadeInUp mb-3">Elegant</div>
                                <h2 className="wow fadeInUp">Accomodation</h2>
                            </div>

                            <div className="col-lg-12">
                                <div className="owl-custom-nav menu-float px-5" data-target="#room-carousel">
                                    <a className="btn-next"></a>
                                    <a className="btn-prev"></a>

                                    <div id="room-carousel" className="owl-3-cols owl-carousel owl-theme">
                                        {/* <!-- room begin --> */}
                                        <div className="item">
                                            <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay=".3s">
                                                <img src="images/room/1.webp" className="w-100 rounded-up-100" alt="" />
                                                <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                                                    <div className="fs-14">From</div>
                                                    <h3 className="fs-40 lh-1 mb-4">$129</h3>
                                                    <a className="btn-line" href="room-single.html">View Details</a>
                                                </div>
                                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                                    <h3 className="mb-0">Standard Room</h3>
                                                    <div className="text-center fs-14">
                                                        <span className="mx-2">
                                                            2 Guests
                                                        </span>
                                                        <span className="mx-2">
                                                            30 ft
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                                            </div>
                                        </div>
                                        {/* <!-- room end --> */}

                                        {/* <!-- room begin --> */}
                                        <div className="item">
                                            <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay=".4s">
                                                <img src="images/room/2.webp" className="w-100 rounded-up-100" alt="" />
                                                <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                                                    <div className="fs-14">From</div>
                                                    <h3 className="fs-40 lh-1 mb-4">₹1290</h3>
                                                    <a className="btn-line" href="room-single.html">View Details</a>
                                                </div>
                                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                                    <h3 className="mb-0">Deluxe Room</h3>
                                                    <div className="text-center fs-14">
                                                        <span className="mx-2">
                                                            2 Guests
                                                        </span>
                                                        <span className="mx-2">
                                                            35 ft
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                                            </div>
                                        </div>
                                        {/* <!-- room end --> */}

                                        {/* <!-- room begin --> */}
                                        <div className="item">
                                            <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay=".5s">
                                                <img src="images/room/3.webp" className="w-100 rounded-up-100" alt="" />
                                                <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                                                    <div className="fs-14">From</div>
                                                    <h3 className="fs-40 lh-1 mb-4">₹1390</h3>
                                                    <a className="btn-line" href="room-single.html">View Details</a>
                                                </div>
                                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                                    <h3 className="mb-0">Premier Room</h3>
                                                    <div className="text-center fs-14">
                                                        <span className="mx-2">
                                                            2 Guests
                                                        </span>
                                                        <span className="mx-2">
                                                            35 ft
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                                            </div>
                                        </div>
                                        {/* <!-- room end --> */}

                                        {/* <!-- room begin --> */}
                                        <div className="item">
                                            <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay=".7s">
                                                <img src="images/room/4.webp" className="w-100 rounded-up-100" alt="" />
                                                <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                                                    <div className="fs-14">From</div>
                                                    <h3 className="fs-40 lh-1 mb-4">₹1490</h3>
                                                    <a className="btn-line" href="room-single.html">View Details</a>
                                                </div>
                                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                                    <h3 className="mb-0">Family Suite</h3>
                                                    <div className="text-center fs-14">
                                                        <span className="mx-2">
                                                            4 Guests
                                                        </span>
                                                        <span className="mx-2">
                                                            60 ft
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                                            </div>
                                        </div>
                                        {/* <!-- room end --> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative lines-deco">
                    <div className="container relative z-2">
                        <div className="row g-4">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="subtitle id-color wow fadeInUp mb-3">Hotel &amp; Cuisines</div>
                                <h2 className="wow fadeInUp">Our Facilites</h2>
                            </div>
                            <div className="col-md-6">
                                <div className="relative">
                                    <img src="images/misc/7.webp" className="img-fluid wow fadeInUp" alt="" />
                                    <div className="bg-color text-light p-4 start-10 mx-4  mt-70 wow fadeInDown" data-wow-delay="">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-5 text-center">
                                                <div className="de_count fs-15 wow fadeInRight" data-wow-delay=".2s">
                                                    <h3 className="fs-60"><span className="timer fs-60" data-to="120" data-speed="3000">0</span>+</h3>
                                                    Rooms Available
                                                </div>
                                            </div>

                                            <div className="col-lg-7">
                                                <p className="no-bottom">Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea velit deserunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="relative">
                                    <img src="images/misc/8.webp" className="img-fluid wow fadeInUp" alt="" />
                                    <div className="bg-color text-light p-4 start-10 mx-4  mt-70 wow fadeInDown" data-wow-delay="">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-5 text-center">
                                                <div className="de_count fs-15 wow fadeInRight" data-wow-delay=".2s">
                                                    <h3 className="fs-60"><span className="timer fs-60" data-to="105" data-speed="3000">0</span>+</h3>
                                                    Menu Selection
                                                </div>
                                            </div>

                                            <div className="col-lg-7">
                                                <p className="no-bottom">Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea velit deserunt.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spacer-single"></div>

                </section>



            </div>
        </>
    );
};
export default Home
