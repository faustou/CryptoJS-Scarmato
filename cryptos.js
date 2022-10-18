class Crypto {

    constructor(nombre, precio, vol, change){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.vol = parseFloat(vol);
        this.change = change;
    }
    datos (){
        return this.nombre + " tiene un valor actual de $" + this.precio + "\nSu volumen en de $" + this.vol + " Billones" + 
        "\nA cambiado en las ultimas 24H un " + this.change
    }
    
}
const crypto1 = new Crypto ('Bitcoin', 19645, 374, '+1,90%');
const crypto2 = new Crypto ('BNB', 278, 44, '+1,65%');
const crypto3 = new Crypto ('Ethereum', 1335, 161, '+2,89');
const crypto4 = new Crypto ('Dogecoin', '0.06062', 7, '-1,93%');
const crypto5 = new Crypto ('USDT', 1, 68, '+0,00%');
//declaracion de los objetos