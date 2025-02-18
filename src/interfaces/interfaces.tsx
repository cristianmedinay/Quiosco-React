export interface Categoria {
    id: number,
    icono: string,
    nombre: string
}
// Definir la estructura del contexto
export interface QuioscoContextType {
    categorias: Categoria[];
    categoriaActual: Categoria | null;
    handleClickCategoria: (id: number) => void;
    handleClickModal: () => void;
    modal: boolean,
    handleSetProducto: (producto: ProductosProps) => void,
    producto: ProductosProps | null;
    pedido: ProductosProps[],
}

export interface ProductosProps {
    id:number,
    precio: number,
    nombre: string,
    imagen: string
   
}