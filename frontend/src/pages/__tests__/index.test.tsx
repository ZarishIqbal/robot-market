import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "pages";

afterEach(() => {
  cleanup();
});
test("should render app layout", () => {
  render(<App />);
  const app = screen.getByTestId("app-layout");

  expect(app).toBeInTheDocument();
});
