console.log("Bienvenidos a la mejor casa de cotizacion");

let montoIngresado = 0;

class nuevoCliente{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    toString(){
        return this.nombre + " " + this.apellido;
    }
}

let cliente = new nuevoCliente(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su dni"));
while (cliente.nombre == "" || cliente.apellido == "" || cliente.dni == ""){
    console.log("Rellene todos los campos");
    alert("Faltan datos, verifique todos los campos");

    let cliente = new nuevoCliente(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su dni"));
} 
console.log("Bienvenido" + " " + cliente.toString())


let operaciones = ["1.Comprar", "2.Vender", "3.Salir"];

class divisas{
    constructor(abreviatura, nombre, precioCompra, precioVenta){
        this.abreviatura = abreviatura;
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
    }
}

let todasLasDivisas = [];

todasLasDivisas.push(new divisas("USD", "dolar", "1180", "1230"));
todasLasDivisas.push(new divisas("EUR", "euro", "1271.91", "1326.26"));
todasLasDivisas.push(new divisas("BRL", "real", "263", "270"));

function elegirOperacion(){
    let operacion = parseInt(prompt("Ingrese el numero de la operacion que desea realizar:" + "\n" + "1.Comprar" + "\n" + "2.Vender" + "\n" + "3.Salir"));
    switch(operacion){
        case 1:
            compraDivisa();
            break;
        case 2:
            ventaDivisa();
            break;
        case 3:
            break;
    }
}

function compraDivisa(){
    let divisaCotizada = parseFloat(prompt("Que divisa desea comprar:" + "\n" + "1." + (todasLasDivisas[0].nombre) + "\n" + "2." + (todasLasDivisas[1].nombre) + "\n" + "3." + (todasLasDivisas[2].nombre) + "\n" + "4.Salir"));
    switch(divisaCotizada){
        case 1:
            calcularCompra("USD", todasLasDivisas[0].precioCompra);
            break;
        case 2:
            calcularCompra("EUR", todasLasDivisas[1].precioCompra);
            break;
        case 3:
            calcularCompra("BRL", todasLasDivisas[2].precioCompra);
            break;
        case 4:
            break;
    }
}

function ventaDivisa(){
    let divisaCotizada = parseFloat(prompt("Que divisa desea vender:" + "\n" + "1." + (todasLasDivisas[0].nombre) + "\n" + "2." + (todasLasDivisas[1].nombre) + "\n" + "3." + (todasLasDivisas[2].nombre) + "\n" + "4.Salir"));
    switch(divisaCotizada){
        case 1:
            calcularVenta("USD", todasLasDivisas[0].precioVenta);
            break;
        case 2:
            calcularVenta("EUR", todasLasDivisas[1].precioVenta);
            break;
        case 3:
            calcularVenta("BRL", todasLasDivisas[2].precioVenta);
        case 4:
            break;
    }
}

function calcularCompra(divisa, precioDivisa){
    do {
        montoIngresado = parseFloat(prompt("Ingrese el monto que desea comprar: "));
        if (isNaN(montoIngresado)){
            console.log("Ingrese un numero valido");
        }
    } while(isNaN(montoIngresado))
        let montoTotal = montoIngresado * precioDivisa;
        console.log("Usted compro" + " " + montoIngresado + " " + divisa + "," + " " + "un monto total de" + " " + "$" + montoTotal + " " + "ARS");
    
}

function calcularVenta(divisa, precioDivisa){
    do{
        montoIngresado = parseFloat(prompt("Ingrese el monto que desea vender: "));
        if(isNaN(montoIngresado)){
            console.log("Ingrese un numero valido");
        }
    } while (isNaN(montoIngresado))
        let montoTotal = montoIngresado * precioDivisa;
        console.log("Usted vendio" + " " + montoIngresado + " " + divisa + "," + " " + "un monto total de" + " " + "$" + montoTotal + " " + "ARS");
    
}

elegirOperacion();