interface PedidoProps {
    pedido: {
        id: number;
        descripcion: string;
        cantidad: number;
        fecha_entrega: string;
        estado: string;
    };
}

export default function PedidoCard({ pedido }: PedidoProps) {
    const getEstadoColor = (estado: string) => {
        switch (estado) {
            case "PENDIENTE":
                return "bg-yellow-300 text-yellow-900";
            case "EN_PROCESO":
                return "bg-blue-300 text-blue-900";
            case "REALIZADO":
                return "bg-green-300 text-green-900";
            case "ENTREGADO":
                return "bg-gray-300 text-gray-900";
            default:
                return "bg-gray-200";
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4">
            <h2 className="text-lg font-semibold">{pedido.descripcion}</h2>
            <p>Cantidad: {pedido.cantidad}</p>
            <p>Entrega: {new Date(pedido.fecha_entrega).toLocaleDateString()}</p>
            <span className={`inline-block px-3 py-1 mt-2 text-sm rounded-full ${getEstadoColor(pedido.estado)}`}>
                {pedido.estado}
            </span>
        </div>
    );
}
