import {
  render,
  renderHook,
  RenderHookResult,
  screen,
} from "@testing-library/react";
import React from "react";
import NewsGrid from "../NewsGrid";
import newsItemsContext from "../../store/newsItemContext";
import NewsItemContextProvider from "../../store/newsItemContext";

import { setupServer } from "msw/node";
import { rest } from "msw";

import { NewsType } from "../../types/globalTypes";
import useFetchData from "../../hooks/useFetchData";
import ReactDOM from "react-dom";

// const ItemContextTest = {
//   items: [
//     {
//       author: "test authoer 1",
//       content: "test content 1",
//       description: "test description 1",
//       publishedAt: "test publishedAt 1",
//       source: {
//         id: "test source id 1",
//         name: "test source name 1",
//       },
//       title: "test title 1",
//       url: "test url 1",
//       urlToImage: "test urlToImage 1",
//     },
//     {
//       author: "test authoer 2",
//       content: "test content 2",
//       description: "test description 2",
//       publishedAt: "test publishedAt 2",
//       source: {
//         id: "test source id 2",
//         name: "test source name 2",
//       },
//       title: "test title 2",
//       url: "test url 2",
//       urlToImage: "test urlToImage 2",
//     },
//   ],
//   setItems: jest.fn(),
//   newsCategoryName: "business",
//   setNewsCategoryName: jest.fn(),
//   countryValue: "all",
//   countryIndex: 0,
//   onCountryChange: jest.fn(),
//   searchKeyWord: "",
//   setKeyWord: jest.fn(),
//   isSearching: false,
//   setIsSearching: jest.fn(),
// };
const handlers = [
  rest.get("/newsapi.org/v2/top-headlines", (req, res, ctx) => {
    const query = req.url.searchParams.get("category");
    console.log(query);

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

// function renderUseContext(val: NewsItemsContextObj) {
//   return render(
//     <newsItemsContext.Provider value={val}>
//       <NewsGrid />
//     </newsItemsContext.Provider>
//   );
// }
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

const ItemContext = React.createContext<NewsItemsContextObj>({
  items: [
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
  ],
  setItems: () => {},
  newsCategoryName: "business",
  setNewsCategoryName: () => {},
  countryValue: "all",
  countryIndex: 0,
  onCountryChange: () => {},
  searchKeyWord: "",
  setKeyWord: () => {},
  isSearching: false,
  setIsSearching: () => {},
});

describe("RenderingTest", () => {
  let renderHookResult: RenderHookResult<void, null>;

  test("Shows news grid", async () => {
    // renderHookResult = await renderHook(() => useFetchData(), {
    //   wrapper: (props) => (
    //     <NewsItemContextProvider>{props.children}</NewsItemContextProvider>
    //   ),
    // });
    render(
      <newsItemsContext.Provider value={ItemContext}>
        <NewsGrid />
      </newsItemsContext.Provider>
    );

    // render(<NewsGrid />, { wrapper: NewsItemContextProvider });
    await pause();
    screen.debug();
  });
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
