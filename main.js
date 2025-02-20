
let me = "Luis"; // Definir usuário temporário

document.addEventListener("DOMContentLoaded", function() {
    const chatTitle = document.getElementById("chatTitle");
    const chatUser = localStorage.getItem("chatUser");

    if (chatUser) {
        chatTitle.textContent += chatUser;
    }

    const btnSend = document.getElementById("btn-send");
    btnSend.addEventListener("click", function() {
        const inputMessage = document.getElementById("inpt-msg");
        sendMessage(inputMessage.value);
        inputMessage.value = "";
    });
});

function sendMessage(message) {
    if (message.trim() === "") return;

    let arr = { user: me, msg: message };
    ws.send(JSON.stringify(arr));
}

  