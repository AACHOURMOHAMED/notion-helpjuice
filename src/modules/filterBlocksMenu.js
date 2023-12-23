const filterBlocksMenu = (searchInput) => {
  const standardizedInput = searchInput
    .slice(1)
    .toLowerCase()
    .replace(/\s+/g, "");

  const options = [...document.querySelectorAll(".popup__item")];
  options.forEach((option) => {
    const title = option
      .querySelector("h4")
      .textContent.toLowerCase()
      .replace(/\s+/g, "");

    const standardTitle = title.includes("heading")
      ? "heading" + title.replace(/\D/g, "")
      : title;

    option.style.display = standardTitle.includes(standardizedInput)
      ? "flex"
      : "none";
  });
};

export default filterBlocksMenu;
