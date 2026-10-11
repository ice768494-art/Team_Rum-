const members = [
  // Replace these sample entries with your real members.
  { name: "Team RUM Admin", username: "@admin", role: "admin", avatar: "", initial: "R", bio: "Community Admin" },
  { name: "Anime Admin", username: "@animeadmin", role: "admin", avatar: "", initial: "A", bio: "Group Admin" },
  { name: "Member One", username: "@member1", role: "member", avatar: "", initial: "M", bio: "TEAM RUM Member" },
  { name: "Member Two", username: "@member2", role: "member", avatar: "", initial: "M", bio: "TEAM RUM Member" }
];

const updates = [
  { date: "LATEST", title: "Welcome to TEAM RUM", text: "All official team updates will be shared here." },
  { date: "COMMUNITY", title: "Stay Active", text: "Keep the community active and maintain a respectful vibe." },
  { date: "REMINDER", title: "Community Rules", text: "No abuse, no fights, no 18+ content and respect everyone." }
];

function memberCard(m) {
  const avatar = m.avatar
    ? `<img src="${m.avatar}" alt="${m.name} profile picture" loading="lazy">`
    : m.initial;
  return `<article class="member">
    <div class="avatar">${avatar}</div>
    <h3>${m.name}</h3>
    <div class="handle">${m.username}</div>
    <p>${m.bio || ""}</p>
    <span class="badge">${m.role === "admin" ? "ADMIN" : "MEMBER"}</span>
  </article>`;
}

function renderMembers() {
  const q = document.getElementById("memberSearch").value.toLowerCase().trim();
  const role = document.getElementById("roleFilter").value;
  const filtered = members.filter(m =>
    (role === "all" || m.role === role) &&
    `${m.name} ${m.username} ${m.bio || ""}`.toLowerCase().includes(q)
  );
  document.getElementById("memberGrid").innerHTML = filtered.map(memberCard).join("");
  document.getElementById("noMembers").classList.toggle("hidden", filtered.length !== 0);
}

function renderAdmins() {
  document.getElementById("adminGrid").innerHTML =
    members.filter(m => m.role === "admin").map(memberCard).join("");
}

function renderUpdates() {
  document.getElementById("updatesGrid").innerHTML = updates.map(u => `
    <article class="update">
      <div class="update-date">${u.date}</div>
      <h3>${u.title}</h3>
      <p>${u.text}</p>
    </article>
  `).join("");
}

document.getElementById("memberSearch").addEventListener("input", renderMembers);
document.getElementById("roleFilter").addEventListener("change", renderMembers);
document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.right = "6%";
  nav.style.top = "65px";
  nav.style.flexDirection = "column";
  nav.style.background = "#101010";
  nav.style.padding = "16px";
  nav.style.border = "1px solid rgba(255,255,255,.08)";
  nav.style.borderRadius = "14px";
});

renderMembers();
renderAdmins();
renderUpdates();
