/* This code snippet is a set of unit tests written in JavaScript using the Jest testing framework and
the React Testing Library. Here's a breakdown of what the code is doing: */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./src/App";
import "@testing-library/jest-dom";

test("Test First React App Case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  expect(text).toBeInTheDocument();
  const imageTitle = screen.getByTitle("Lemon In Water");
  expect(imageTitle).toBeInTheDocument();
});

test("Image onChange", () => {
  render(<App />);
  const image = screen.getByRole("textbox");
  fireEvent.change(image, { target: { value: "Lemon" } });
  expect(image.value).toBe("Lemon");
});

test("onChange should be called", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("");
  const onChange = jest.fn();
  input.addEventListener("change", onChange);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test("should have input element", () => {
  render(<App />);

  const inputExists = screen.getByRole("textbox");
  expect(inputExists).toBeInTheDocument();
  expect(inputExists).toHaveAttribute("name", "Lemon");
  expect(inputExists).toHaveAttribute("id", "Lemon");
  expect(inputExists).toHaveAttribute("type", "text");

  const inputPlaceholder = screen.getByPlaceholderText("Lemon");
  expect(inputPlaceholder).toBeInTheDocument();

  const inputTitle = screen.getByTitle("Lemon");
  expect(inputTitle).toBeInTheDocument();
});

test("onClick of Button", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  // for checking when button get clicked, is it showing vite on the screen
  expect(screen.getByText("Vite")).toBeInTheDocument();
  // for checking when button get clicked, is it changing button text
  expect(button.textContent).toBe("Vite");
  // expect(screen.getByText("Vite")).toBeInTheDocument();
});

// we can use describe to group tests into categories also we can use test.skip to skip a test and test.only to only run a test
describe("Image Testing", () => {
  test("should render an image", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("image with title", () => {
    render(<App />);
    const imageTitle = screen.getByTitle("Lemon In Water");
    expect(imageTitle).toBeInTheDocument();
  });
});

describe.skip("Image Testing With Alt", () => {
  test("should render an image with title", () => {
    render(<App />);
    const imageAlt = screen.getByAltText("Lemon In Water");
    expect(imageAlt).toBeInTheDocument();
  });
});
