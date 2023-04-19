import React from "react";
import FilterNews from "../FilterNews";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Rendering test", () => {
  test("Should render the component", () => {
    render(<FilterNews />);
    const targetComp = document.querySelector(".filter-wrapper");
    expect(targetComp).toBeInTheDocument();
  });
});
