
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
