export const formatearDinero = (cantidad: number): string  =>{

    return cantidad.toLocaleString('es-EU', {
        style: 'currency',
        currency: 'EUR'
    })

}