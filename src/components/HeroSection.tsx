export default function HeroSection() {
    return (
        <section className="text-center py-20 bg-gradient-to-b from-white to-blue-50">
            <h1 className="text-4xl font-bold text-gray-900">DevOps Without the Red Tape</h1>
            <p className="mt-2 text-lg text-gray-600">
                At Massdriver, we believe in prevention, not permission.
            </p>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Our platform lets <a href="#" className="text-blue-600 underline">"ops"</a> teams encode their expertise and your organization’s 
                non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know.
            </p>
            <p className="mt-4 text-gray-600">Massdriver—Fast by default. Safe by design.</p>
            <div className="mt-6 space-x-4">
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">See a demo</button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded">Start free trial →</button>
            </div>
        </section>
    );
}
