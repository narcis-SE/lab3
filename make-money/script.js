const moneyForm = document.getElementById("moneyForm");
//need to get input from first text box and second
const count = document.getElementById("count");
const coin = document.getElementById("coin");

moneyForm.addEventListener("submit", (event) => {
    event.preventDefault();


    let counter = count.value; //Pulls value of counter
    let typeOfCoin = coin.value; //Pulls value of type of coin

    for(i=0; i<counter; i++){
        const newCoin = document.createElement("div");
        newCoin.className = "coin";
        newCoin.classList.add(typeOfCoin);
        newCoin.innerText = typeOfCoin;
        newCoin.addEventListener("click", () => {
            newCoin.remove();

            if(newCoin.classList.contains("penny")){ //checks class list if it contains a certain class. 
                console.log("penny printed");
            }
        });
        moneyForm.append(newCoin);

    
    }

})