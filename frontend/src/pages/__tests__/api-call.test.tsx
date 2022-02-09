import "@testing-library/jest-dom";
import { fetchRobots } from "services";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

//Mock API test
describe("#fetchRobots() using Promises", () => {
  it("should load robots data", async () => {
    return await fetchRobots()
      .then((data) => {
        expect(data).toBeDefined();
        expect(data["1"].name).toEqual("Marlene Lueilwitz");
      })
      .catch((err) => console.log(err));
  });
});
jest.mock("services");
