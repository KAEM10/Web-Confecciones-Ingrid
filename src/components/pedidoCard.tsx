interface PedidoProps {
    pedido: {
        id: number;
        nombre_cliente: string;
        apellido_cliente: string;
        telefono: string;
        precioTotal: number;
        estado: string;
        descripcion: string;
        fecha_entrega: string;
        fecha_pedido: string;
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
        <div className={`${getEstadoColor(pedido.estado)} rounded-lg p-4 border-l-4`}>
            <h2 className="text-lg font-bold">{pedido.nombre_cliente} {pedido.apellido_cliente}</h2>
            <p className="text-lg font-semibold">Descripción: {pedido.descripcion}</p>
            <p className="text-sm text-gray-500">Precio Total: {pedido.precioTotal}</p>
            <p className="text-sm text-gray-500">Fecha de Entrega: {pedido.fecha_entrega}</p>
            {/* <p className="text-sm text-gray-500">Teléfono: {pedido.telefono}</p> */}
            {/* <p className="text-sm text-gray-500">Fecha de Pedido: {pedido.fecha_pedido}</p> */}
            <span className={`text-sm rounded-full ${getEstadoColor(pedido.estado)}`}>
                {pedido.estado}
            </span>
        </div>
    );

}
