import React from "react";
import { render, screen } from "@testing-library/react";
import { NewsType } from "../../types/globalTypes";
import Card from "../Card";
import "@testing-library/jest-dom";
import NewsItem from "../NewsItem";
import userEvent from "@testing-library/user-event";

describe("rendering test", () => {
  const item: NewsType = {
    id: "test source id 1",
    title: "test title 1",
    description: "test description 1",
    url: "https://www.google.com/",
    imageUrl: "",
    content: "test content 1",
    publishedDate: "test publishedAt 1",
    source: "test source name 1",
    author: "test authoer 1",
  };
  test("should render the card component", () => {
    render(<Card newsItem={item} children={<NewsItem newsItem={item} />} />);
    const cardComp = document.querySelector(".card");
    expect(cardComp).toBeInTheDocument();
  });

  test("should be able to access the urlLink", () => {
    window.open = jest.fn();
    render(<Card newsItem={item} children={<NewsItem newsItem={item} />} />);
    const link = document.querySelector(".card");
    if (link) {
      userEvent.click(link);
    }
    expect(window.open).toHaveBeenCalledTimes(1);
  });
});
