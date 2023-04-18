import { render, screen } from "@testing-library/react";
import React from "react";
import NewsGrid from "../NewsGrid";
import { newsItemsContext } from "../../store/newsItemContext";
import { setupServer } from "msw/node";
import { rest } from "msw";

import { NewsType } from "../../types/globalTypes";
import "@testing-library/jest-dom";

const handlers = [
  rest.get("/newsapi.org/v2/top-headlines", (req, res, ctx) => {
    const query = req.url.searchParams.get("category");

    return res(
      ctx.json({
        status: "ok",
        articles: [
          {
            author: "test authoer 1",
            content: "test content 1",
            description: "test description 1",
            publishedAt: "2023-04-07T14:30:46Z",
            source: {
              id: "test source id 1",
              name: "test source name 1",
            },
            title: "test title 1",
            url: "test url 1",
            urlToImage: "test urlToImage 1",
          },
          {
            author: "test authoer 2",
            content: "test content 2",
            description: "test description 2",
            publishedAt: "2023-04-07T14:30:46Z",
            source: {
              id: "test source id 2",
              name: "test source name 2",
            },
            title: "test title 2",
            url: "test url 2",
            urlToImage: "test urlToImage 2",
          },
        ],
      })
    );
  }),
];
const server = setupServer(...handlers);
beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

type CountryType = {
  label: string;
  value: string;
};
type NewsItemsContextObj = {
  items: NewsType[];
  setItems: (Array: NewsType[]) => void;
  newsCategoryName: string;
  setNewsCategoryName: (categoryName: string) => void;
  countryValue: string;
  countryIndex: number;
  onCountryChange: (e: CountryType | unknown) => void;
  searchKeyWord: string;
  setKeyWord: (keyword: string | undefined) => void;
  isSearching: boolean;
  setIsSearching: (isSearching: boolean) => void;
};
type itemObjType = {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  content: string;
  publishedDate: string;
  source: string;
  author: string;
};
const itemsArray: itemObjType[] = [
  {
    id: "test source id 1",
    title: "test title 1",
    description: "test description 1",
    url: "test url 1",
    imageUrl: "test urlToImage 1",
    content: "test content 1",
    publishedDate: "test publishedAt 1",
    source: "test source name 1",
    author: "test authoer 1",
  },
  {
    id: "test source id 2",
    title: "test title 2",
    description: "test description 2",
    url: "test url 2",
    imageUrl: "test urlToImage 2",
    content: "test content 2",
    publishedDate: "test publishedAt 2",
    source: "test source name 2",
    author: "test authoer 2",
  },
];
const returnValue = (items: itemObjType[], isSearching?: boolean) => {
  const contextValue1: NewsItemsContextObj = {
    items: items,
    setItems: jest.fn(),
    newsCategoryName: "business",
    setNewsCategoryName: jest.fn(),
    countryValue: "all",
    countryIndex: 0,
    onCountryChange: jest.fn(),
    searchKeyWord: "",
    setKeyWord: jest.fn(),
    isSearching: isSearching ? isSearching : false,
    setIsSearching: jest.fn(),
  };
  return contextValue1;
};

describe("RenderingTest", () => {
  test("Sholud show No News Found text", async () => {
    const contextValue = returnValue([]);
    await fetch(
      "newsapi.org/v2/top-headlines?category=business&apiKey=873bb42d84c34365a80ba866331d415f",
      { method: "GET" }
    );
    render(
      <newsItemsContext.Provider value={contextValue}>
        <NewsGrid />
      </newsItemsContext.Provider>
    );
    expect(screen.getByText("No News Found.")).toBeInTheDocument();
  });

  test("Sholud show loading text", async () => {
    const contextValue = returnValue(itemsArray, true);
    await fetch(
      "newsapi.org/v2/top-headlines?category=business&apiKey=873bb42d84c34365a80ba866331d415f",
      { method: "GET" }
    );
    render(
      <newsItemsContext.Provider value={contextValue}>
        <NewsGrid />
      </newsItemsContext.Provider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Should shows news grid", async () => {
    const contextValue = returnValue(itemsArray);
    await fetch(
      "newsapi.org/v2/top-headlines?category=business&apiKey=873bb42d84c34365a80ba866331d415f",
      { method: "GET" }
    );
    render(
      <newsItemsContext.Provider value={contextValue}>
        <NewsGrid />
      </newsItemsContext.Provider>
    );

    expect(screen.getByText("test title 1")).toBeInTheDocument();
    expect(screen.getByText("test title 2")).toBeInTheDocument();
  });
});
