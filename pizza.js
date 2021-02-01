function pizzaCalc() {

    let pizzaTopping = parseFloat(prompt("How many pizza topping will you use?: "));

    let amountOfCoworkers = parseFloat(prompt("How many Co-Workers will you share with?(Include Yourself): "));

    let pizzaPrice = 15.00;

    let pizzaToppingCost = pizzaTopping * 1.25;

    let totalCost = pizzaToppingCost + pizzaPrice;

    let amountEachCoWorkerPays =  totalCost / amountOfCoworkers;

    let displayCost = amountEachCoWorkerPays.toFixed(2);

    alert(`Each Co-Worker will ${displayCost} dollars`);

}
