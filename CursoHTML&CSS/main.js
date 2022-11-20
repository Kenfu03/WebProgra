document.getElementById("resultado").Value = "";


function numeros(valor){
    document.getElementById("resultado").Value += valor;
    console.log(document.getElementById("resultado").Value)

}

function operacion(){
    var opera = document.getElementById("resultado").Value;
    if (opera == 0){
        document.getElementById("resultado").Value = "Sin operacion";
        console.log("Esta mamando")
    } else{
        document.getElementById("resultado").Value = eval(opera);
        console.log(eval(opera));
    }
}

function resetear(){
    document.getElementById("resultado").Value = "";
    console.log("reset")
}