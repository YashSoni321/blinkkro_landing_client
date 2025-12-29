"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustRegistrations = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const registrations = [
        {
            name: "MSME Registered",
            image: "/images/trust/msme_logo1.png",
            alt: "Ministry of Micro, Small & Medium Enterprises",
        },
        {
            name: "MCA Registered",
            image: "/images/trust/mca_1.png",
            alt: "Ministry of Corporate Affairs",
        },
        {
            name: "Startup India",
            image: "/images/trust/startup_india_1.png",
            alt: "Startup India Recognized",
        },
        {
            name: "Digital India",
            image: "/images/trust/digital-india-logo.png",
            alt: "Digital India Initiative",
        },
    ];

    return (
        <section className="py-12 bg-white dark:bg-black/5 border-b border-gray-100/50 dark:border-gray-800/50">
            <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-12">
                Trusted Verification ✨
            </h2>

            <div className="container mx-auto px-4">
                {/* <div className="text-center mb-10">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
                        Trusted Verification
                    </span>
                    <h3 className="mt-4 text-xl md:text-2xl font-bold text-dark dark:text-white">
                        Recognized & Registered With
                    </h3>
                </div> */}



                <div className="max-w-6xl mx-auto mt-4">
                    <Slider {...settings}>
                        {registrations.map((item, index) => (
                            <div key={index} className="px-4 outline-none">
                                <div className="group flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/5">
                                    <div className="relative w-full h-20 sm:h-24 max-w-[180px] transition-transform duration-300 group-hover:scale-110">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-4 text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TrustRegistrations;
