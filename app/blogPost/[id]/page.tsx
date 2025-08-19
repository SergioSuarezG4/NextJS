import { notFound } from "next/navigation";
import { getBlogPostId } from "../../../data/BlogPostData";
import Link from "next/link";

interface Params {
    params: Promise<{
        id:string;
    }>
} 
export default async function BlogPostIdPage({params}: Params) {
    const paramsValues = await params;
    const id = paramsValues.id;
    const post = getBlogPostId(id);
    if(!post) return notFound();
  return (
    <div>
        <h1 className="text-center text-3xl">Post Detalle</h1>
        <h1 className="text-2xl ml-2">
            <p className="font-bold"> Titulo:</p>
            {post.titulo}
        </h1>
        <h1 className="text-2xl ml-2">
            <p className="font-bold"> Contenido:</p>
            {post.contenido}
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-2 rounded-2xl px-4 py-2">
            <Link href="/blogPost">Regresar</Link>
        </button>
    </div>
  );
}