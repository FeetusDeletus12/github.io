// Calculate filament cost function
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
        <p>Cost of used filament: $${usedCost.toFixed(4)}</p>
    `;
}

// Chatbot UI and functionality
const chatbotCircle = document.getElementById("chatbot-circle");
const chatbotBox = document.getElementById("chatbot-box");
const closeButton = document.getElementById("close-chatbot");

chatbotCircle.addEventListener("click", () => {
    chatbotBox.classList.toggle("open");  // Toggle the visibility of the chatbot
});

// Close the chatbot box when the close button is clicked
closeButton.addEventListener("click", () => {
    chatbotBox.classList.remove("open");
});

// Chatbot interaction (simplified for example)
function sendMessageToChatbot(message) {
    // This would typically send the message to your chatbot API, for now, we simulate it
    const chatbotContent = document.getElementById("chatbot-content");
    const userMessage = document.createElement("div");
    userMessage.textContent = "User: " + message;
    chatbotContent.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: " + "You asked: " + message;  // Here you can replace with actual API response
    chatbotContent.appendChild(botMessage);

    chatbotContent.scrollTop = chatbotContent.scrollHeight;  // Scroll to the bottom
}

// Example of how you might use it
const chatbotInput = document.getElementById("chatbot-input");
chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const message = chatbotInput.value;
        sendMessageToChatbot(message);
        chatbotInput.value = '';  // Clear the input field after sending
    }
});
