const onButton = document.getElementById("on");
const offButton = document.getElementById("off");
const toggleButton = document.getElementById("toggle");
const endButton = document.getElementById("end");

const lightBulb = document.getElementById("lightbulb")



toggleButton.addEventListener("click", (event) =>{
      if(lightBulb.style.background === "yellow"){
        lightBulb.style.background = "grey";
    }
    else if(lightBulb.style.background === "grey"){
        lightBulb.style.background = "yellow";
    }
})

onButton.addEventListener("click", (event)=>{
    lightBulb.style.background = "yellow";
})

offButton.addEventListener("click", (event)=>{
    lightBulb.style.background = "grey";
})

onButton.addEventListener("click", (event)=>{
    lightBulb.style.background = "yellow";
})

endButton.addEventListener("click", (event) => {
    lightBulb.remove();
    onButton.disabled = true;
    toggleButton.disabled = true;
    offButton.disabled = true;
    endButton.disabled = true;
})