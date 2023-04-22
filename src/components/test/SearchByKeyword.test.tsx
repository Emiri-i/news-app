import React from "react";
import { render, screen } from "@testing-library/react";
import SearchByKeyWord from "../SearchByKeyword";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { newsItemsContext } from "../../store/newsItemContext";
import { NewsType } from "../../types/globalTypes";
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

describe("Rendering test", () => {
  test("Should render label, input, and search button", () => {
    render(<SearchByKeyWord />);
    const label = screen.getByText("Search By Keyword");
    expect(label).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should set values in stores when the submit button is clicked", () => {
    const contextValue = returnValue(itemsArray);
    const providerProps: ProviderProps = {
      value: contextValue,
    };
    customRender(<SearchByKeyWord />, { providerProps });
    expect(contextValue.setKeyWord).toHaveBeenCalledTimes(0);
    const button = screen.getByRole("button");
    userEvent.keyboard("usa");
    userEvent.click(button);

    expect(contextValue.setKeyWord).toHaveBeenCalledTimes(1);
  });
});
