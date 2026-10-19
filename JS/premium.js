document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cart-items-container");
  const cart = JSON.parse(localStorage.getItem("ecoPackCart")) || [];

  // Update badge on load
  const badge = document.querySelector(".cart-badge");
  if (badge) {
    badge.textContent = cart.length;
  }

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let html = "<ul style='list-style: none; padding: 0;'>";
  cart.forEach((item, index) => {
    html += `
            <li style="background: #f9f9f9; border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 5px;">
                <strong>Request #${index + 1}: ${item.product}</strong><br>
                Full Name: ${item.fullName}<br>
                Business: ${item.businessName}<br>
                Quantity: ${item.quantity}<br>
                Preferred Date: ${item.preferredDate}<br>
                Requirements: ${item.requirements}
            </li>
          `;
  });
  html += "</ul>";
  container.innerHTML = html;

  // Clear cart functionality
  const clearBtn = document.getElementById("clear-cart");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      localStorage.removeItem("ecoPackCart");
      location.reload();
    });
  }
});

// chatbot n all
/* MOBILE NAVBAR TOGGLE */

document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.getElementById("navbarToggler");
  const navMenuWrapper = document.getElementById("navMenuWrapper");

  if (!navbarToggler || !navMenuWrapper) return;

  const icon = navbarToggler.querySelector("i");

  function closeMenu() {
    navMenuWrapper.classList.remove("active");

    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }

    navbarToggler.setAttribute("aria-expanded", "false");
  }

  navbarToggler.setAttribute("aria-expanded", "false");

  navbarToggler.addEventListener("click", () => {
    const isOpen = navMenuWrapper.classList.toggle("active");

    if (icon) {
      icon.classList.toggle("fa-bars", !isOpen);
      icon.classList.toggle("fa-xmark", isOpen);
    }

    navbarToggler.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after clicking a navigation link
  navMenuWrapper.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when returning to desktop layout
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
});

/* SEARCH FUNCTIONALITY */

function handleSearch(event, type) {
  event.preventDefault();

  const inputId =
    type === "desktop" ? "searchInputDesktop" : "searchInputMobile";

  const input = document.getElementById(inputId);
  const query = input ? input.value.trim() : "";

  if (query) {
    alert(`Searching for: "${query}"`);
  } else {
    alert("Please enter a search term.");
  }
}

// // chatnot start

// // ECO-PACK Chatbot

// function toggleChat() {
//   let chat = document.getElementById("chat");
//   let logo = document.getElementById("chatbotLogo");
//   let cross = document.getElementById("closeIcon");
//   let button = document.getElementById("chatbotButton");

//   if (chat.style.display === "block") {
//     chat.style.display = "none";
//     logo.style.display = "block";
//     cross.style.display = "none";
//     button.style.backgroundColor = "white";
//     button.setAttribute("aria-label", "Open Eco-Pack chatbot");
//   } else {
//     chat.style.display = "block";
//     logo.style.display = "none";
//     cross.style.display = "block";
//     button.style.backgroundColor = "#2B743C";
//     button.setAttribute("aria-label", "Close Eco-Pack chatbot");
//   }
// }

// function addChatMessage(message, className) {
//   let messages = document.getElementById("messages");

//   if (!messages) return;

//   let paragraph = document.createElement("p");
//   paragraph.className = className;
//   paragraph.textContent = message;

//   messages.appendChild(paragraph);
//   messages.scrollTop = messages.scrollHeight;
// }

// function getBotReply(message) {
//   message = message.toLowerCase();

//   if (message.includes("price") || message.includes("cost")) {
//     return "🤖 Our prices depend on packaging type, quantity and design.";
//   } else if (message.includes("custom")) {
//     return "🤖 We create personalized packaging based on your business needs and preferences.";
//   } else if (message.includes("event") || message.includes("wedding")) {
//     return "🤖 We provide sustainable packaging for weddings, parties and special occasions.";
//   } else if (message.includes("order")) {
//     return "🤖 For order assistance, please contact our Eco-Pack team.";
//   } else if (message.includes("subscription")) {
//     return "🤖 Our packaging subscription offers regular supplies with flexible plans.";
//   } else if (message.includes("delivery")) {
//     return "🤖 We offer convenient packaging delivery directly to your business.";
//   } else if (message.includes("eco") || message.includes("recycl")) {
//     return "🤖 We offer environmentally friendly packaging made with sustainable and recyclable materials.";
//   } else if (message.includes("hello") || message.includes("hi")) {
//     return "🤖 Hello! Welcome to Eco-Pack. How can I help you?";
//   } else {
//     return "🤖 Thank you for contacting Eco-Pack! Ask me about custom packaging, events, pricing, delivery or orders.";
//   }
// }

// function sendChatMessage() {
//   let input = document.getElementById("chatInput");

//   if (!input) return;

//   let message = input.value.trim();

//   if (message === "") {
//     alert("Please enter a message");
//     return;
//   }

//   addChatMessage("You: " + message, "userMessage");

//   let answer = getBotReply(message);
//   addChatMessage(answer, "botMessage");

//   input.value = "";
//   input.focus();
// }

// function reply(type) {
//   let answer = "";

//   if (type === "custom") {
//     answer =
//       "🤖 We create personalized packaging designed for your business needs.";
//   } else if (type === "event") {
//     answer =
//       "🤖 Our event packaging is suitable for weddings, parties and special occasions.";
//   } else if (type === "price") {
//     answer = "🤖 Pricing depends on packaging type, quantity and design.";
//   } else if (type === "order") {
//     answer = "🤖 For order help, please contact our Eco-Pack team.";
//   }

//   if (answer !== "") {
//     addChatMessage(answer, "botMessage");
//   }
// }

// Send message when Enter is pressed

document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("chatInput");

  if (input) {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        sendChatMessage();
      }
    });
  }
});

function goToProducts(category) {
  var form =
    category === "custom" || category === "delivery" ? "&form=" + category : "";

  window.location.href =
    "products.html?category=" + encodeURIComponent(category) + form;
}
