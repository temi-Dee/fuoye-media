// ================================================== CHAT =================================================================

// SIDEBAR VARIABLES
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGE VARIABLE
const messagesNotification = document.querySelector("#messages-notification");

const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// =========================================== SIDEBAR ==========================================

// Remove Active Class From All Menu Items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ========================================= MESSAGES ===================================================
// searches Chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// search chat
messageSearch.addEventListener("keyup", searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-gold)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ============================================== CREATE POST ===================================================
// Select necessary DOM elements
const createPostInput = document.querySelector("#create-post");
const postButton = document.querySelector('.create-post input[type="submit"]');
const feedsContainer = document.querySelector(".feeds");

// Disable the post button initially
postButton.disabled = true;

// Enable post button if input has content
createPostInput.addEventListener("input", () => {
  postButton.disabled = createPostInput.value.trim() === "";
});

// Handle post submission
document.querySelector(".create-post").addEventListener("submit", function (e) {
  e.preventDefault();

  const postText = createPostInput.value.trim();
  if (postText === "") return;

  const newPost = document.createElement("div");
  newPost.classList.add("feed");
  newPost.innerHTML = `
    <div class="head">
      <div class="user">
        <div class="profile-photo">
          <img src="asset/DVC2.png" alt="" />
        </div>
        <div class="ingo">
          <h3>You</h3>
          <small>Just Now</small>
        </div>
      </div>
      <span class="edit">
        <i class="uil uil-ellipsis-h"></i>
      </span>
    </div>

    <div class="photo">
      <img src="asset/story2.jpg" alt="">
    </div>

    <div class="action-buttons">
      <div class="interaction-buttons">
        <span><i class="uil uil-heart"></i></span>
        <span><i class="uil uil-comment-dots"></i></span>
        <span><i class="uil uil-share-alt"></i></span>
      </div>
      <div class="bookmark">
        <span><i class="uil uil-bookmark-full"></i></span>
      </div>
    </div>

    <div class="liked-by">
      <span><img src="asset/DVC2.png" alt=""></span>
      <span><img src="asset/DVC2.png" alt=""></span>
      <span><img src="asset/DVC2.png" alt=""></span>
      <p>Liked by <b>You</b> and <b>others</b></p>
    </div>

    <div class="caption">
      <p><b>You</b> ${postText} <span class="harsh-tag">#newpost</span></p>
    </div>

    <div class="comments text-muted">View all comments</div>
  `;

  // Add the new post at the top
  feedsContainer.prepend(newPost);

  // Reset input
  createPostInput.value = "";
  postButton.disabled = true;
});

// ================================================== FRIEND REQUEST ============================================================
// Handle friend request actions
document.querySelectorAll(".friend-requests .request").forEach((request) => {
  const acceptBtn = request.querySelector(".btn-primary");
  const declineBtn = request.querySelector(".btn:not(.btn-primary)");

  acceptBtn.addEventListener("click", () => {
    acceptBtn.textContent = "Accepted";
    acceptBtn.disabled = true;
    declineBtn.disabled = true;
    declineBtn.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    request.remove();
  });
});

// ================================================== SETTING ============================================================
// Toggle password visibility
    const togglePassword = document.querySelector("#toggle-password");
    const passwordInput = document.querySelector("#password");

    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.classList.toggle("uil-eye");
      togglePassword.classList.toggle("uil-eye-slash");
    });

    // Profile image preview
    const profileInput = document.querySelector("#profile-pic");
    const previewImg = document.querySelector("#preview-pic");

    profileInput.addEventListener("change", () => {
      const file = profileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => previewImg.src = e.target.result;
        reader.readAsDataURL(file);
      }
    });

    // Dark mode toggle
    const themeToggle = document.querySelector("#theme-toggle");
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-theme", themeToggle.checked);
    });

    // Deactivate account
    document.querySelector("#deactivate-account").addEventListener("click", () => {
      if (confirm("Are you sure you want to deactivate your account? This action is irreversible.")) {
        alert("Your account has been deactivated.");
        // TODO: add backend call here
      }
    });


    // Handle saving notification preferences
document.querySelector("#settings-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const selected = Array.from(document.querySelectorAll('input[name="notifications"]:checked'))
                        .map(el => el.value);

  localStorage.setItem('notificationPreferences', JSON.stringify(selected));

  alert("Settings updated with preferences: " + selected.join(", "));
});

document.addEventListener("DOMContentLoaded", () => {
  const savedPrefs = JSON.parse(
    localStorage.getItem("notificationPreferences") || "[]"
  );
  document.querySelectorAll('input[name="notifications"]').forEach((input) => {
    input.checked = savedPrefs.includes(input.value);
  });
});


// ================================================== PROFILE ============================================================
 // Tab functionality
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });


// ================================= mESSAGE FUNCTIONALITY =================================
      const chatBox = document.getElementById("chat-box");
      const messageInput = document.getElementById("message");

      function addMessage(text, type = "you") {
        const bubble = document.createElement("div");
        bubble.className = `chat-bubble ${type}`;
        bubble.innerText = text;
        chatBox.appendChild(bubble);
        chatBox.scrollTop = chatBox.scrollHeight;
      }

      function sendMessage() {
        const msg = messageInput.value.trim();
        if (!msg) return;

        addMessage(msg, "you");
        messageInput.value = "";

        setTimeout(() => {
          addMessage("Thanks for your message! ✅", "other");
        }, 600);
      }

      // Optional: Enter to send
      messageInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") sendMessage();
      });