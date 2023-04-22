import { render, screen } from "@testing-library/react";
import { NewsType } from "../../types/globalTypes";
import NewsItem from "../NewsItem";
import "@testing-library/jest-dom";

describe("Rendering test", () => {
  test("Should render 'Read More' text, icon, news source, news title, news content, and publishedDate", async () => {
    const item: NewsType = {
      id: "test source id 1",
      title: "test title 1",
      description: "test description 1",
      url: "test url 1",
      imageUrl: "test img url 1",
      content: "test content 1",
      publishedDate: "test publishedAt 1",
      source: "test source name 1",
      author: "test authoer 1",
    };
    render(<NewsItem newsItem={item} />);
    expect(screen.getByText("Read More")).toBeInTheDocument();
    const cameraIcon = document.querySelector(".fa-newspaper");
    expect(cameraIcon).toBeInTheDocument();
    expect(screen.getByText(item.source)).toBeInTheDocument();
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.content)).toBeInTheDocument();
    expect(screen.getByText(item.publishedDate)).toBeInTheDocument();
  });

  test("Should render not more than 90 letters at news title", () => {
    const longText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const item: NewsType = {
      id: "test source id 1",
      title: longText,
      description: "test description 1",
      url: "test url 1",
      imageUrl: "test img url 1",
      content: "test content 1",
      publishedDate: "test publishedAt 1",
      source: "test source name 1",
      author: "test authoer 1",
    };
    render(<NewsItem newsItem={item} />);
    const target = screen.getByText(/Lorem ipsum dolor sit amet/i);
    expect(target.textContent).toContain("…");
    expect(target.textContent?.replace("…", "").length).toBeLessThanOrEqual(90);
  });

  test("Should render no photo text when there is no imageUrl", async () => {
    const item: NewsType = {
      id: "test source id 1",
      title: "test title 1",
      description: "test description 1",
      url: "test url 1",
      imageUrl: "",
      content: "test content 1",
      publishedDate: "test publishedAt 1",
      source: "test source name 1",
      author: "test authoer 1",
    };
    render(<NewsItem newsItem={item} />);
    expect(screen.getByText("No Photo")).toBeInTheDocument();
    const cameraIcon = document.querySelector(".fa-camera");
    expect(cameraIcon).toBeInTheDocument();
  });
});
