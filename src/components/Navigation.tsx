export default function Navigation() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow">
            <div className="font-bold text-xl">Massdriver</div>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-500">Product</a></li>
                <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
        </nav>
    );
}