import data from "./mockData.json";

export const fetchRobots = async (): Promise<Robots> => {
  return new Promise((resolve, reject) => {
    resolve(processData(data.data));
    reject("Invalid Data");
  });
};

export const processData = (robots: any[]): Robots => {
  return robots.reduce((accumaltor, current, index) => {
    const id = index + 1;
    return {
      ...accumaltor,
      [id]: {
        ...current,
        id: id,
        quantity: 0,
        price: parseFloat(current.price),
        stock: parseInt(current.stock),
      },
    };
  }, {} as Robots);
};
