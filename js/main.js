// Data produk
const products = [
    {
        id: 1,
        name: "Nike Air Flight 89",
        price: 1299000,
        image: "images/sepatu1.png",
        description: "Sneakers casual dengan desain modern dan nyaman digunakan sehari-hari. Tersedia dalam berbagai ukuran."
    },
    {
        id: 2,
        name: "Air Jordan 11 Retro",
        price: 1799000,
        image: "images/sepatu2.png",
        description: "Sepatu running dengan teknologi terbaru untuk kenyamanan maksimal saat berolahraga."
    },
    {
        id: 3,
        name: "Jordan Legacy 312 (High)",
        price: 1099000,
        image: "images/sepatu3.png",
        description: "Sepatu formal dengan bahan berkualitas tinggi, cocok untuk acara resmi dan kantor."
    }
];

// Cart array untuk menyimpan produk yang dipilih
let cart = [];

// Fungsi untuk menampilkan produk
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4';
        productCard.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price">Rp ${product.price.toLocaleString('id-ID')}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    // Menambahkan event listener untuk tombol "Tambah ke Keranjang"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification('Produk berhasil ditambahkan ke keranjang!');
    }
}

// Fungsi untuk memperbarui jumlah item di keranjang
function updateCartCount() {
    const cartCount = document.querySelector('.fa-shopping-cart');
    if (cartCount) {
        cartCount.setAttribute('data-count', cart.length);
    }
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Fungsi untuk menangani form kontak
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Pesan Anda telah terkirim!');
    this.reset();
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-section, .about-section');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.backgroundPositionY = (scrolled * speed) + 'px';
    });
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartCount();
    
    // Aktifkan animasi hero section
    const heroImage = document.querySelector('.hero-image');
    const animateTexts = document.querySelectorAll('.animate-text');
    
    setTimeout(() => {
        heroImage.classList.add('animate-image');
        animateTexts.forEach(text => {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
        });
    }, 500);
});

// Parallax effect untuk hero image
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    const scrolled = window.pageYOffset;
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
}); 