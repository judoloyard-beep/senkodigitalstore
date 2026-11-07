
const products = [
  {
    id: 1,
    name: "Minimal Portfolio",
    description: "Template website portfolio modern dan elegan.",
    price: 35000,
    image: "assets/products/Screenshot_20261107-223203_1.jpg",
    category: "Website Template"
  },
  {
    id: 2,
    name: "Digital Store",
    description: "Template toko online dengan tampilan profesional.",
    price: 45000,
    image: "assets/products/Screenshot_20261107-223205_1.jpg",
    category: "Website Template"
  },
  {
    id: 3,
    name: "Creative Landing Page",
    description: "Landing page clean untuk promosi produk.",
    price: 30000,
    image: "assets/products/Screenshot_20261107-224035_1.jpg",
    category: "Website Template"
  }
];

const productList = document.getElementById("product-list");

function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);
}

function renderProducts() {
  productList.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </div>

      <div class="product-info">
        <p>${product.category}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">
          ${formatPrice(product.price)}
        </div>
        <button
          class="detail-button"
          onclick="showProduct(${product.id})"
        >
          Lihat Produk →
        </button>
      </div>
    </article>
  `).join("");
}


function showProduct(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-name").textContent = product.name;
  document.getElementById("modal-category").textContent = product.category;
  document.getElementById("modal-description").textContent = product.description;
  document.getElementById("modal-price").textContent = formatPrice(product.price);

  const modalBuy = document.getElementById("modal-buy");
  modalBuy.href = "https://wa.me/6285719046064?text=" +
    encodeURIComponent("Halo, saya ingin membeli " + product.name);

  document.getElementById("product-modal").classList.add("active");
}

function closeProduct() {
  document.getElementById("product-modal").classList.remove("active");
}

document.getElementById("product-modal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeProduct();
  }
});
renderProducts();

