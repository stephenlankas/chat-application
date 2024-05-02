const socket =new WebSocket('ws://localhost:3000'); //websocket server address
socket.onopen = () => {
    console.log('connected to server');
};

socket.onmessage =(event) =>{
    const messagecontainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.innerText = event.data;
    messagecontainer.appendChild(messageElement);
    messagecontainer.scrollHeight; //scrolll to bottom 
};
function sendMessage(){
    const messageInput = document.getElementById('message-input');
    const message =messageInput.ariaValueMax.trim();
    if(message){
        socket.send(message); messageInput.value="";
    }
}