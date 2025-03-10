import axios from "axios";

export const fetchPedidos = async () => {
    try {
        const response = await axios.get("/server"); 
        return response.data;
    } catch (error) {
        console.error("Error al obtener pedidos:", error);
        return [];
    }
};
