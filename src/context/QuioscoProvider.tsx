import { createContext, ReactNode, useState} from "react"

import {categorias as categoriasDB} from '../data/categorias'
import { Categoria , ProductosProps, QuioscoContextType} from "../interfaces/interfaces";
// Definir la estructura de una categoría


// creas contexto
export const QuioscoContext = createContext<QuioscoContextType | null>(null);
interface QuioscoProviderProps {
    children: ReactNode;
}



// creas proveedor
export const QuioscoProvider = ({ children }: QuioscoProviderProps) => {

  
    const [categorias, setCategorias] = useState<Categoria[]>(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState<Categoria>(categoriasDB[0])
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({} as ProductosProps)
    const [pedido, setPedido] = useState([])


    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleClickCategoria = (id: number) => {
        const categoria = categorias.filter(cat => cat.id === id)[0];
        setCategoriaActual(categoria);
    }

    const handleSetProducto = (producto: ProductosProps) => {
        setProducto(producto)
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleClickModal,
            modal,
            handleSetProducto,
            producto,
            pedido,
            
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}