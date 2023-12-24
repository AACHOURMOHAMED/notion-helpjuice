const filterBlocksMenu = (searchInput) => {
  const standardizedInput = searchInput
    .slice(1)
    .toLowerCase()
    .replace(/\s+/g, "");

  const options = [...document.querySelectorAll(".popup__item")];
  options.forEach((option) => {
    const title = option.querySelector("h4").textContent.toLowerCase().replace(/\s+/g, "");

    const standardTitle = title.includes("heading")
      ? "heading" + title.replace(/\D/g, "")
      : title;

    if (standardTitle.includes(standardizedInput)) {
      option.style.display = "flex";
    } else {
      option.style.display = "none";
    }
  });
};

export default filterBlocksMenu;
