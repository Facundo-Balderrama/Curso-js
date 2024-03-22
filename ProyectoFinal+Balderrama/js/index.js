// DIVISAS

class Divisa {

    constructor(simbolo, nombre, precioCompra, precioVenta, stockDivisa) {

        this.simbolo = simbolo;
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.stockDivisa = stockDivisa;
    }
    toString() {
        return this.nombre;
    }
}

let listaDivisas = [];

listaDivisas.push(new Divisa("USD $", "Dólar", 995, 1015, 20000));
listaDivisas.push(new Divisa("EUR €", "Euro", 916.08, 916.96, 15000));      
listaDivisas.push(new Divisa("BRL R$", "Real", 170.65, 170.79, 50000));     


let primerDivisa = document.querySelectorAll(".primerDivisa");      
let segundaDivisa = document.querySelectorAll(".segundaDivisa");
let tercerDivisa = document.querySelectorAll(".tercerDivisa");


primerDivisa[0].innerText = listaDivisas[0].simbolo;
primerDivisa[1].innerText = listaDivisas[0].nombre;
primerDivisa[2].innerText = listaDivisas[0].precioCompra;
primerDivisa[3].innerText = listaDivisas[0].precioVenta;

segundaDivisa[0].innerText = listaDivisas[1].simbolo;
segundaDivisa[1].innerText = listaDivisas[1].nombre;
segundaDivisa[2].innerText = listaDivisas[1].precioCompra;
segundaDivisa[3].innerText = listaDivisas[1].precioVenta;

tercerDivisa[0].innerText = listaDivisas[2].simbolo;
tercerDivisa[1].innerText = listaDivisas[2].nombre;
tercerDivisa[2].innerText = listaDivisas[2].precioCompra;
tercerDivisa[3].innerText = listaDivisas[2].precioVenta;

// CALCULADORA

let inputGroupSelect01 = document.querySelector("#inputGroupSelect01");
inputGroupSelect01.classList.add("opciones");

inputGroupSelect01.innerHTML += "<option class='dolarCalculadora'>Dólar</option>";
inputGroupSelect01.innerHTML += "<option class='euroCalculadora'>Euro</option>";
inputGroupSelect01.innerHTML += "<option class='realCalculadora'>Real</option>";

let dolarCalculadora = document.querySelector(".dolarCalculadora");
let euroCalculadora = document.querySelector(".euroCalculadora");
let realCalculadora = document.querySelector(".realCalculadora");

dolarCalculadora.innerText = listaDivisas[0].nombre;
euroCalculadora.innerText = listaDivisas[1].nombre;
realCalculadora.innerText = listaDivisas[2].nombre;

class Operacion {

    constructor(tipo) {
        this.tipo = tipo;
    }

    toString() {
        return this.tipo;
    }
}

let tipoOperacionArray = [];

tipoOperacionArray.push(new Operacion("Compra"));
tipoOperacionArray.push(new Operacion("Venta"));


let inputGroupSelect03 = document.querySelector("#inputGroupSelect03");
inputGroupSelect03.classList.add("tipoOperacion");

inputGroupSelect03.innerHTML += "<option class='operacionCompra'></option>";
inputGroupSelect03.innerHTML += "<option class='operacionVenta'></option>";

let operacionCompra = document.querySelector(".operacionCompra");
let operacionVenta = document.querySelector(".operacionVenta");

operacionCompra.innerText = tipoOperacionArray[0].tipo;
operacionVenta.innerText = tipoOperacionArray[1].tipo;

let formCalculadora = document.querySelector("#formCalculadora");
let cantidadDivisaCalcular = document.querySelector("#cantidadDivisaCalcular");

const IMPUESTO_PAIS = 0.30;
const IMPUESTO_GANANCIA = 0.45;

function compra() {

    let seleccionDivisa = inputGroupSelect01.value;

    switch (seleccionDivisa) {
        case "Dólar":
            calcularCompra("Dólares", listaDivisas[0].precioCompra);
            break;
        case "Euro":
            calcularCompra("Euros", listaDivisas[1].precioCompra);
            break;
        case "Real":
            calcularCompra("Reales", listaDivisas[2].precioCompra);
            break;
    }
}

function venta() {

    let seleccionDivisa = inputGroupSelect01.value;

    switch (seleccionDivisa) {
        case "Dólar":
            calcularVenta("Dólares", (listaDivisas[0].precioVenta));
            break;
        case "Euro":
            calcularVenta("Euros", (listaDivisas[1].precioVenta));
            break;
        case "Real":
            calcularVenta("Reales", (listaDivisas[2].precioVenta));
            break;
    }
}

function calcularCompra(nombreDivisa, tasaCambio) {

    let subTotalCompra = cantidadDivisaCalcular.value * tasaCambio;
    let subTotalPaisCompra = subTotalCompra * IMPUESTO_PAIS;
    let subTotalGananciaCompra = subTotalCompra * IMPUESTO_GANANCIA;
    let totalCompra = subTotalCompra + subTotalPaisCompra + subTotalGananciaCompra;

    let resumenCalculadora = document.querySelector("#resumenCalculadora");
    resumenCalculadora.innerText = ("\n Calculadora de " + tipoOperacionArray[0].tipo + "\n\n Cantidad a comprar: " + cantidadDivisaCalcular.value + " " + nombreDivisa + ".\n Subtotal: " + subTotalCompra.toFixed(2) + " Pesos Argentinos." + "\n Impuesto País: " + subTotalPaisCompra.toFixed(2) + " Pesos Argentinos." + "\n Impuesto a la Ganancia: " + subTotalGananciaCompra.toFixed(2) + " Pesos Argentinos." + ".\n Total: " + totalCompra.toFixed(2) + " Pesos Argentinos.");
}

function calcularVenta(nombreDivisa, tasaCambio) {

    console.log(nombreDivisa);
    console.log(tasaCambio);

    let subTotalCompra = cantidadDivisaCalcular.value * tasaCambio;

    let resumenCalculadora = document.querySelector("#resumenCalculadora");
    resumenCalculadora.innerText = ("\n Calculadora de " + tipoOperacionArray[1].tipo + "\n\n Cantidad a Vender: " + cantidadDivisaCalcular.value + " " + nombreDivisa + ".\n Total: " + subTotalCompra.toFixed(2) + " Pesos.");
}

formCalculadora.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((inputGroupSelect01.value !== "Elige el tipo de Divisa...") && (inputGroupSelect03.value !== "Elige el tipo de operación que deseas realizar...") && (cantidadDivisaCalcular.value !== "Ingrese la cantidad a consultar...")) {

        if (inputGroupSelect03.value == (tipoOperacionArray[0].tipo)) {

            isNaN(cantidadDivisaCalcular.value) ? resumenCalculadora.innerText = ("\n Debes ingresar un número permitido") : compra();

            // SweetAlert

            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: 'Datos correctamente ingresados.',
                showConfirmButton: false,
                timer: 2500

            })

        } else if (inputGroupSelect03.value == (tipoOperacionArray[1].tipo)) {

            isNaN(cantidadDivisaCalcular.value) ? resumenCalculadora.innerText = ("\n Debes ingresar un número permitido") : venta();

            Swal.fire({

                position: 'top-end',
                icon: 'success',
                title: 'Datos correctamente ingresados.',
                showConfirmButton: false,
                timer: 2500

            })

        }

        inputGroupSelect01.focus();
        formCalculadora.reset();

    } else {

        resumenCalculadora.innerText = ("\n Ingrese los datos correctos.");

        setTimeout(() => {

            resumenCalculadora.innerText = "";

        }, 5000);

        // SweetAlert

        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Ingrese los datos correctos.',   
            timer: 2500
        })
        inputGroupSelect01.focus();
        formCalculadora.reset();
    }
})


// INGRESAR

class Miembro {

    constructor(nombre, correo, contrasenia) {

        this.nombre = nombre;
        this.correo = correo;
        this.contrasenia = contrasenia;

    }
    toString() {

        return this.nombre;

    }
}

let formLogIn = document.querySelector("#formLogIn");
let nombreLogIn = document.querySelector("#nombreLogIn");
let correoLogIn = document.querySelector("#correoLogIn");
let contraseniaLogIn = document.querySelector("#contraseniaLogIn");
let resumenLogIn = document.querySelector("#resumenLogIn");

// Guardando datos de formulario en el LocalStorage

let usuarioIngresar = JSON.parse(sessionStorage.getItem("UsuarioMiembro")) ?? [];

if (usuarioIngresar.length > 0) {

    resumenLogIn.innerText = ("\nBienvenido." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (usuarioIngresar.nombre).toUpperCase() + "\n" + "Apellido: " + (usuarioIngresar.correo).toUpperCase() + "\n" + "Correo Electrónico: ");

}

formLogIn.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreLogIn.value !== "") && (correoLogIn.value !== "") && (contraseniaLogIn.value !== "")) {


        resumenLogIn.innerText = ("\nBIENVENIDO");

        let usuarioIngresar = new Miembro(nombreLogIn.value, correoLogIn.value, contraseniaLogIn.value);

        setTimeout(() => {

            resumenLogIn.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            position: 'top-end',
            icon: 'success',
            title: 'Datos correctamente enviados.',
            showConfirmButton: false,
            timer: 2500

        })

        // Guardando datos de formulario en el SessionStorage

        sessionStorage.setItem('UsuarioMiembro', JSON.stringify(usuarioIngresar));

        nombreLogIn.focus();
        formLogIn.reset();

    } else {

        resumenLogIn.innerText = ("\nIngrese los datos correctos.");

        setTimeout(() => {

            resumenLogIn.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            icon: 'error',
            title: 'Error!',
            text: 'Ingrese los datos correctos  .',
            timer: 2500

        })

        nombreLogIn.focus();
        formLogIn.reset();

    }

})