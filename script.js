function calculateCost() {
    const totalCost = parseFloat(document.getElementById("total-cost").value);
    const totalWeight = parseFloat(document.getElementById("total-weight").value);
    const usedWeight = parseFloat(document.getElementById("used-weight").value);

    if (isNaN(totalCost) || isNaN(totalWeight) || isNaN(usedWeight)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const costPerGram = totalCost / totalWeight;
    const usedCost = costPerGram * usedWeight;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Cost per gram: $${costPerGram.toFixed(4)}</p>
        <p>Cost of used filament: $${usedCost.toFixed(2)}</p>
    `;
}
