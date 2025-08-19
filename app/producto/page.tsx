import { GetProductsAll } from "@/data/ProductoData";
import Link from "next/link";

export default async function ProductoPage() {

    const productos = await GetProductsAll();
  return (
    <div>
        <table className="table-auto">
            <thead>
                <tr>
                    <th className="p-2 border-b border-blue-200 bg-blue-50">Id</th>
                    <th className="p-2 border-b border-blue-200 bg-blue-50">Title</th>
                    <th className="p-2 border-b border-blue-200 bg-blue-50"></th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => (
                    <tr key={producto.id}>
                        <td className="p-2">{producto.id}</td>
                        <td className="p-2">{producto.title}</td>
                        <td className="p-2 font-black">
                            <Link href={`/producto/${producto.id}`}>Ver detalles</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}