import NewsGrid from "../components/NewsGrid";
import { newsItemsContext } from "../store/newsItemContext";
import { NewsType } from "../types/globalTypes";
import { render, RenderOptions, screen } from "@testing-library/react";
import React, { ReactElement } from "react";

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
type CountryType = {
  label: string;
  value: string;
};
type ProviderProps = {
  value: NewsItemsContextObj;
};
type CustomRenderOptions = {
  providerProps: ProviderProps;
} & Omit<RenderOptions, "queries">;

export const customRender = (
  ui: ReactElement,
  { providerProps, ...renderOptions }: CustomRenderOptions
) => {
  return render(
    <newsItemsContext.Provider {...providerProps}>
      {ui}
    </newsItemsContext.Provider>,
    renderOptions
  );
};
