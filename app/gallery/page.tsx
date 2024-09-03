import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Gallery: FC = () => {
  const galleryItems = [
    
    { src: '/images/gallery/culture.jpg', alt: 'Gallery Image 1' },
    { src: '/images/gallery/food.jpg', alt: 'Gallery Image 2' },
    { src: '/images/gallery/desert.jpg', alt: 'Gallery Image 3' },
    { src: '/images/gallery/monument.jpg', alt: 'Gallery Image 4' },
    { src: '/images/gallery/monument2.jpg', alt: 'Gallery Image 5' },
    { src: '/images/gallery/monument3.jpg', alt: 'Gallery Image 6' },
    { src: '/images/gallery/desert1.jpg', alt: 'Gallery Image 3' },
    { src: '/images/gallery/monument4.jpg', alt: 'Gallery Image 4' },
    { src: '/images/gallery/food2.jpg', alt: 'Gallery Image 5' },

 
  ];

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section id="subheader" className="relative jarallax text-light">
        <Image
          src="/images/background/banner.jpg"
          className="jarallax-img"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div className="container relative z-index-1000">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h1>Gallery</h1>
              <ul className="crumb">
                <li><Link href="/">Home</Link></li>
                <li className="active">Gallery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="de-overlay"></div>
      </section>

      <section className="relative lines-deco">
        <div className="container">
          <div className="row g-4">
            {galleryItems.map((item, index) => (
              <GalleryItem key={index} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: FC<GalleryItemProps> = ({ src, alt }) => (
  <div className="col-lg-4 text-center">
    <a href={src} className="image-popup d-block hover">
      <div className="relative overflow-hidden rounded-10">
        <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
          <h4 className="mb-0 hover-scale-in-3">View</h4>
        </div>
        <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
        <Image
          src={src}
          alt={alt}
          className="img-fluid hover-scale-1-2"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>
    </a>
  </div>
);

export default Gallery;