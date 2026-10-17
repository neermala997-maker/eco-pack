/* MOBILE NAVBAR TOGGLE */

// ECO-PACK Services Popup

function openService(service) {
  document.getElementById("servicePopup").style.display = "flex";

  if (service == "custom") {
    document.getElementById("popupTitle").innerHTML = "Custom Packaging";

    document.getElementById("popupDescription").innerHTML =
      "Personalized eco-friendly packaging designed according to your business needs, style and product.";

    document.getElementById("popupFeatures").innerHTML =
      "<li>Personalized Design</li>" +
      "<li>Eco-friendly Materials</li>" +
      "<li>Different Sizes</li>" +
      "<li>Brand Printing</li>";

    document.getElementById("actionButton").innerHTML =
      '<button class="quote-btn" onclick="goToProducts(\'custom\')">Customize Now</button>';
  }

  if (service == "subscription") {
    document.getElementById("popupTitle").innerHTML = "Packaging Subscription";

    document.getElementById("popupDescription").innerHTML =
      "Get regular eco-friendly packaging supplies with flexible plans designed for your business.";

    document.getElementById("popupFeatures").innerHTML =
      "<li>Regular Packaging Supply</li>" +
      "<li>Flexible Plans</li>" +
      "<li>Business-friendly Pricing</li>" +
      "<li>Scheduled Delivery</li>";

    document.getElementById("actionButton").innerHTML =
      '<button class="quote-btn" onclick="goToProducts(\'subscription\')">Choose a Plan</button>';
  }

  if (service == "event") {
    document.getElementById("popupTitle").innerHTML =
      "Event Packaging Solutions";

    document.getElementById("popupDescription").innerHTML =
      "Sustainable packaging solutions designed for events, celebrations and special occasions.";

    document.getElementById("popupFeatures").innerHTML =
      "<li>Event-based Designs</li>" +
      "<li>Eco-friendly Materials</li>" +
      "<li>Custom Sizes</li>" +
      "<li>Personalized Branding</li>";

    document.getElementById("actionButton").innerHTML =
      '<button class="quote-btn" onclick="goToProducts(\'event\')">Plan Your Event</button>';
  }

  if (service == "delivery") {
    document.getElementById("popupTitle").innerHTML = "Packaging Delivery";

    document.getElementById("popupDescription").innerHTML =
      "Convenient delivery of your packaging directly to your business.";

    document.getElementById("popupFeatures").innerHTML =
      "<li>Doorstep Delivery</li>" +
      "<li>Scheduled Delivery</li>" +
      "<li>Safe Packaging Transport</li>" +
      "<li>Business-friendly Service</li>";

    document.getElementById("actionButton").innerHTML =
      '<button class="quote-btn" onclick="goToProducts(\'delivery\')">Schedule Delivery</button>';
  }

  if (service == "eco") {
    document.getElementById("popupTitle").innerHTML = "Eco Packaging";

    document.getElementById("popupDescription").innerHTML =
      "Environment-friendly packaging made from sustainable and recyclable materials.";

    document.getElementById("popupFeatures").innerHTML =
      "<li>Sustainable Materials</li>" +
      "<li>Recyclable Packaging</li>" +
      "<li>Environment-friendly Design</li>" +
      "<li>Reduced Plastic Use</li>";

    document.getElementById("actionButton").innerHTML =
      '<button class="quote-btn" onclick="goToProducts(\'eco\')">Explore Eco Options</button>';
  }
}

function closeService() {
  document.getElementById("servicePopup").style.display = "none";
}

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

// new added js 
"use strict";

// ==========================================
// ECO-PACK PRODUCT DATA
// Keep these IDs the same as each product button's data-id.
// ==========================================
const PRODUCTS = {
  "burger-box": {
    id: "burger-box",
    name: "Premium Burger Box",
    price: 220,
    image: "./Images/gallery-resturant2.jfif",
    category: "Restaurant",
  },
  "gift-box": {
    id: "gift-box",
    name: "Luxury Gift Box",
    price: 350,
    image: "./Images/gallery-event8.jfif",
    category: "Gift",
  },
  "bamboo-container": {
    id: "bamboo-container",
    name: "Bamboo Food Container",
    price: 300,
    image: "./Images/gallery food5.jfif",
    category: "Restaurant",
  },
  "bakery-box": {
    id: "bakery-box",
    name: "Premium Bakery Box",
    price: 280,
    image: "./Images/gallery-bakery6.jfif",
    category: "Bakery",
  },
  "custom-gift": {
    id: "custom-gift",
    name: "Custom Gift Packaging",
    price: 400,
    image: "./Images/gallery-bakery4.jfif",
    category: "Custom",
  },
  "event-box": {
    id: "event-box",
    name: "Event Gift Box",
    price: 450,
    image: "./Images/gallery-event7.jfif",
    category: "Event",
  },
};

const CART_KEY = "ecoPackCart";
const CUSTOMER_KEY = "ecoPackCustomer";
const ORDER_KEY = "ecoPackOrders";
const CART_PAGE = "gallerycart.html";
const PRODUCTS_PAGE = "premium.html";

function money(amount) {
  return "Nu. " + Number(amount || 0).toLocaleString("en-US");
}

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );
}

function readCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (!Array.isArray(stored)) return [];

    return stored
      .map((item) => {
        if (!item || typeof item !== "object") return null;

        // Support the current product-object format and older cart records.
        const id = item.id || item.productId || "";
        const knownProduct = PRODUCTS[id];
        const name =
          item.name ||
          item.product ||
          (knownProduct && knownProduct.name) ||
          "Eco-Pack product";
        const price = Number(
          item.price ?? (knownProduct && knownProduct.price) ?? 0,
        );
        const quantity = Math.max(
          1,
          Math.min(999, parseInt(item.quantity, 10) || 1),
        );

        return {
          ...item,
          id: id || "legacy-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          name,
          price: Number.isFinite(price) && price >= 0 ? price : 0,
          quantity,
          image:
            item.image ||
            (knownProduct && knownProduct.image) ||
            "./Images/logo.jpg",
        };
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Unable to read Eco-Pack cart:", error);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    return true;
  } catch (error) {
    console.error("Unable to save Eco-Pack cart:", error);
    alert(
      "Unable to save your cart. Please check your browser storage settings.",
    );
    return false;
  }
}

function updateCartCount() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-badge, .cart-count").forEach((element) => {
    element.textContent = count;
  });
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initializeNavbar();
  initializeSearch();
  initializeGalleryFilters();
  initializeBuyNow();
  initializeChatbot();
  updateCartCount();
  renderCart();
});

// ==========================================
// MOBILE NAVBAR
// ==========================================
function initializeNavbar() {
  const toggler = document.getElementById("navbarToggler");
  const menu = document.getElementById("navMenuWrapper");
  if (!toggler || !menu) return;

  const icon = toggler.querySelector("i");
  const closeMenu = () => {
    menu.classList.remove("active");
    toggler.setAttribute("aria-expanded", "false");
    if (icon) {
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    }
  };

  toggler.addEventListener("click", () => {
    const open = menu.classList.toggle("active");
    toggler.setAttribute("aria-expanded", String(open));
    if (icon) {
      icon.classList.toggle("fa-bars", !open);
      icon.classList.toggle("fa-xmark", open);
    }
  });

  menu
    .querySelectorAll(".nav-links a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) closeMenu();
  });
}

// ==========================================
// SEARCH
// Searches on premium.html, including when submitted from this cart page.
// ==========================================
function initializeSearch() {
  const forms = [
    {
      form: document.getElementById("searchFormDesktop"),
      input: document.getElementById("searchInputDesktop"),
    },
    {
      form: document.getElementById("searchFormMobile"),
      input: document.getElementById("searchInputMobile"),
    },
  ];

  forms.forEach(({ form, input }) => {
    if (!form || !input) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) {
        alert("Please enter a product name to search.");
        input.focus();
        return;
      }
      window.location.href =
        PRODUCTS_PAGE + "?search=" + encodeURIComponent(query);
    });
  });
}

// ==========================================
// GALLERY FILTERS (only runs on pages that have these elements)
// ==========================================
function initializeGalleryFilters() {
  const filters = document.querySelectorAll("#filter-list li");
  const cards = document.querySelectorAll("#card-gallery-wrapper > li");
  if (!filters.length || !cards.length) return;

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const group = filter.dataset.group;
      filters.forEach((item) =>
        item.classList.toggle("active", item === filter),
      );
      cards.forEach((card) => {
        const match = group === "0" || card.dataset.group === group;
        card.classList.toggle("hidden", !match);
      });
    });
  });
}

// ==========================================
// BUY NOW / CUSTOMER FORM (only applies to pages with product buttons)
// ==========================================
function initializeBuyNow() {
  const modal = document.getElementById("order-modal");
  const form = document.getElementById("customer-form");
  const selectedId = document.getElementById("selected-product-id");
  const summary = document.getElementById("selected-product-summary");

  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", () => {
      const product = PRODUCTS[button.dataset.id];
      if (!product) {
        alert(
          "Product not found. Check that the button data-id matches a product ID in shop.js.",
        );
        return;
      }

      if (!modal || !form || !selectedId || !summary) {
        if (addProductToCart(product, 1)) {
          alert(product.name + " added to your cart.");
          updateCartCount();
        }
        return;
      }

      selectedId.value = product.id;
      summary.textContent = `${product.name} — ${money(product.price)} per pack`;
      const quantity = document.getElementById("customer-quantity");
      if (quantity) quantity.value = 1;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      document.getElementById("customer-name")?.focus();
    });
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.getElementById("close-modal")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const product = PRODUCTS[selectedId?.value];
    if (!product) {
      alert("Please select a valid product.");
      return;
    }

    const data = new FormData(form);
    const customer = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      address: String(data.get("address") || "").trim(),
      dzongkhag: String(data.get("dzongkhag") || "").trim(),
      note: String(data.get("note") || "").trim(),
    };

    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.dzongkhag
    ) {
      alert("Please complete your name, phone number, address, and Dzongkhag.");
      return;
    }

    const quantity = Math.max(
      1,
      Math.min(999, parseInt(data.get("quantity"), 10) || 1),
    );
    try {
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
    } catch (error) {
      alert("Unable to save customer details in browser storage.");
      return;
    }

    if (!addProductToCart(product, quantity, customer)) return;
    closeModal();
    window.location.href = CART_PAGE;
  });
}

function addProductToCart(product, quantity = 1, customer = null) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === product.id);
  const safeQuantity = Math.max(1, Math.min(999, parseInt(quantity, 10) || 1));

  if (existing) {
    existing.quantity = Math.min(999, existing.quantity + safeQuantity);
    if (customer) existing.customer = customer;
  } else {
    cart.push({
      ...product,
      quantity: safeQuantity,
      ...(customer ? { customer } : {}),
    });
  }
  return saveCart(cart);
}

// ==========================================
// CART DISPLAY
// The HTML must contain <div id="cart-content"></div>.
// ==========================================
function renderCart() {
  const container = document.getElementById("cart-content");
  if (!container) return;

  const cart = readCart();
  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fa-solid fa-basket-shopping" aria-hidden="true"></i>
        <h2>Your cart is empty</h2>
        <p>Explore our premium packaging and add products to your cart.</p>
        <a class="primary-btn" href="${PRODUCTS_PAGE}">Explore Premium Products</a>
      </div>`;
    return;
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = 50;
  const total = subtotal + delivery;

  container.innerHTML = `
    <div class="cart-layout">
      <section class="cart-items" aria-label="Cart items">
        ${cart
          .map(
            (item) => `
          <article class="cart-item">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" onerror="this.onerror=null;this.src='./Images/logo.jpg';">
            <div class="cart-item-details">
              <h3>${escapeHtml(item.name)}</h3>
              <p>${money(item.price)} per pack</p>
              <div class="quantity-control">
                <button type="button" data-action="decrease" data-id="${escapeHtml(item.id)}" aria-label="Decrease quantity" ${item.quantity <= 1 ? "disabled" : ""}>−</button>
                <span aria-label="Quantity">${item.quantity}</span>
                <button type="button" data-action="increase" data-id="${escapeHtml(item.id)}" aria-label="Increase quantity" ${item.quantity >= 999 ? "disabled" : ""}>+</button>
                <button type="button" class="remove-btn" data-action="remove" data-id="${escapeHtml(item.id)}">Remove</button>
              </div>
            </div>
            <div class="cart-line-total">${money(item.price * item.quantity)}</div>
          </article>`,
          )
          .join("")}
      </section>
      <aside class="cart-summary">
        <h2>Order Summary</h2>
        <div class="summary-line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
        <div class="summary-line"><span>Estimated delivery</span><strong>${money(delivery)}</strong></div>
        <div class="summary-line summary-total"><span>Total</span><strong>${money(total)}</strong></div>
        <p class="muted">Delivery fee is a sample estimate and may vary by location.</p>
        <button type="button" class="primary-btn full-btn" id="confirm-order">Confirm Order <i class="fa-solid fa-check"></i></button>
        <a class="primary-btn full-btn secondary-btn" href="${PRODUCTS_PAGE}">Continue Shopping</a>
        <button type="button" class="remove-btn clear-cart-btn" id="clear-cart">Clear Cart</button>
      </aside>
    </div>`;

  container.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const id = button.dataset.id;
      const updated = readCart();
      const item = updated.find((entry) => entry.id === id);
      if (!item) return;

      if (action === "increase")
        item.quantity = Math.min(999, item.quantity + 1);
      if (action === "decrease") item.quantity = Math.max(1, item.quantity - 1);
      const finalCart =
        action === "remove"
          ? updated.filter((entry) => entry.id !== id)
          : updated;
      if (saveCart(finalCart)) renderCart();
    });
  });

  document.getElementById("clear-cart")?.addEventListener("click", () => {
    if (!window.confirm("Remove all products from your cart?")) return;
    if (saveCart([])) renderCart();
  });
  document
    .getElementById("confirm-order")
    ?.addEventListener("click", confirmOrder);
}

// ==========================================
// CONFIRM DEMONSTRATION ORDER
// Orders are saved only in this browser; no supplier or payment service is connected.
// ==========================================
function confirmOrder() {
  const cart = readCart();
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  let customer = null;
  try {
    customer = JSON.parse(localStorage.getItem(CUSTOMER_KEY) || "null");
  } catch (error) {
    customer = null;
  }

  // Also support a customer record attached to an individual cart item.
  if (!customer)
    customer = cart.find((item) => item.customer)?.customer || null;
  if (
    !customer ||
    !customer.name ||
    !customer.phone ||
    !customer.address ||
    !customer.dzongkhag
  ) {
    alert(
      "Customer details are missing. Please go to the Premium Products page, select Buy Now, and complete your name, phone number, address, and Dzongkhag.",
    );
    return;
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = 50;
  const total = subtotal + delivery;
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (
    !window.confirm(
      `Confirm your Eco-Pack order?\n\nCustomer: ${customer.name}\nItems: ${itemCount}\nTotal: ${money(total)}\n\nThis is a demonstration order; no payment will be processed.`,
    )
  )
    return;

  try {
    const orders = JSON.parse(localStorage.getItem(ORDER_KEY) || "[]");
    if (!Array.isArray(orders)) throw new Error("Order history is invalid.");
    orders.push({
      orderId: "ECO-" + Date.now(),
      customer,
      items: cart,
      subtotal,
      delivery,
      total,
      status: "Demo order recorded",
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    renderCart();
    alert(
      `Thank you, ${customer.name}!\n\nYour demonstration order has been saved in this browser.\nTotal: ${money(total)}\n\nNo payment was processed, and the order was not sent to a business.`,
    );
  } catch (error) {
    console.error("Unable to record order:", error);
    alert("The order could not be saved. Please check your browser storage.");
  }
}

// Compatibility helper for service-page buttons that call goToProducts(category).
function goToProducts(category) {
  const form =
    category === "custom" || category === "delivery"
      ? "&form=" + encodeURIComponent(category)
      : "";
  window.location.href =
    "products.html?category=" + encodeURIComponent(category) + form;
}


// premium 
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



