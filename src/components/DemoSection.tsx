export default function DemoVideoSection() {
    return (
        <section className="bg-gray-100 py-16 text-center">
        
            <div className="w-full max-w-4xl mx-auto text-center py-16">
                <h2 className="text-3xl font-bold mb-6">Deliver On-Demand, Self-Service of Standardized Infrastructure</h2>
                <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/yxAPMfGR0jE?si=ZOkYoUX-9eayv1BL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">See a demo →</button>
            </div>
        </section>
    );
}
