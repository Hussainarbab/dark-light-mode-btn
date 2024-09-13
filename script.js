let modebtn =document.querySelector("#modebtn");
let currentmode ="light";

modebtn.addEventListener("click", () =>{
    if(currentmode === "light"){
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white"
    }
});