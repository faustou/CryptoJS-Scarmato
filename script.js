let consulta = false;
let usuario = "admin";
let contraseña = "123456";

const cryptos = ["Bitcoin", "BNB", "Ethereum", "Dogecoin", "USDT"] //array

function solicitarDatos (){
    let user = prompt("Ingrese usuario habilitado");
    let pass = prompt("Ingrese contraseña correcta");

    if (validador(user, pass)){
        consulta = true;
    }
}

solicitarDatos();

function validador (user, pass){

    if (user === usuario && pass === contraseña){
        alert("Bienvenido")
        return true;
    }else{
        alert("Usuario/Contraseña incorrecta")
        solicitarDatos();
        return false;
    }
}


while (consulta !=  false) {
    let nombreCrypto = (prompt("DIVISAS: \n" + cryptos.join("\n") + "\n¿Que moneda desea consultar?")); //utilizacion del array completo
    let compra = false;
    switch (nombreCrypto){
        // caso 1
        case "bitcoin":
            alert (crypto1.datos());
            compra = confirm("¿desea comprar?");
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto bitcoin desea comprar?"));
                let total = crypto1.precio * cantidad;//utilizacion del objeto deseado
                alert ("usted compro " + cantidad + " bitcoin a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 2
        case "bnb":
            alert (crypto2.datos());
            compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto bnb desea comprar?"));
                let total = crypto2.precio * cantidad;
                alert ("usted compro " + cantidad + " bnb a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 3
        case "ethereum":
            alert (crypto3.datos());
        compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto ethereum desea comprar?"));
                let total = crypto3.precio * cantidad;
                alert ("usted compro " + cantidad + " ethereum a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 4
        case "dogecoin":
            alert (crypto4.datos());
            compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto dogecoin desea comprar?"));
                let total = crypto4.precio * cantidad;
                alert ("usted compro " + cantidad + " dogecoin a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 5
        case "usdt":
            alert (crypto5.datos());
            compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto usdt desea comprar?"));
                let total = crypto5.precio * cantidad;
                alert ("usted compro " + cantidad + " usdt a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        
        default:
            alert ("crpyto no detectada");
    }
}

