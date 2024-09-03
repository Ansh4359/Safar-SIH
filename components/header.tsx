'use client';
import { useEffect } from 'react';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

const Header = () => {

    //const { data: session, status } = useSession();
   
        const { data: session, status } = useSession(); // Get session and authentication status
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          if (status !== 'loading') {
            setIsLoading(false);
          }
        }, [status]);
      
        if (isLoading) {
          return <div>Loading...</div>; // Optional: A loading state while checking authentication
        }

    return (
        <header className="transparent has-topbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                {/* Logo Begin */}
                                <div id="logo">
                                    <Link href="/">
                                        <Image className="logo-main" src="/images/safar.png" alt="" width={100} height={50} />
                                        <Image className="logo-scroll" src="/images/logo-black.webp" alt="" width={100} height={50} />
                                        <Image className="logo-mobile" src="/images/logo-white.webp" alt="" width={100} height={50} />
                                    </Link>
                                </div>
                                {/* Logo Close */}
                            </div>
                            <div className="de-flex-col header-col-mid" style={{margin : "center"}}>
                                <ul id="mainmenu">
                                    <li>
                                        <Link href="http://localhost:3000/" className="menu-item">Home</Link>

                                    </li>
                                    <li>
                                        <Link href="/rooms" className="menu-item">Hotels</Link>
                                        <ul className="mega">
                                            <li>
                                                <div className="container">
                                                    <div className="sb-menu p-4">
                                                        <div className="row g-3">
                                                            <div className="col-lg-3">
                                                                <h4>Hotels</h4>
                                                                <ul className="no-bg">
                                                                    <li><Link href="/rooms">All Hotels</Link></li>
                                                                    <li><Link href="/rooms-style-2">Indore</Link></li>
                                                                    <li><Link href="/rooms-style-3">Delhi</Link></li>
                                                                    <li><Link href="/room-single">Mumbai</Link></li>
                                                                    <li><Link href="/room-single-style-2">Chennai</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3 text-center">
                                                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-5px">
                                                                    <Link href="/room-single">
                                                                        <div className="d-label">Best Seller</div>
                                                                        <Image src="/images/form/2.jpg" className="w-100 relative hover-scale-1-1" alt="" width={200} height={150} />
                                                                    </Link>
                                                                    <div className="abs w-100 h-100 start-0 top-0 hover-bg-color"></div>
                                                                </div>
                                                                <h5 className="mt-3 mb-1">Deluxe Room</h5>
                                                            </div>
                                                            {/* Repeat similar structure for other columns */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    {!session ? (
                                        <li>
                                           
                                        </li>
                                    ) : (
                                        <li>
                                            <Link href="/registration" className="menu-item">
                                                Reservation
                                            </Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link href="#" className="menu-item">Pages</Link>
                                        <ul>
                                            <li><Link href="#">Culture</Link></li>
                                            <li><Link href="/#">Food</Link></li>
                                            <li><Link href="#">Places</Link></li>
                                            <li><Link href="/gallery">Gallery</Link></li>
                                            <li><Link href="/#">Monument</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/news" className="menu-item">News</Link></li>
                                    <li><Link href="/contact" className="menu-item">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                            <div className="menu_side_area">
      <Link href="/registration" className="btn-main btn-line " style={{margin: "10px"}}>Reservation</Link>
      {!session ? (
        <Link href="/login" className="btn-main btn-line ">Login</Link>
      ) : (
        <button className="btn-main btn-line" onClick={() => signOut()}>Logout</button>
      )}
      <span id="menu-btn"></span>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </header >
    );
};

export default Header;
