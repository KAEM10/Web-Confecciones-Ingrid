"use client";

import { useEffect, useState } from "react";

interface Pedido {
    id: number;
    descripcion: string;
    cantidad: number;
    fecha_entrega: string;
    estado: "PENDIENTE" | "EN_PROCESO" | "REALIZADO" | "ENTREGADO";
}

export default function Home() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    useEffect(() => {
        fetch("/api/pedidos")
            .then((res) => res.json())
            .then((data) => setPedidos(data));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📦 Pedidos a Entregar Hoy</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                        <div key={pedido.id} className="bg-white shadow-md rounded-lg p-4 border-l-4 
                            border-blue-500">
                            <h2 className="text-lg font-semibold">{pedido.descripcion}</h2>
                            <p className="text-gray-600">Cantidad: {pedido.cantidad}</p>
                            <p className="text-gray-600">Entrega: {new Date(pedido.fecha_entrega).toLocaleDateString()}</p>
                            <span 
                                className={`inline-block px-3 py-1 mt-2 text-sm font-medium rounded-full 
                                ${
                                    pedido.estado === "PENDIENTE" ? "bg-yellow-200 text-yellow-800" :
                                    pedido.estado === "EN_PROCESO" ? "bg-blue-200 text-blue-800" :
                                    pedido.estado === "REALIZADO" ? "bg-green-200 text-green-800" :
                                    "bg-gray-200 text-gray-800"
                                }`}
                            >
                                {pedido.estado}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No hay pedidos para hoy.</p>
                )}
            </div>
        </div>
    );
}
