
const products = [
  {
    id: 1,
    name: "Dashboard minimalis clean",
    description: "Template website dashboard.",
    price: 35000,
    image: "assets/products/dashboard.png",
    category: "Website Template"
  },
  {
    id: 2,
    name: "Digital Store",
    description: "Template toko online dengan tampilan profesional dan minimalist.",
    price: 40000,
    image: "assets/products/web minimalist.png",
    category: "Website Template"
  },
  {
    id: 3,
    name: "Web Ai",
    description: "Web ai, untuk chat atau asisten pribadi.",
    price: 50000,
    image: "assets/products/Ai.png",
    category: "Website Ai"
  }
];

const productList = document.getElementById("product-list");
const whatsappNumber = "6285719046064";

function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(price);
}

function renderProducts() {
  if (!productList) return;

  productList.innerHTML = products.map(product => {
    const message =
      `Halo, saya ingin membeli ${product.name} dengan harga ${formatPrice(product.price)}. Apakah masih tersedia?`;

    const whatsappLink =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return `
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

          <a
            href="${whatsappLink}"
            class="buy-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beli Sekarang →
          </a>
        </div>
      </article>
    `;
  }).join("");
}

renderProducts();
