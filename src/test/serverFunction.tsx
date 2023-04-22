import React from "react";
import { setupServer } from "msw/node";
import { rest } from "msw";

export function createServer() {
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
}
