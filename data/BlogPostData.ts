import { BlogPostType } from "../types/BlogPostType";

const posts: BlogPostType[]= [
    {
        id: "1",
        titulo :"Entendiendo NextJS",
        contenido:"Estrategias de Renderizado"
    },
    {
        id: "2",
        titulo :"Optimizando el desemepeño NextJS",
        contenido:"Mejras practicas de desarrollo..."
    }
];

export function getBlogPosts(){
    return posts;
}

export function getBlogPostId(id: string){
    const post = posts.find(p =>  p.id === id)
    return post; 
}