
const products = [
  {
    id: 1,
    name: "Minimal Portfolio",
    description: "Template website portfolio modern dan elegan.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    category: "Website Template"
  },
  {
    id: 2,
    name: "Digital Store",
    description: "Template toko online dengan tampilan profesional.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
    category: "Website Template"
  },
  {
    id: 3,
    name: "Creative Landing Page",
    description: "Landing page clean untuk promosi produk.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
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
      </div>
    </article>
  `).join("");
}

renderProducts();

