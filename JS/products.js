/* =====================================
   ECO-PACK: PRODUCT FILTER AND SEARCH
===================================== */

// Remember the selected category
var activeCategory = "all";

// Filter products by category and search
function filterProducts(category) {
  activeCategory = category;

  var cards = document.getElementsByClassName("product-card");
  var searchInput = document.getElementById("searchInput");

  var searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";

  var found = 0;

  for (var i = 0; i < cards.length; i++) {
    var heading = cards[i].querySelector("h3");
    var paragraph = cards[i].querySelector("p");

    var name = heading ? heading.textContent.toLowerCase() : "";

    var description = paragraph ? paragraph.textContent.toLowerCase() : "";

    var productCategory = cards[i].getAttribute("data-category");

    var categoryMatch = category === "all" || productCategory === category;

    var searchMatch =
      name.includes(searchValue) || description.includes(searchValue);

    if (categoryMatch && searchMatch) {
      cards[i].style.display = "flex";
      found++;
    } else {
      cards[i].style.display = "none";
    }
  }

  var noProducts = document.getElementById("noProducts");

  if (noProducts) {
    noProducts.textContent = found === 0 ? "No products found." : "";
  }
}

// Search products without resetting the selected category
function searchProducts() {
  filterProducts(activeCategory);
}

/* =====================================
   PRODUCT DETAILS POPUP
===================================== */

function showDetails(name, description, price) {
  document.getElementById("detailsTitle").textContent = name;

  document.getElementById("detailsDescription").textContent = description;

  document.getElementById("detailsPrice").textContent = price;

  document.getElementById("detailsPopup").style.display = "flex";
}

/* =====================================
   OPEN PRODUCT REQUEST FORM
===================================== */

function openForm(product) {
  document.getElementById("formPopup").style.display = "flex";

  var productType = document.getElementById("productType");
  var matched = false;

  if (productType) {
    for (var i = 0; i < productType.options.length; i++) {
      if (
        productType.options[i].text.trim().toLowerCase() ===
        product.trim().toLowerCase()
      ) {
        productType.selectedIndex = i;
        matched = true;
        break;
      }
    }

    if (!matched) {
      productType.selectedIndex = 0;
    }
  }

  document.getElementById("detailsPopup").style.display = "none";

  var formMessage = document.getElementById("formMessage");

  if (formMessage) {
    formMessage.textContent = "";
  }
}

/* =====================================
   CLOSE POPUPS
===================================== */

function closePopup() {
  var detailsPopup = document.getElementById("detailsPopup");
  var formPopup = document.getElementById("formPopup");

  if (detailsPopup) {
    detailsPopup.style.display = "none";
  }

  if (formPopup) {
    formPopup.style.display = "none";
  }
}

// Close popup when clicking outside its content
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup")) {
    closePopup();
  }
});

// Close popup when pressing Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

/* =====================================
   SHOPPING CART
===================================== */

// Get cart data safely
function getCart() {
  try {
    var cart = JSON.parse(localStorage.getItem("ecoPackCart"));

    return Array.isArray(cart) ? cart : [];
  } catch (error) {
    return [];
  }
}

// Submit form and save the request to the cart
function submitForm(event) {
  event.preventDefault();

  var customerName = document.getElementById("customerName");

  var formData = {
    fullName: customerName ? customerName.value.trim() : "N/F",

    email: document.getElementById("customerEmail")?.value || "N/F",

    phone: document.getElementById("customerPhone")?.value || "N/F",

    businessName: document.getElementById("businessName")?.value || "N/F",

    product: document.getElementById("productType")?.value || "Product Enquiry",

    quantity: document.getElementById("quantity")?.value || 1,

    preferredDate: document.getElementById("preferredDate")?.value || "",

    requirements: document.getElementById("requirements")?.value || "",
  };

  // Save the request
  var cart = getCart();
  cart.push(formData);

  try {
    localStorage.setItem("ecoPackCart", JSON.stringify(cart));
  } catch (error) {
    alert("Unable to save your request. Please try again.");
    return;
  }

  // Update the cart counter
  updateCartBadge();

  // Show success alert after saving the request
  alert(
    "Thank you, " +
      (formData.fullName || "Customer") +
      "! Your request has been added to the Eco-Pack cart successfully.",
  );

  // Reset the form
  var requestForm = document.getElementById("requestForm");

  if (requestForm) {
    requestForm.reset();
  }

  // Close the popup
  closePopup();
}

/* =====================================
   UPDATE SHOPPING CART BADGE
===================================== */

function updateCartBadge() {
  var cart = getCart();
  var badge = document.querySelector(".cart-badge");

  if (badge) {
    badge.textContent = cart.length;
  }
}

// Update the cart badge when the page loads
document.addEventListener("DOMContentLoaded", function () {
  updateCartBadge();
});

// Update the badge when the cart changes in another tab
window.addEventListener("storage", function (event) {
  if (event.key === "ecoPackCart") {
    updateCartBadge();
  }
});

/* =====================================
   NEWSLETTER SUBSCRIPTION
===================================== */

function subscribe(event) {
  event.preventDefault();

  var emailInput = document.getElementById("emailInput");

  if (!emailInput || !emailInput.value.trim()) {
    alert("Please enter your email address.");
    return;
  }

  var email = emailInput.value.trim();

  alert("Thank you for your feedback" + email + "!");

  emailInput.value = "";
}

// chatnot start

// ECO-PACK Chatbot

function toggleChat() {
  let chat = document.getElementById("chat");
  let logo = document.getElementById("chatbotLogo");
  let cross = document.getElementById("closeIcon");
  let button = document.getElementById("chatbotButton");

  if (chat.style.display === "block") {
    chat.style.display = "none";
    logo.style.display = "block";
    cross.style.display = "none";
    button.style.backgroundColor = "white";
    button.setAttribute("aria-label", "Open Eco-Pack chatbot");
  } else {
    chat.style.display = "block";
    logo.style.display = "none";
    cross.style.display = "block";
    button.style.backgroundColor = "#2B743C";
    button.setAttribute("aria-label", "Close Eco-Pack chatbot");
  }
}

function addChatMessage(message, className) {
  let messages = document.getElementById("messages");

  if (!messages) return;

  let paragraph = document.createElement("p");
  paragraph.className = className;
  paragraph.textContent = message;

  messages.appendChild(paragraph);
  messages.scrollTop = messages.scrollHeight;
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("price") || message.includes("cost")) {
    return "🤖 Our prices depend on packaging type, quantity and design.";
  } else if (message.includes("custom")) {
    return "🤖 We create personalized packaging based on your business needs and preferences.";
  } else if (message.includes("event") || message.includes("wedding")) {
    return "🤖 We provide sustainable packaging for weddings, parties and special occasions.";
  } else if (message.includes("order")) {
    return "🤖 For order assistance, please contact our Eco-Pack team.";
  } else if (message.includes("subscription")) {
    return "🤖 Our packaging subscription offers regular supplies with flexible plans.";
  } else if (message.includes("delivery")) {
    return "🤖 We offer convenient packaging delivery directly to your business.";
  } else if (message.includes("eco") || message.includes("recycl")) {
    return "🤖 We offer environmentally friendly packaging made with sustainable and recyclable materials.";
  } else if (message.includes("hello") || message.includes("hi")) {
    return "🤖 Hello! Welcome to Eco-Pack. How can I help you?";
  } else {
    return "🤖 Thank you for contacting Eco-Pack! Ask me about custom packaging, events, pricing, delivery or orders.";
  }
}

function sendChatMessage() {
  let input = document.getElementById("chatInput");

  if (!input) return;

  let message = input.value.trim();

  if (message === "") {
    alert("Please enter a message");
    return;
  }

  addChatMessage("You: " + message, "userMessage");

  let answer = getBotReply(message);
  addChatMessage(answer, "botMessage");

  input.value = "";
  input.focus();
}

function reply(type) {
  let answer = "";

  if (type === "custom") {
    answer =
      "🤖 We create personalized packaging designed for your business needs.";
  } else if (type === "event") {
    answer =
      "🤖 Our event packaging is suitable for weddings, parties and special occasions.";
  } else if (type === "price") {
    answer = "🤖 Pricing depends on packaging type, quantity and design.";
  } else if (type === "order") {
    answer = "🤖 For order help, please contact our Eco-Pack team.";
  }

  if (answer !== "") {
    addChatMessage(answer, "botMessage");
  }
}

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


// cart 
