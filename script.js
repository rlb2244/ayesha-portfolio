setTimeout(() => {
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.content').classList.remove('hidden');
}, 3000);
function toggleLang() {
  alert("Language toggle feature coming soon!");
}
document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll("section").forEach(section => {
    section.style.display = section.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});
function toggleDark() {
  document.body.classList.toggle("dark");
}
