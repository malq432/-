const products = [

    {
        name: "iPhone 15",
        category: "phone",
        price: "850,000 د.ع",
        rating: "9.2",
        icon: "📱"
    },

    {
        name: "Samsung Galaxy S24",
        category: "phone",
        price: "780,000 د.ع",
        rating: "9.3",
        icon: "📱"
    },

    {
        name: "Xiaomi 14",
        category: "phone",
        price: "650,000 د.ع",
        rating: "8.9",
        icon: "📱"
    },

    {
        name: "ASUS ROG Laptop",
        category: "laptop",
        price: "1,450,000 د.ع",
        rating: "9.5",
        icon: "💻"
    },

    {
        name: "Lenovo Legion",
        category: "laptop",
        price: "1,250,000 د.ع",
        rating: "9.1",
        icon: "💻"
    },

    {
        name: "PlayStation 5",
        category: "gaming",
        price: "850,000 د.ع",
        rating: "9.6",
        icon: "🎮"
    },

    {
        name: "Gaming Headset",
        category: "audio",
        price: "120,000 د.ع",
        rating: "8.7",
        icon: "🎧"
    },

    {
        name: "Sony WH-1000XM5",
        category: "audio",
        price: "350,000 د.ع",
        rating: "9.4",
        icon: "🎧"
    }

];


function displayProducts(list) {

    const grid = document.getElementById("productsGrid");

    grid.innerHTML = "";

    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
                ${product.icon}
            </div>

            <div class="product-name">
                ${product.name}
            </div>

            <div class="product-price">
                ${product.price}
            </div>

            <div class="rating">
                ⭐ ${product.rating}/10
            </div>

            <button
                class="product-button"
                onclick="askAboutProduct('${product.name}')"
            >
                🤖 اسأل AI عنه
            </button>

        `;

        grid.appendChild(card);

    });

}


function filterProducts(category, button) {

    document.querySelectorAll(".category")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    if (category === "all") {

        displayProducts(products);

        return;

    }

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);

}


function addMessage(text, type) {

    const messages = document.getElementById("messages");

    const div = document.createElement("div");

    div.className =
        type === "user"
            ? "message user-message"
            : "message ai-message";

    div.innerHTML = `

        <div class="avatar">
            ${type === "user" ? "👤" : "🤖"}
        </div>

        <div>
            <strong>
                ${type === "user" ? "أنت" : "مساعد الشراء"}
            </strong>

            <p>${text}</p>
        </div>

    `;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;

}


function sendMessage() {

    const input = document.getElementById("userInput");

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        addMessage(
            "وصلتني رسالتك 👍 حاليًا أنا بالنسخة التجريبية. بالخطوة القادمة راح أربطني بذكاء اصطناعي حقيقي حتى أجاوبك على أسئلتك بشكل طبيعي وأقارن لك المنتجات.",
            "ai"
        );

    }, 700);

}


function askSuggestion(text) {

    document.getElementById("userInput").value = text;

    sendMessage();

}


function askAboutProduct(productName) {

    document.getElementById("ai").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        document.getElementById("userInput").value =
            `شنو رأيك بـ ${productName}؟ وهل يستاهل أشتريه؟`;

        sendMessage();

    }, 500);

}


function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}


function startVoice() {

    if (!("webkitSpeechRecognition" in window)) {

        alert("المتصفح ما يدعم الإدخال الصوتي حاليًا.");

        return;

    }

    const recognition =
        new webkitSpeechRecognition();

    recognition.lang = "ar-IQ";

    recognition.start();

    recognition.onresult = function(event) {

        const text =
            event.results[0][0].transcript;

        document.getElementById("userInput").value = text;

    };

}


displayProducts(products);
