import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Room {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
    guests: number;
    size: string;
    delay: string;
}

const hotels: Room[] = [
    {
        id: 1,
        imageUrl: '/images/room/1.webp',
        price: 1290,
        name: 'Manali',
        guests: 2,
        size: '30 ft',
        delay: '.3s',
    },
    {
        id: 2,
        imageUrl: '/images/room/2.webp',
        price: 1290,
        name: 'Shimla',
        guests: 2,
        size: '35 ft',
        delay: '.4s',
    },
    {
        id: 3,
        imageUrl: '/images/room/3.webp',
        price: 1390,
        name: 'Darjeeling',
        guests: 2,
        size: '35 ft',
        delay: '.5s',
    },
    {
        id: 4,
        imageUrl: '/images/room/4.webp',
        price: 1490,
        name: 'Ooty',
        guests: 4,
        size: '60 ft',
        delay: '.7s',
    },
    {
        id: 5,
        imageUrl: '/images/room/5.webp',
        price: 1790,
        name: 'Munnar',
        guests: 4,
        size: '70 ft',
        delay: '.9s',
    },
    {
        id: 6,
        imageUrl: '/images/room/6.webp',
        price: 1990,
        name: 'Nainital',
        guests: 2,
        size: '90 ft',
        delay: '1.1s',
    },
];

const hotelsSection: FC = () => {
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>

            <section id="subheader" className="relative jarallax text-light">
                <Image src="/images/background/1.webp" alt="Background Image" layout="fill" objectFit="cover" />
                <div className="container relative z-index-1000">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h1>Our Hotels</h1>
                            <p className="mt-3 lead">
                                Indulge in the ultimate blend of elegance and comfort in our meticulously designed hotels. Choose your room today.
                            </p>
                            <ul className="crumb">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="active">Our Hotels</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="de-overlay"></div>
            </section>

            <section className="relative lines-deco">
                <div className="container">
                    <div className="row g-4">
                        {hotels.map((room) => (
                            <div key={room.id} className="col-lg-4 col-sm-6">
                                <div className="hover relative text-light text-center wow fadeInUp" style={{ animationDelay: room.delay }}>
                                    <Image src={room.imageUrl} className="img-fluid" alt={room.name} layout="responsive" width={500} height={300} />
                                    <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                                        <div className="fs-14">From</div>
                                        <h3 className="fs-40 lh-1 mb-4">₹{room.price}</h3>
                                        <Link href="/room-single">
                                            View Details
                                        </Link>
                                    </div>
                                    <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                    <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                        <h3 className="mb-0">{room.name}</h3>
                                        <div className="text-center fs-14">
                                            <span className="mx-2">{room.guests} Guests</span>
                                            <span className="mx-2">{room.size}</span>
                                        </div>
                                    </div>
                                    <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default hotelsSection;
