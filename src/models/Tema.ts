import Postagem from "./Postagem";

export default interface Tema {
    id: number;
    descricao: string;
    postagem?: Postagem | null;
}