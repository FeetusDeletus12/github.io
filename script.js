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

    // API call to Hugging Face Space
    try {
        const response = await fetch("https://hf.space/embed/your-username/your-space-name/api/predict/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: [message] // Adjust depending on how your Space handles the input
            })
        });

        const data = await response.json();

        // Replace with actual field from the API response (modify as per your Space's response)
        botMessage.textContent = "Bot: " + data.data[0];
        chatbotContent.scrollTop = chatbotContent.scrollHeight;
    } catch (error) {
        console.error("Error:", error);
        botMessage.textContent = "Bot: Error connecting. Please try again later.";
    }
}

chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const message = chatbotInput.value;
        sendMessageToChatbot(message);
        chatbotInput.value = '';  // Clear input after sending
    }
});
