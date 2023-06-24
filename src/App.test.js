import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders download pdf", () => {
  render(<App />);
  const linkElement = screen.getByText(/download pdf/i);
  expect(linkElement).toBeInTheDocument();
});
