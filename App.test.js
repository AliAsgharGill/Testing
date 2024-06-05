import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./src/App";
import "@testing-library/jest-dom"; // Optional, for additional matchers

test("Test First React App Case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  expect(text).toBeInTheDocument();
  const imageTitle = screen.getByTitle("Lemon In Water");
  expect(imageTitle).toBeInTheDocument();
});

test("should have input element", () => {
  render(<App />);
  const inputExists = screen.getByRole("textbox");
  expect(inputExists).toBeInTheDocument();
  const input = screen.getByPlaceholderText("Lemon");
  expect(input).toBeInTheDocument();
});
