import React from "react";
import { NewsType } from "../types/globalTypes";
import { customRender } from "../test/customRender";
import NewsGrid from "../components/NewsGrid";
import { render, screen, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import useFetchData from "../hooks/useFetchData";
import { createServer } from "../test/serverFunction";
import App from "../App";
import userEvent from "@testing-library/user-event";
import MockDate from "mockdate";

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

describe("react context test", () => {
  createServer();

  beforeEach(() => {
    console.error = jest.fn();
  });

  test("test the values of isSearching ", () => {
    const contextValue = returnValue([]);
    const providerProps: ProviderProps = {
      value: contextValue,
    };
    customRender(<NewsGrid />, { providerProps });
    const elem = screen.getByText("No News Found.");
    expect(elem).toBeInTheDocument();
  });

  test("test the values of items ", async () => {
    const mockDate = MockDate.set(new Date("2/20/2023"));
    const spy = jest
      .spyOn(global, "Date")
      .mockImplementation(() => mockDate as unknown as string);
    const contextValue = returnValue(itemsArray);
    const providerProps: ProviderProps = {
      value: contextValue,
    };
    customRender(<App />, { providerProps });
    const { result } = renderHook(() => useFetchData());
    await waitFor(() => {
      expect(contextValue.items).toBe(itemsArray);
    });
    expect(contextValue.newsCategoryName).toBe("business");
    expect(contextValue.countryIndex).toBe(0);
    expect(contextValue.countryValue).toBe("all");
    expect(contextValue.isSearching).toBe(false);
  });
});
