const searchInput = document.getElementById("search");
const searchStatus = document.getElementById("search-status");

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Prevent default submit behavior until search interactions are implemented.
      event.preventDefault();
      if (searchStatus) {
        searchStatus.textContent = "Search is not yet available.";
      }
    }
  });
}
