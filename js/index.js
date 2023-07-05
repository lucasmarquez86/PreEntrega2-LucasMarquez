function mostrarPrecio(actividad) {
    let precio = '';
    switch (actividad.toLowerCase()) {
        case "crossfit":
            precio = '1500';
            break;
        case "funcional":
            precio = '2000';
            break;
        case "boxeo":
            precio = '1800';
            break;
        case "musculacion":
            precio = '2500';
            break;
        default:
            console.warn('No entendimos tu selección, por favor toque F5 e ingrésalo correctamente');
            break;
    }
    return precio;
}

function mostrarDescuento() {
    let cantidad = ' Clase(s) sin Descuento ';
    for (let i = 1; i <= 30; i++) {
        if (i > 3) {
            cantidad = ' Clases con 10% de Descuento ';
        }
        console.log(i + cantidad);
    }
    return cantidad;
}

function calcularDescuento(precio, cantidadClases) {
    let descuento = 0;
    if (cantidadClases >= 4) {
        descuento = 0.1; // 10% de descuento
    }
    let montoTotal = precio * cantidadClases;
    let descuentoAplicado = montoTotal * descuento;
    let montoFinal = montoTotal - descuentoAplicado;

    console.log('El Precio de ' + cantidadClases + ' Clases es de $ ' + montoFinal);

    return { montoFinal, descuentoAplicado };
}
  
  function consultarActividad() {
    let respuesta = confirm('¿Desea realizar alguna actividad?');
    if (respuesta === true) {
        let actividad = prompt('Ingrese el nombre de la actividad a realizar (Crossfit|Funcional|Boxeo|Musculacion):');
        let precio = parseInt(mostrarPrecio(actividad));
        mostrarDescuento();
        let respuestaComprar = alert('El precio de la Clase es de: ' + precio);
        let cantidadClases = parseInt(prompt('Ingrese el numero Clases que quiere realizaren el mes:'));
        let { montoFinal, descuentoAplicado } = calcularDescuento(precio, cantidadClases);
        let respuestaCantidad = confirm('Para ' + cantidadClases + ' clase(s): ' + ' El monto total a pagar es de: $' + montoFinal + ' Se aplicó un descuento de: $' + descuentoAplicado + ' ¿Desea confirmar esta Inscripción?');
        if (respuestaCantidad === true) {
            alert('¡Ya estás inscripto para ' + cantidadClases + ' Clases de: ' + actividad);
        } else {
            alert('No hay drama. Cuando quieras te estaremos esperando!');
        }
    } else {
        alert('No hay problema. ¡Te esperamos cuando gustes!');
    }
}


