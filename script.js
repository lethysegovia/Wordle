let button = document.getElementById("guess-button")

button.style.color ="red"

const palabra = "pizza"


function intentar(){
    console.log("click")
}
console.log("hola")
let intentos= 6;

let vector = ["p","i","z","z", "a"];
console.log(vector)



let usuario="ADDED";
console.log(usuario[3])
for(i=0; i<=5; i=i+1){
    console.log("mensaje", i)
}

console.log("fin del bucle")
let lista = [1,3,5,"texto",true];



console.log(palabra[3])




if (usuario === palabra){
    console.log("ganaste");
}else{
    intentos= intentos - 1;
    console.log("te quedan", intentos)
       
}
if (intentos === 0){
    console.log("perdiste");
}
    
