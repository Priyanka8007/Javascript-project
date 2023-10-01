const  btnEl=document.getElementById("btn");

const bmiInputEl=document.getElementById("bmi-result")

const weightconditionEl=document.getElementById("weight-condition")


function calculateBMI(){
const heightvalue=document.getElementById("height").value/100
const weightvalue=document.getElementById("weight").value

const bmivalue=weightvalue/(heightvalue*heightvalue)

bmiInputEl.value=bmivalue

if(bmivalue<18.5){
 weightconditionEl.innerText="Under weight";

}else if(bmivalue>=18.5&& bmivalue<=24.9)
{
    weightconditionEl.innerText="normal weight";

}else if(bmivalue>=25&&bmivalue<=29.9){
    weightconditionEl.innerText="overweight";
}else if(bmivalue>=30){
    weightconditionEl.innerText="obesity";

}


}


btnEl.addEventListener("click",calculateBMI)