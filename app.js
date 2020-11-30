const colour= [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn= document.querySelector(".btn");
const text= document.querySelector(".colour");

btn.addEventListener("click", function(){
    hex= "#";
    for(let i=0; i<6; i++) {
        hex += colour[randomColour()];
    }
    document.body.style.backgroundColor= hex
    text.innerText= hex;
})

function randomColour(){
        var num= Math.floor(Math.random()* colour.length);
        return num;
    }   
