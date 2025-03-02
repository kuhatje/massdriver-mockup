'use client';
import { useState } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        label: 'Code',  // NEW FIELD
        title: 'Ops Teams Write IaC',
        description: (
            <>
                DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu,
                Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.
                <br />
                <br />
                <strong>
                    Your IaC is no longer just config, it’s a functional software asset. Policy and cost tools are
                    embedded, cutting down maintenance for Ops teams.
                </strong>
            </>
        ),
        image: '/images/code.webp',
    },
    {
        id: 2,
        label: 'Publish',  // NEW FIELD
        title: 'Ops Teams Publish Modules',
        description: (
            <>
                Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover
                supported cloud services and applications with your organization’s compliance, security, and guardrails
                in place.
                <br />
                <br />
                <strong>
                    A central repository for provisioning, policy, and cost controls of your cloud resources.
                </strong>
            </>
        ),
        image: '/images/publish.webp',
    },
    {
        id: 3,
        label: 'Diagram',  // NEW FIELD
        title: 'Devs Diagram to Provision',
        description: (
            <>
                Developers diagram what they want and your IaC modules are used to provision. Developers don’t have to
                copy Helm Charts or Terraform Modules. They don’t have brittle IaC pipelines. Instead, Massdriver uses
                your modules to provision and builds ephemeral CI/CD pipelines behind the scenes based on the tooling{' '}
                <em>in</em> your modules.
                <br />
                <br />
                <strong>Say goodbye to 100’s of brittle IaC pipelines.</strong>
            </>
        ),
        image: '/images/diagram.webp',
    },
];

export default function HowItWorksSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <section className="bg-[#0f2d3f] text-white py-16">
            <h2 className="text-3xl font-bold text-center mb-8">How it Works</h2>
            <div className="flex justify-center space-x-8 mb-6">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={`text-lg ${currentSlide === index ? 'font-bold text-white' : 'text-gray-400'}`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        {slide.id}. {slide.label}
                    </button>
                ))}
            </div>

            <div className="max-w-6xl mx-auto bg-[#113c4f] p-8 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">{slides[currentSlide].title}</h3>
                    <p className="text-gray-300 leading-relaxed">{slides[currentSlide].description}</p>
                </div>
                <div className="md:w-1/2">
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        width={600}
                        height={400}
                        className="rounded shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
