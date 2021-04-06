import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<Index slugs = {["template1", "template2"]}/>);
    expect(
      screen.getByRole("heading", { name: "Hello World" })
    ).toBeInTheDocument();
  });
});