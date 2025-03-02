import Image from 'next/image';

export default function Navigation() {
    return (
        <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md">
            <a href="/" className="flex items-center space-x-2">
                <Image src="/images/massdriver-logomark.svg" alt="Massdriver Logo" width={160} height={40} /></a>
            <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">Docs</a></li>
                <li><a href="#" className="hover:text-blue-600">Templates</a></li>
                <li><a href="#" className="hover:text-blue-600">Community</a></li>
            </ul>
            <div className="flex space-x-4">
                <a href="#" className="text-sm flex items-center">Sign In</a>
                <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition"> Start Free → </button>
            </div>
        </nav>
    );
}
