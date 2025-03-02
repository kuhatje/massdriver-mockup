import Image from 'next/image';
import { useState } from 'react';

export default function SeeWhatsPossibleSection() {
    const cloudCertifiedLogos = [
        { src: '/images/cc1.png', alt: 'Cloud Certified' },
        { src: '/images/cc2.png', alt: 'AWS Partner' },
        { src: '/images/cc3.svg', alt: 'Microsoft for Startups Founders Hub' },
    ];

    const vcBackedLogos = [
        { src: '/images/vb1.png', alt: 'Y Combinator' },
        { src: '/images/vb2.png', alt: 'Builders VC' },
        { src: '/images/vb3.png', alt: '1984 VC' },
    ];

    const [showModal, setShowModal] = useState(false);

    return (
        <section className="bg-gradient-to-b from-white to-[#f0f8ff] py-16 text-center">
            <h2 className="text-3xl font-semibold mb-8">
                See What&apos;s Possible with Massdriver&apos;s IaC-Powered Platform
            </h2>

            {/* Thumbnail with Play Button */}
            <div className="relative flex justify-center mb-12 cursor-pointer" onClick={() => setShowModal(true)}>
                <Image
                    src="/images/thumbnail1.png"
                    alt="Massdriver Video Thumbnail"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-lg"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/images/play-button.svg"
                        alt="Play Button"
                        width={80}
                        height={80}
                        className="drop-shadow-lg"
                    />
                </div>
            </div>

            {/*YouTube Embed */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl aspect-video">
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>
                        
                        <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube-nocookie.com/embed/yxAPMfGR0jE?si=ZOkYoUX-9eayv1BL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                    </div>
                </div>
            )}

            {/* Certification and Logos */}
            <div className="flex justify-center items-start gap-12 mt-12">
                {/* Cloud Certified */}
                <div className="text-center">
                    <div className="text-gray-500 text-sm mb-4">CLOUD CERTIFIED</div>
                    <div className="flex justify-center gap-6">
                        {cloudCertifiedLogos.map((logo) => (
                            <Image
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={100}
                                className="h-12 object-contain"
                            />
                        ))}
                    </div>
                </div>

                {/* VC Backed */}
                <div className="text-center">
                    <div className="text-gray-500 text-sm mb-4">VC BACKED</div>
                    <div className="flex justify-center gap-6">
                        {vcBackedLogos.map((logo) => (
                            <Image
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={100}
                                className="h-12 object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
