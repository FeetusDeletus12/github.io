// Filament cost calculation function
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

// Chatbot functionality and UI
const chatbotCircle = document.getElementById("chatbot-circle");
const chatbotBox = document.getElementById("chatbot-box");
const closeButton = document.getElementById("close-chatbot");

chatbotCircle.addEventListener("click", () => {
    chatbotBox.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
    chatbotBox.classList.remove("open");
});

const chatbotInput = document.getElementById("chatbot-input");
const chatbotContent = document.getElementById("chatbot-content");

async function sendMessageToChatbot(message) {
    const userMessage = document.createElement("div");
    userMessage.textContent = "User: " + message;
    chatbotContent.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: Loading response...";
    chatbotContent.appendChild(botMessage);

    // Scroll to the latest message
    chatbotContent.scrollTop = chatbotContent.scrollHeight;

    // Here, you would integrate with the Hugging Face API or your backend
    const response = await fetch("https://api-inference.huggingface.co/models/your_model_name", {
        method: "POST",
        headers: {
            "Authorization": "Bearer YOUR_HUGGINGFACE_API_KEY",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            inputs: message
        })
    });

    const data = await response.json();

    botMessage.textContent = "Bot: " + data.generated_text; // Replace with actual field from the API response
    chatbotContent.scrollTop = chatbotContent.scrollHeight;
}

chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const message = chatbotInput.value;
        sendMessageToChatbot(message);
        chatbotInput.value = '';  // Clear input after sending
    }
});
