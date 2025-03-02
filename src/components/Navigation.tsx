export default function Navigation() {
    return (
        <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md">
            <div className="font-bold text-xl">massdriver</div>
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
                <a href="#" className="text-sm">Sign In</a>
                <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded">Try Free →</button>
            </div>
        </nav>
    );
}
