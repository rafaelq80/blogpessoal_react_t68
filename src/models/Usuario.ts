import Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string
    postagem?: Postagem | null;
}