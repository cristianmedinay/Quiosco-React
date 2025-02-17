import { useContext } from "react";

import { QuioscoContext } from "../context/QuioscoProvider";


//usar el contexto
export const useQuiosco = () => {   
    const context = useContext(QuioscoContext);
    
    if (!context) {
        throw new Error("useQuiosco debe usarse dentro de un QuioscoProvider");
    }

    return context;
}