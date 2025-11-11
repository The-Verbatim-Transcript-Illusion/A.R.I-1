const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(sender, message) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = `${sender}: ${message}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Pre-programmed bot responses (can later replace with AI API)
function botResponse(userMsg) {
    userMsg = userMsg.toLowerCase();
    if (userMsg.includes("hello")) return "Hello! How can I help you today?";
    if (userMsg.includes("how are you")) return "I'm just a bot, but I'm doing great!";
    return "Sorry, I didn't understand that.";
}

sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message === "") return;
    appendMessage("You", message);
    const response = botResponse(message);
    appendMessage("A.R.I-1", response);
    userInput.value = "";
});

userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendBtn.click();
});
