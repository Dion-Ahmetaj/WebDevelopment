document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("categories-container")) {
      fetch("public/categories.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(categories => {
          const templateSource = document.getElementById("category-template").innerHTML;
          const template = Handlebars.compile(templateSource);
          const container = document.getElementById("categories-container");
          container.innerHTML = template({ categories });
        })
        .catch(error => console.error("Error fetching categories:", error));
    }
  });  