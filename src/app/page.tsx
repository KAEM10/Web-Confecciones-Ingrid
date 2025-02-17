"use client";
import { useEffect, useState } from "react";
import PedidoCard from "../components/pedidoCard";

interface Pedido {
    id: number;
    descripcion: string;
    cantidad: number;
    fecha_entrega: string;
    estado: string;
}

export default function Home() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    useEffect(() => {
        fetch("/api/pedidos")
            .then((res) => res.json())
            .then((data) => {
                setPedidos(data);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📦 Pedidos Pendientes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pedidos.length > 0 ? (
                    pedidos.map((pedido, index) => (
                        <PedidoCard key={`${pedido.id}-${index}`} pedido={pedido} />
                    ))
                ) : (
                    <p>No hay pedidos pendientes.</p>
                )}
            </div>
        </div>
    );
}
