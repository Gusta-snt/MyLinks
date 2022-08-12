const links = [
  document.querySelector("#instagram #link"),
  document.querySelector("#linkedin #link"),
  document.querySelector("#github #link"),
];

const githubImg = document.querySelector("#github #link i img");

for (let link of links) {
  link.addEventListener("mouseenter", () => {
    link.classList.add("hover");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("hover");
  });
}
