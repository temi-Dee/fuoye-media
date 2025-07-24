// const sendBtn = document.getElementById("send-btn");
// const messageInput = document.getElementById("message-input");
// const chatMessages = document.getElementById("chat-messages");
// let isUser = true;

// sendBtn.addEventListener("click", sendMessage);
// messageInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") sendMessage();
// });

// function sendMessage() {
//   const msg = messageInput.value.trim();
//   if (msg === "") return;

//   const bubble = document.createElement("div");
//   bubble.classList.add("chat-bubble");
//   bubble.classList.add(isUser ? "you" : "other");
//   bubble.innerText = msg;

//   chatMessages.appendChild(bubble);
//   chatMessages.scrollTop = chatMessages.scrollHeight;

//   messageInput.value = "";
//   isUser = !isUser;
// }



const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  // Create chat bubble for "you"
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble you";
  bubble.textContent = text;

  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  messageInput.value = "";

  // Simulated reply after delay
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.className = "chat-bubble other";
    reply.textContent = "Got it! 👌";
    chatMessages.appendChild(reply);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}





function startChat(name) {
  const chatHeader = document.querySelector(".chat-header h2");
  chatHeader.innerText = `Chat with ${name}`;

  const chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = ""; // Clear old messages

  // Simulated welcome message
  const welcome = document.createElement("div");
  welcome.className = "chat-bubble other";
  welcome.innerText = `👋 Hello! You're now chatting with ${name}.`;
  chatMessages.appendChild(welcome);
}



// function sendMessage() {
//   const msg = messageInput.value.trim();
//   if (msg === "") return;

//   addMessage("you", msg);
//   messageInput.value = "";
//   chatMessages.scrollTop = chatMessages.scrollHeight;

//   setTimeout(() => {
//     const reply = getAutoReply();
//     addMessage("other", reply);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
//   }, 1000);
// }

// function addMessage(sender, text) {
//   const wrapper = document.createElement("div");
//   wrapper.className = `chat-bubble-wrapper ${sender}`;

//   const meta = document.createElement("div");
//   meta.className = "chat-meta";

//   const avatar = document.createElement("img");
//   avatar.className = "avatar";
//   avatar.src = sender === "you" ? "asset/DVC2.png" : "asset/VC.png";
//   avatar.alt = sender;

//   const time = document.createElement("span");
//   time.className = "time";
//   time.innerText = new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   meta.appendChild(avatar);
//   meta.appendChild(time);

//   const bubble = document.createElement("div");
//   bubble.className = `chat-bubble ${sender}`;
//   bubble.innerText = text;

//   wrapper.appendChild(meta);
//   wrapper.appendChild(bubble);
//   chatMessages.appendChild(wrapper);
// }

// function getAutoReply() {
//   const replies = [
//     "Sure thing!",
//     "I'll check and get back to you.",
//     "Noted. Thanks!",
//     "Can we reschedule?",
//     "Let me get back to you.",
//   ];
//   return replies[Math.floor(Math.random() * replies.length)];
// }



