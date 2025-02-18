import { createContext, ReactNode, useEffect, useState} from "react"

import {categorias as categoriasDB} from '../data/categorias'
import { Categoria , ProductosProps, QuioscoContextType} from "../interfaces/interfaces";
// Definir la estructura de una categoría
import {toast} from "react-toastify"

// creas contexto
export const QuioscoContext = createContext<QuioscoContextType | null>(null);
interface QuioscoProviderProps {
    children: ReactNode;
}



// creas proveedor
export const QuioscoProvider = ({ children }: QuioscoProviderProps) => {

  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [categorias, setCategorias] = useState<Categoria[]>(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState<Categoria | null>(categoriasDB.length > 0 ? categoriasDB[0] : null)
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState<ProductosProps>({} as ProductosProps)
    const [pedido, setPedido] = useState<ProductosProps[]>([])   
    const [total, setTotal] = useState(0)


    useEffect(() => {
        //reduce devuelve un unico valor de un array en este caso el total
        const nuevoTotal = pedido.reduce((total, producto) => producto.precio * producto.cantidad + total, 0)
        setTotal(nuevoTotal)

    }, [pedido])


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


    // desestruturando para agregar el pedido la cantidad
    const handleAgregarPedido = ({...producto}: ProductosProps ) => {
        
        if (pedido.some((pedidoState: ProductosProps) => pedidoState.id === producto.id)) {   
            const pedidoActualizado = pedido.map((pedidoState: ProductosProps)=> 
            pedidoState.id === producto.id ?  producto : pedidoState )
          
            setPedido(pedidoActualizado);
            toast.success('Guardado Correctamente')
        
        }else{
            /* setPedido([...pedido, {...producto, cantidad: 1}]) */
            setPedido([...pedido, producto]);
            toast.success('Agregado al Pedido')
        }

      

    }
    // map modifica el array pero no modifica el original
    // filter modifica el array y modifica el original
    // some solo modifica el array pero no modifica el original
    // find modifica el array y modifica el original
    
    const handleEditarCantidad = (id: number) => {
        const pedidoActualizado = pedido.filter((producto: ProductosProps) => producto.id === id)[0]
        setProducto(pedidoActualizado)

        setModal(!modal)
    }   

    const handleEliminarProductoPedido = (id: number) => {
        const pedidoActualizado = pedido.filter((producto: ProductosProps) => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Eliminado del Pedido')
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
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProductoPedido,
            setTotal,
            total,
            
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export type HandleAgregarPedidoType = (producto: ProductosProps) => void;