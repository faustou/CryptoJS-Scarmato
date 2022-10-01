let consulta = false;
let bitcoin = 19859.20;
let bnb = 256.50;
let ethereum = 1357.65;
let dogecoin = 0.20;
let usdt = 1;
let usuario = "admin";
let contraseña = "123456";


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
    let nombreCrypto = (prompt("bnb \nbitcoin \nethereum \nusdt \ndogecoin \n¿Que moneda desea consultar?"));
    let compra = false;
    switch (nombreCrypto){
        // caso 1
        case "bitcoin":
            alert ("El precio de bitcoin es de: $" + bitcoin + " dolares." );
            compra = confirm("¿desea comprar?");
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto bitcoin desea comprar?"));
                let total = bitcoin * cantidad;
                alert ("usted compro " + cantidad + " bitcoin a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 2
        case "bnb":
            alert ("El precio de bnb es de: $" + bnb + " dolares." );
            compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto bnb desea comprar?"));
                let total = bnb * cantidad;
                alert ("usted compro " + cantidad + " bnb a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 3
        case "ethereum":
        alert ("El precio de ethereum es de: $" + ethereum + " dolares." );
        compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto ethereum desea comprar?"));
                let total = ethereum * cantidad;
                alert ("usted compro " + cantidad + " ethereum a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 4
        case "dogecoin":
            alert ("El precio de dogecoin es de: $" + dogecoin + " dolares." );
            compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto dogecoin desea comprar?"));
                let total = dogecoin * cantidad;
                alert ("usted compro " + cantidad + " dogecoin a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        // caso 5
        case "usdt":
            alert ("El precio de usdt es de: $" + usdt + " dolares." );
            compra = confirm("¿desea comprar?")
            if (compra != false){
                let cantidad = parseInt(prompt("¿cuanto usdt desea comprar?"));
                let total = usdt * cantidad;
                alert ("usted compro " + cantidad + " usdt a $" + total + " dolares.");
                consulta = confirm("desea realizar otra compra?");
            }
            break;
        
        default:
            alert ("crpyto no detectada");
    }
}