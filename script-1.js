// Accessing video elements
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

// Creating a peer connection object
const peerConnection = new RTCPeerConnection();

// Setting up local video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        localVideo.srcObject = stream;
        stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
    })
    .catch(error => console.error('Error accessing local media: ', error));

// Handling incoming remote stream
peerConnection.ontrack = (event) => {
    const stream = event.streams[0];
    remoteVideo.srcObject = stream;
};

// Function to send chat message
function sendMessage() {
    const messageInput = document.getElementById('chatInput');
    const message = messageInput.value;
    // Send the message to the remote user (implementation depends on the backend)
    // You can use websockets or AJAX to send the message to the server
    // and then broadcast it to all connected users.
    // Here's a simplified example of appending the message to the chat container:
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = ''; // Clear the input field
}
