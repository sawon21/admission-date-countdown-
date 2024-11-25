let socket = new WebSocket('wss://chating-app-2.onrender.com');
socket.onopen = function() {
    console.log('Connected to the WebSocket server');
};

socket.onmessage = function(event) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = event.data;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value.trim();

    if (message !== '') {
        socket.send(message);
        messageInput.value = '';
    }
}