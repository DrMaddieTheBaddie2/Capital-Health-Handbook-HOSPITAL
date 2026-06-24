const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Prevent default submit behavior until search interactions are implemented.
      event.preventDefault();
    }
  });
}
