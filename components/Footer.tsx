import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-light bg-dark pt-5 pb-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-4 text-center text-md-start">
                        <h3 className="fs-20">Address</h3>
                        <p>Knowledge Park - II, Greater Noida<br /> Uttar Pradesh</p>
                    </div>
                    <div className="col-md-4 text-center">
                    <div className='flex justify-center'>
                        <Image src="/images/safar.png" width={200} height={50} alt="Safar Logo" />
                        </div>
                        <div className="social-icons mt-4">
                            <Link href="https://facebook.com"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="https://instagram.com"><i className="fab fa-instagram"></i></Link>
                            <Link href="https://twitter.com"><i className="fab fa-twitter"></i></Link>
                            <Link href="https://youtube.com"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <h3 className="fs-20">Contact Us</h3>
                        <p>Telephone : +91 999999999<br />Contact  : contact@safar.com</p>
                    </div>
                </div>
            </div>
            <div className="subfooter bg-secondary mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>@Copyright 2024 - Safar</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
