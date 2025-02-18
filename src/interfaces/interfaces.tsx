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
    producto: ProductosProps;
    pedido: ProductosProps[],
    handleAgregarPedido: ( producto: ProductosProps) => void,
    handleEditarCantidad: (id: number) => void,
    handleEliminarProductoPedido: (id: number) => void,
    setTotal: React.Dispatch<React.SetStateAction<number>>
    total: number,
}

export interface ProductosProps {
    id:number,
    precio: number,
    nombre: string,
    imagen: string,
    cantidad: number,
    categoria_id: number
}