export default function QuestionsSection() {
    return (
        <section className="bg-gray-100 py-16 text-center">
            <div className="bg-blue-800 text-white py-2 text-sm">
                Need help persuading your manager?
            </div>
            <h2 className="text-3xl font-semibold mt-6">Still have questions?</h2>
            <p className="mt-2 text-gray-600">Check out our <a href="#" className="text-blue-600 underline">FAQs</a> or ping us directly in our community Slack</p>
            <div className="flex justify-center items-center gap-6 mt-6">
                <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
                    View the FAQ →
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition">
                    <img src="/images/slack-logo.svg" alt="Slack Logo" className="w-6 h-6" />
                    Join us on Slack
                </a>
            </div>
        </section>
    );
}
