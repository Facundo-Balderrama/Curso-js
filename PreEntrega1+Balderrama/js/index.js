console.log("Bienvenidos a la mejor casa de cotizacion");
//DOLAR
let dolarCompra = 1180;
let dolarVenta = 1230;
//EURO
let euroCompra = 1271.91;
let euroVenta = 1326.26;
//REAL
let realCompra = 263;
let realVenta = 270;

let montoIngresado = 0;

let operaciones = parseFloat(prompt("Ingrese el numero que desea operar:" + "\n" + "1.Compra" + "\n" + "2.Venta" + "\n" + "3.Salir"));
switch(operaciones){
    case 1:
        compraDivisa();
        break;
    case 2:
        ventaDivisa();
        break;
    case 3:
        break;
}

function compraDivisa(){
    let divisaCotizada = parseFloat(prompt("Que divisa desea comprar:" + "\n" + "1.Dolar" + "\n" + "2.Euro" + "\n" + "3.Real" + "\n" + "4.Salir"));
    switch(divisaCotizada){
        case 1:
            calcularCompra("USD", dolarCompra);
            break;
        case 2:
            calcularCompra("EUR", euroCompra);
            break;
        case 3:
            calcularCompra("BRL", realCompra);
            break;
        case 4:
            break;
    }
}

function ventaDivisa(){
    let divisaCotizada = parseFloat(prompt("Que divisa desea vender:" + "\n" + "1.Dolar" + "\n" + "2.Euro" + "\n" + "3.Real" + "\n" + "4.Salir"));
    switch(divisaCotizada){
        case 1:
            calcularVenta("USD", dolarVenta);
            break;
        case 2:
            calcularVenta("EUR", euroVenta);
            break;
        case 3:
            calcularVenta("BRL", realVenta);
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
    } while(isNaN(montoIngresado)){
        let montoTotal = montoIngresado * precioDivisa;
        console.log("Usted compro" + " " + montoIngresado + " " + divisa + "," + " " + "un monto total de" + " " + "$" + montoTotal + " " + "ARS");
    }
}

function calcularVenta(divisa, precioDivisa){
    do{
        montoIngresado = parseFloat(prompt("Ingrese el monto que desea vender: "));
        if(isNaN(montoIngresado)){
            console.log("Ingrese un numero valido");
        }
    } while (isNaN(montoIngresado)){
        let montoTotal = montoIngresado * precioDivisa;
        console.log("Usted vendio" + " " + montoIngresado + " " + divisa + "," + " " + "un monto total de" + " " + "$" + montoTotal + " " + "ARS");
    }
}