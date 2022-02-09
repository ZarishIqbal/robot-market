import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { formatPrice } from "utils/helpers";
import CartItem from "components/cart-item";

afterEach(() => {
  cleanup();
});

test("should render cart item component", () => {
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
    removeFromCart: () => true,
  };

  render(<CartItem {...props} />);
  const robotCard = screen.getByTestId(`cart-item-${props.robot.id}`);

  expect(robotCard).toBeInTheDocument();
  expect(robotCard).toHaveTextContent(props.robot.name);
  expect(robotCard.getElementsByTagName("img")[0].src).toEqual(
    props.robot.image
  );

  const price = screen.getByTestId(`robot-price-${props.robot.id}`);
  const mockPrice = formatPrice(props.robot.price * props.robot.quantity);
  expect(price).toHaveTextContent(mockPrice);
});
