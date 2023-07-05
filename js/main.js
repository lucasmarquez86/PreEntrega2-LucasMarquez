const carrito = []

const actividades = [{sku: 1, nombre: 'Cross Training', precio: 2599},
                 {sku: 2, nombre: 'Boxeo', precio: 3859},
                 {sku: 3, nombre: 'Funcional', precio: 1851},
                 {sku: 4, nombre: 'Musculación', precio: 2599},
                 {sku: 5, nombre: 'Hiit', precio: 2894},
                 {sku: 6, nombre: 'Full Combat', precio: 3748},
                 {sku: 7, nombre: 'ABS', precio: 3281},
                 {sku: 8, nombre: 'Zumba', precio: 1938},
                 {sku: 9, nombre: 'MMA', precio: 3122},
                 {sku: 10, nombre: 'Stretching', precio: 2745},
                 {sku: 11, nombre: 'Yoga', precio: 3122},
                 {sku: 12, nombre: 'Ritmos', precio: 1745}]

function buscarActividad(sku) {
    let resultado = actividades.find((actividad)=> actividad.sku === parseInt(sku))
    return resultado
}       

function finalizarCompra() {
    const shooping = new Compra(carrito)
    let mensaje = "El costo total por sus Actividades es de: $" + shooping.obtenerSubtotal();
    return mensaje;
}

function comprar() {
    let codigo = prompt("Ingrese el código de la Clase a realizar:")
    let actElegida = buscarActividad(codigo)
    if (actElegida !== undefined) {
        carrito.push(actElegida)
        alert(`Felicitaciones! ${actElegida.nombre.toUpperCase()} se agregó al carrito.`)
        let respuesta = confirm("Queres anotarte en otra clase?")
        if (respuesta === true) {
            comprar()
        } else {
            alert(finalizarCompra())
            console.table(carrito)
            finalizarCompra()
        }
    } else {
        alert("Error en el codigo ingresado. Por favor ingrese un código correcto")
        comprar()
    }
}