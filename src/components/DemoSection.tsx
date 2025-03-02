export default function DemoVideoSection() {
    return (
        <section className="bg-gray-100 py-16 text-center">
            <h2 className="text-3xl font-semibold mb-4">
                Deliver On-Demand, Self-Service of <br /> Standardized Infrastructure
            </h2>

            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-3xl">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube-nocookie.com/embed/yxAPMfGR0jE?si=ZOkYoUX-9eayv1BL"
                            title="Massdriver Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            <div>
                <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    See a demo →
                </a>
            </div>
        </section>
    );
}
