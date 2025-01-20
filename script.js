let display = document.getElementById("disp");
let button = document.getElementsByTagName("button");

for(let i=0; i< button.length; i++){
    button[i].addEventListener("click", ()=>{
        let buttonVal = button[i].innerHTML;

        if(buttonVal === "AC"){
            display.value = ""
        }
        else if(buttonVal === "DEL"){
            display.value = display.value.slice(0, -1);
        }
        else if(buttonVal === "="){
            try{
                let expression = display.value
                    .replace(/÷/g, "/")
                    .replace(/X/g, "*")
                    .replace(/%/g, "/100*")

                    display.value = eval(expression).toFixed(4)
            }catch{
                display.value = "Error!"
            }
        }
        else{
            display.value += buttonVal
        }
    })
}