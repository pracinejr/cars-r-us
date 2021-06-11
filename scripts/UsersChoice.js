import {
  getInteriors,
  getWheels,
  getTechnologies,
  getPaintColors,
  getOrders,
} from "./database.js";

const buildOrderListItem = (order) => {
  const interiors = getInteriors();
  const wheels = getWheels();
  const technologies = getTechnologies();
  const paintColors = getPaintColors();

  const foundInteriors = interiors.find((interior) => {
    return interior.id === order.interiorId;
  });
  const foundWheels = wheels.find((wheel) => {
    return wheel.id === order.wheelId;
  });
  const foundTechnologies = technologies.find((technology) => {
    return technology.id === order.technologyId;
  });
  const foundPaintColors = paintColors.find((paintColor) => {
    return paintColor.id === order.paintColorId;
  });

  const totalCost =
    foundInteriors.price +
    foundWheels.price +
    foundTechnologies.price +
    foundPaintColors.price;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
  Order #${order.id} cost ${costString}
    </li>`;
};

export const Orders =
  ("change",
  (event) => {
    const orders = getOrders();

    let html = "<ul>";

    const listItems = orders.map(buildOrderListItem);

    html += listItems.join("");
    html += "</ul>";

    return html;
  });
