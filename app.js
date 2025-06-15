// ================================================== CHAT =================================================================

// SIDEBAR VARIABLES
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGE VARIABLE
const messagesNotification = document.querySelector('#messages-notification');
 
const messages= document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// =========================================== SIDEBAR ==========================================

// Remove Active Class From All Menu Items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
item.classList.add('active');
if(item.id != 'notifications'){
  document.querySelector('.notifications-popup').style.display = 'none';

}else{
  document.querySelector('.notifications-popup').style.display = 'block';
  document.querySelector('#notifications .notification-count').style.display = 'none';
}

  })   
})

// ========================================= MESSAGES ===================================================
// searches Chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
let name = chat.querySelector('h5').textContent.toLowerCase();
if(name.indexOf(val) != -1){
  chat.style.display = 'flex';
} else{
  chat.style.display = 'none';
}
  })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-gold)';
  messagesNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000);
})
