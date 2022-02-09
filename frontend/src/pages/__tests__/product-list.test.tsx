import "@testing-library/jest-dom";
import RobotCard from "components/robot-card";
import { cleanup, render, screen } from "@testing-library/react";
import { DateTime } from "luxon";
import { formatPrice } from "utils/helpers";

afterEach(() => {
  cleanup();
});

test("should render robot card component", () => {
  const props = {
    robot: {
      id: "1",
      name: "Mossie Sporer",
      image: "https://robohash.org/MossieSporer.png?size=120x120",
      price: 455.61,
      stock: 5,
      quantity: 0,
      createdAt: "2021-02-11T05:46:47.566Z",
      material: "Plastic",
    },
    addToCart: () => true,
  };

  render(<RobotCard {...props} />);
  const robotCard = screen.getByTestId(`robot-card-${props.robot.id}`);

  expect(robotCard).toBeInTheDocument();
  expect(robotCard).toHaveTextContent(props.robot.name);
  expect(robotCard.getElementsByTagName("img")[0].src).toEqual(
    props.robot.image
  );

  const date = screen.getByTestId(`robot-createdAt-${props.robot.id}`);
  const mockDate = DateTime.fromISO(props.robot.createdAt).toFormat(
    "dd-LL-yyyy"
  );
  expect(date).toHaveTextContent(mockDate);

  const price = screen.getByTestId(`robot-price-${props.robot.id}`);
  const mockPrice = formatPrice(props.robot.price);
  expect(price).toHaveTextContent(mockPrice);
});
