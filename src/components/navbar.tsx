import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">📦 Gestión de Pedidos</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-400">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/pedidos" className="hover:text-gray-400">Pedidos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
