let containerElement=document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    let colorContainerElement = document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement);  
}

function randomcolor(){
    let char="0123456789abcdef";
    let colorCodelength=6;
    let colorCode=""
    for (let index = 0; index < colorCodelength; index++) {
        let randomNumber=Math.floor(Math.random()*char.length);
        colorCode+=char.substring(randomNumber,randomNumber+1);
    }
    return colorCode;
}
let colorContainerElements=document.querySelectorAll(".color-container");
function generatorcolor(){
    colorContainerElements.forEach((colorContainerElement)=>{
        let newColorCode=randomcolor()
        colorContainerElement.style.backgroundColor="#"+newColorCode;
        colorContainerElement.innerText="#"+newColorCode;
    })
}
generatorcolor();
