const panels = document.querySelectorAll("div.panel");
// console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // This line does the same job as removeActiveClasses function
    document.querySelector("div.active").classList.remove("active");

    // removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
