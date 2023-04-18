import { render, RenderOptions, screen } from "@testing-library/react";
import React, { ReactElement } from "react";
import NewsGrid from "../NewsGrid";
import { newsItemsContext } from "../../store/newsItemContext";
import { createServer } from "../../test/serverFunction";
import { NewsType } from "../../types/globalTypes";
import "@testing-library/jest-dom";
import { customRender } from "../../test/customRender";

type ProviderProps = {
  value: NewsItemsContextObj;
};
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
  const contextValue: NewsItemsContextObj = {
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
  return contextValue;
};

describe("RenderingTest", () => {
  createServer();

  test("Sholud show No News Found text", async () => {
    const contextValue = returnValue([]);
    const providerProps: ProviderProps = {
      value: contextValue,
    };
    await fetch(
      "newsapi.org/v2/top-headlines?category=business&apiKey=873bb42d84c34365a80ba866331d415f",
      { method: "GET" }
    );
    customRender(<NewsGrid />, { providerProps });
    expect(screen.getByText("No News Found.")).toBeInTheDocument();
  });

  test("Sholud show loading text", async () => {
    const contextValue = returnValue(itemsArray, true);
    const providerProps: ProviderProps = {
      value: contextValue,
    };
    await fetch(
      "newsapi.org/v2/top-headlines?category=business&apiKey=873bb42d84c34365a80ba866331d415f",
      { method: "GET" }
    );
    customRender(<NewsGrid />, { providerProps });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Should shows news grid", async () => {
    const contextValue = returnValue(itemsArray);
    const providerProps: ProviderProps = {
      value: contextValue,
    };
    await fetch(
      "newsapi.org/v2/top-headlines?category=business&apiKey=873bb42d84c34365a80ba866331d415f",
      { method: "GET" }
    );
    customRender(<NewsGrid />, { providerProps });

    expect(screen.getByText("test title 1")).toBeInTheDocument();
    expect(screen.getByText("test title 2")).toBeInTheDocument();
  });
});
