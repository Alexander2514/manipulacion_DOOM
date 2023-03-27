const h1 = document.querySelector("h1")
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn= document.getElementById("btnCalcular");
const resultado_suma= document.getElementById("resultado")
const form = document.getElementById("form")



btn.addEventListener("click",clickBtn)

function clickBtn(event) {
    //event.preventDefault();// como se sabe los formularios se recargan al darle submit por que su funcion es enviar la informacion pero podemos parar el evento de esta forma
    
    let operacion= parseInt(input1.value) + parseInt(input2.value);

    resultado_suma.innerText="Resultado: " + operacion;



}