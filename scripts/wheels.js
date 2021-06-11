import { getWheels, setWheel } from "./database.js";

const wheels = getWheels();

document.addEventListener("click", (event) => {
  if (event.target.name === "wheel") {
    setWheel(parseInt(event.target.value));
  }
});

export const Wheels = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItems = wheels.map((wheel) => {
    return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.type}
        </li>`;
  });

  html += listItems.join("");
  html += "</ul>";

  return html;
};
