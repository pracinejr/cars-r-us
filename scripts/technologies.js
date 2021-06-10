import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

document.addEventListener("click", (event) => {
  if (event.target.name === "technology") {
    window.alert(`User chose technology ${event.target.value}`);
  }
});

export const Technologies = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItems = technologies.map((technology) => {
    return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
