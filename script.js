const container = document.getElementById("userContainer");

(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.error("Veriler çekilemedi:", error);
  }
})();

function renderUsers(users) {
  users.forEach(user => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
      <div class="card h-100 p-3">
        <div class="card-body">
          <h5 class="card-title"><i class="fas fa-user"></i> ${user.name} (@${user.username})</h5>
          
          <p class="card-text">
            <i class="fas fa-location-dot"></i>
            <strong>Adres:</strong><br>
            ${user.address.street}, ${user.address.suite}<br>
            ${user.address.city}, ${user.address.zipcode}
          </p>

          <p class="card-text">
            <i class="fas fa-building"></i>
            <strong>Şirket:</strong><br>
            ${user.company.name} <br><em>"${user.company.catchPhrase}"</em>
          </p>

          <p class="card-text">
            <i class="fas fa-envelope"></i> ${user.email}<br>
            <i class="fas fa-phone"></i> ${user.phone}<br>
            <i class="fas fa-globe"></i> <a href="http://${user.website}" target="_blank">${user.website}</a>
          </p>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}
