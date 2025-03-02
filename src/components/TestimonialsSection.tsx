'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
    {
        text: "Massdriver is incredibly easy to use, and makes best practices for operations approachable even for novices.",
        author: "Zachary Hueras",
        position: "Principal Software Engineer",
        company: "AMD Global Telemedicine",
        logo: "/images/t1.png",
    },
    {
        text: "Massdriver is a must for small teams that don’t have resources for a dedicated DevOps team.",
        author: "Ivan Ivanov",
        position: "Head of Engineering",
        company: "GameStake Technologies",
        logo: "/images/t2.png",
    },
    {
        text: "We are partnering with innovative companies like Massdriver to help founders achieve more.",
        author: "Kirk Safford",
        position: "Director",
        company: "Microsoft for Startups",
        logo: "/images/t3.png",
    },
    {
        text: "Their proactive approach to user feedback ensures it remains an essential tool in our DevOps arsenal.",
        author: "Valeriy Tverdohleb",
        position: "CTO",
        company: "VP Tech",
        logo: "/images/t4.png",
    },
    {
        text: "Massdriver is a comprehensive platform engineering solution that combines ease of use with robust functionality.",
        author: "Minith Jain",
        position: "Founding Engineer",
        company: "Energos",
        logo: "/images/t5.png",
    },
    {
        text: "Massdriver is a great abstraction for teams moving away from PaaS but not ready for full IaaS.",
        author: "Elijah Kim",
        position: "Senior Software Engineer",
        company: "inVibe",
        logo: "/images/t6.png",
    },
    {
        text: "Best support I have ever seen for microservice-based cloud infrastructure.",
        author: "Kevin Kleber",
        position: "CTO",
        company: "Suind",
        logo: "/images/t7.png",
    },
    {
        text: "Massdriver has been essential in carrying us forward quickly into the most modern paradigm for managing cloud infrastructure.",
        author: "Jordan Ritter",
        position: "CEO",
        company: "Augment",
        logo: "/images/t8.png",
    },
    {
        text: "It’s incredible that I could put together a sophisticated release so quickly and easily.",
        author: "Lars Solberg",
        position: "CTO",
        company: "Immersive",
        logo: "/images/t9.png",
    },
    {
        text: "The employees of Massdriver are incredibly attentive and helpful. Great product with excellent support.",
        author: "Ben Rosand",
        position: "Founding Engineer",
        company: "Clarity",
        logo: "/images/t10.png",
    },
    {
        text: "With Massdriver, we replaced days of planning and debugging infrastructure with seamless Terraform integration.",
        author: "Bernie Conrad",
        position: "Lead Software Engineer",
        company: "Allthenticate",
        logo: "/images/t11.png",
    },
    {
        text: "The Massdriver team has always been responsive to our questions and ready to jump in.",
        author: "Joseph Sciarrino",
        position: "Co-founder & CEO",
        company: "Hydra",
        logo: "/images/t12.png",
    },
    {
        text: "Within hours of discovering Massdriver, we implemented what used to take months of tedious Terraform work.",
        author: "Josh Restivo",
        position: "Director of Architecture",
        company: "Zirrus",
        logo: "/images/t13.png",
    },
];


const featuredLogos = [
    '/images/fi1.svg',
    '/images/fi2.svg',
    '/images/fi3.svg',
    '/images/fi4.svg',
    '/images/fi5.png',
    '/images/fi6.png',
    '/images/fi7.png',
    '/images/fi8.svg',
    '/images/fi9.png',
    '/images/fi10.png'
];

export default function TestimonialsSection() {
    const [index, setIndex] = useState(0);

    const prevTestimonial = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const nextTestimonial = () => {
        setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="bg-[#0f2d3f] text-white py-16 px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Loved by DevOps and Software Engineers</h2>
            <div className="relative max-w-4xl mx-auto flex items-center">
                <button onClick={prevTestimonial} className="absolute left-0 p-3 text-white bg-gray-800 rounded-full hover:bg-gray-700">
                    <FaArrowLeft size={20} />
                </button>
                <div className="bg-[#113c4f] p-8 rounded-lg flex flex-col items-center text-center mx-12">
                    <p className="text-lg mb-4">{testimonials[index].text}</p>
                    <div className="flex items-center mt-4">
                        <div className="text-left">
                            <p className="font-bold">{testimonials[index].author}</p>
                            <p className="text-sm text-gray-300">{testimonials[index].position}</p>
                        </div>
                        <div className="ml-4">
                            <Image src={testimonials[index].logo} alt={testimonials[index].company} width={60} height={40} />
                        </div>
                    </div>
                </div>
                <button onClick={nextTestimonial} className="absolute right-0 p-3 text-white bg-gray-800 rounded-full hover:bg-gray-700">
                    <FaArrowRight size={20} />
                </button>
            </div>


            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold">Featured In</h3>
                <div className="flex flex-wrap justify-center gap-8 mt-6">
                    {featuredLogos.map((src, index) => (
                        <Image key={index} src={src} alt={`Logo ${index + 1}`} width={100} height={40} />
                    ))}
                </div>

                <div className="mt-8">
                    <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Read News →</a>
                </div>
            </div>
        </section>
    );
}
