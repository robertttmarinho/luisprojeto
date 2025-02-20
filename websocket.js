var wsUrl = "ws://127.0.0.1:50000";
var ws = new WebSocket(wsUrl);
var connected = false;

ws.onopen = function() {
    console.log("Conectado!");
    let arr = { user: "", msg: "Oi, estou disponível!" };
    ws.send(JSON.stringify(arr));
};

ws.onmessage = function(event) {
    try {
        var temp = JSON.parse(event.data);
        if (temp.msg === "Oi, estou disponível!") {
            connected = true;
        }

        if (connected) {
            displayMessage(temp.user, temp.msg);
        }
    } catch (e) {
        console.log("Ocorreu um erro!");
    }
};

ws.onclose = function() {
    console.log("Conexão fechada!");
};

function displayMessage(user, message) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${user}: ${message}`;
    messageDiv.className = "message received";
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
