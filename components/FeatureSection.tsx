import React from 'react';

const features = [
    {
        title: 'Restaurant',
        description: 'Enjoy a variety of culinary delights at our on-site restaurant, featuring a diverse menu that caters to all tastes.',
        imgSrc: 'images/svg/restaurant-svgrepo-com.svg'
    },
    {
        title: 'Swimming Pool',
        description: 'Relax and unwind in our luxurious swimming pool, perfect for a refreshing dip or lounging under the sun.',
        imgSrc: 'images/svg/swimming-pool-svgrepo-com.svg'
    },
    {
        title: 'Fitness Center',
        description: 'Stay fit and active with our state-of-the-art fitness center, equipped with the latest exercise machines.',
        imgSrc: 'images/svg/fitness-gym-svgrepo-com.svg'
    },
    {
        title: 'Spa & Massage',
        description: 'Pamper yourself with our spa and massage services, designed to provide ultimate relaxation and rejuvenation.',
        imgSrc: 'images/svg/flower-lotus-thin-svgrepo-com.svg'
    },
    {
        title: 'Meeting Room',
        description: 'Host your events in our well-equipped meeting rooms, perfect for conferences, seminars, and business meetings.',
        imgSrc: 'images/svg/meeting-explain-svgrepo-com.svg'
    },
    {
        title: 'Laundry Service',
        description: 'Take advantage of our convenient laundry services, ensuring your clothes are fresh and clean during your stay.',
        imgSrc: 'images/svg/laundry-machine-svgrepo-com.svg'
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="row g-4 relative z-2">
            {features.map((feature, index) => (
                <div className="col-lg-4 col-md-6 wow fadeInUp" key={index} data-wow-delay=".3s">
                    <div className="relative p-4 bg-white border-grey">
                        <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                            <img src={feature.imgSrc} className="w-100" alt="" />
                        </span>
                        <div className="pl-90">
                            <h4>{feature.title}</h4>
                            <p className="mb-0">{feature.description}</p>
                        </div>
                    </div>
                </div>

            ))}

        </div>
    );
};

export default FeaturesSection;
