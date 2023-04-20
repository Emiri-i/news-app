import React from "react";
import SelectCountry from "../SelectCountry";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Rendering test", () => {
  test("Should render 'Select country' text, and React Selct component", () => {
    render(<SelectCountry />);
    const text = screen.getByText("Select Country");
    expect(text).toBeInTheDocument();
    const select = document.querySelector(".react-select");
    expect(select).toBeInTheDocument();
  });
});
