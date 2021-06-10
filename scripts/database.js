const database = {
  paintColors: [
    { id: 1, color: "Silver", price: 200 },
    { id: 2, color: "Midnight Blue", price: 210 },
    { id: 3, color: "FireBrick Red", price: 250 },
    { id: 4, color: "Spring Green", price: 150 },
  ],
  interiors: [
    { id: 1, color: "Beige Fabric", price: 100 },
    { id: 2, color: "Charcoal Fabric", price: 150 },
    { id: 3, color: "White Leather", price: 275 },
    { id: 4, color: "Black Leather", price: 300 },
  ],
  technologies: [
    { id: 1, package: "Basic Package", price: 1000 },
    { id: 2, package: "Navigation Package", price: 1200 },
    { id: 3, package: "Visibility Package", price: 1400 },
    { id: 4, package: "Ultra Package", price: 2000 },
  ],
  wheels: [
    { id: 1, type: "17-inch Pair Radial", price: 800 },
    { id: 2, type: "17-inch Pair Radial Black", price: 850 },
    { id: 3, type: "18-inch Pair Spoke Silver", price: 900 },
    { id: 4, type: "18-inch Pair Spoke Black", price: 950 },
  ],
  customOrders: [
    {
      id: 1,
      paintColorId: 3,
      interiorId: 2,
      technologyId: 3,
      wheelsId: 161465959849,
    },
  ],
  orderBuilder: {},
};

export const getPaintColors = () => {
  return database.paintColors.map((paintColor) => ({ ...paintColor }));
};
export const getInteriors = () => {
  return database.interiors.map((interior) => ({ ...interior }));
};
export const getTechnologies = () => {
  return database.technologies.map((technology) => ({ ...technology }));
};
export const getWheels = () => {
  return database.wheels.map((wheel) => ({ ...wheel }));
};

export const getOrders = () => {
  return database.customOrders.map((customOrder) => ({ ...customOrder }));
};

export const setPaintColor = (id) => {
  database.orderBuilder.paintColorId = id;
};

export const setInterior = (id) => {
  database.orderBuilder.interiorId = id;
};

export const setTechnology = (id) => {
  database.orderBuilder.technologyId = id;
};

export const setWheel = (id) => {
  database.orderBuilder.wheelId = id;
};
