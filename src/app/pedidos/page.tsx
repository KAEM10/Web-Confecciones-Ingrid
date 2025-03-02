"use client";
import { useEffect, useState } from "react";
import PedidoCard from "../../components/pedidoCard";
import { fetchPedidos } from "@/app/services/pedidoService";

interface Pedido {
    id: number;
    nombre_cliente: string;
    apellido_cliente: string;
    telefono: string;
    precioTotal: number;
    estado: string;
    descripcion: string;
    fecha_entrega: string;
    fecha_pedido: string;
}

export default function PedidosPage() {
    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    useEffect(() => {
        const cargarPedidos = async () => {
            const data = await fetchPedidos();
            setPedidos(data[0]);
        };
        cargarPedidos();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">📦 Pedidos Pendientes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                        <PedidoCard key={pedido.id} pedido={pedido} />
                    ))
                ) : (
                    <p>No hay pedidos pendientes.</p>
                )}
            </div>
        </div>
    );
}
