const container = document.getElementById("postContainer");

const params = new URLSearchParams(window.location.search);
let userId = params.get("userId");

if (!userId) {
  userId = prompt("Lütfen 1 ile 10 arasında bir kullanıcı ID'si girin:");
}

userId = Number(userId);


if (!userId || userId < 1 || userId > 10 || isNaN(userId)) {
  alert("Geçersiz kullanıcı ID'si! Lütfen 1 ile 10 arasında bir sayı girin.");
  throw new Error("Hatalı kullanıcı ID’si girildi.");
}

(async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await res.json();
    renderPosts(posts);
  } catch (err) {
    console.error("Gönderiler alınamadı:", err);
  }
})();

function renderPosts(posts) {
  posts.forEach(post => {
    const col = document.createElement("div");
    col.className = "col-md-6";

    col.innerHTML = `
      <div class="card bg-secondary h-100 text-white">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
