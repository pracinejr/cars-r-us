import { PaintColors } from "./paint-colors.js";
import { Technologies } from "./technologies.js";
import { Wheels } from "./wheels.js";
import { Interiors } from "./interiors.js";
// import { addCustomOrder } from "./database.js";

document.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (clickedItem.id === "orderButton") {
    addCustomOrder();
  }
});

export const CarsRUs = () => {
  return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="choices__technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            
        </article>
  `;
};
// ${Orders()}
