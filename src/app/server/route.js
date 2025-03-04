import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    const pedidos = await db.query("SELECT * FROM pedidos");
    //console.log("Pedidos recibidos:", pedidos);
    return NextResponse.json(pedidos);
}

export async function POST(req) {
    try {
        const { usuario_id, descripcion, cantidad, fecha_entrega, estado } = await req.json();
        const [result] = await pool.query(
            "INSERT INTO pedidos (usuario_id, descripcion, cantidad, fecha_entrega, estado) VALUES (?, ?, ?, ?, ?)",
            [usuario_id, descripcion, cantidad, fecha_entrega, estado]
        );
        return NextResponse.json({ id: result.insertId, usuario_id, descripcion, cantidad, fecha_entrega, estado });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { descripcion, cantidad, fecha_entrega, estado } = await req.json();
        await pool.query(
            "UPDATE pedidos SET descripcion = ?, cantidad = ?, fecha_entrega = ?, estado = ? WHERE id = ?",
            [descripcion, cantidad, fecha_entrega, estado, params.id]
        );
        return NextResponse.json({ message: "Pedido actualizado" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await pool.query("DELETE FROM pedidos WHERE id = ?", [params.id]);
        return NextResponse.json({ message: "Pedido eliminado" });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
