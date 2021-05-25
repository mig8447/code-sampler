import { render } from "@testing-library/react";
import Results from '../pages/results';
import React from 'react';

const searchIndex = [
  {
    "id": "filename1",
    "title": "Test title 1",
    "created": "Tue Mar 02 2021 07:05:00 GMT-0600 (Central Standard Time)",
    "lastUpdated": "Tue Mar 02 2021 07:05:00 GMT-0600 (Central Standard Time)",
    "tags": ["test number one", "testing file 1"],
    "published": true,
    "description": "Este es el test 1 con filename1 y Test title 1."
  },
  {
    "id": "filename2",
    "title": "Test title 2",
    "created": "Tue Mar 02 2021 07:05:00 GMT-0600 (Central Standard Time)",
    "lastUpdated": "Tue Mar 02 2021 07:05:00 GMT-0600 (Central Standard Time)",
    "tags": ["test number two", "testing file 2"],
    "published": true,
    "description": "Este es el test 2 con filename2 y Test title 2."
  },
  {
    "id": "filename3",
    "title": "Test title 3",
    "created": "Tue Mar 02 2021 07:05:00 GMT-0600 (Central Standard Time)",
    "lastUpdated": "Tue Mar 02 2021 07:05:00 GMT-0600 (Central Standard Time)",
    "tags": ["test number three", "testing file 3"],
    "published": true,
    "description": "Este es el test 3 con filename3 y Test title 3"
  }
];




jest.mock('../search/search-index', () => {
  return ({
    searchIndex
  });
});

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("results renders correctly without url params", () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      query: {
        "keyword": undefined,
        "filters": undefined
      },
    }));
  });

  it("Render with not params on url", () => {
    const { getByText } = render(<Results />);
    expect(getByText("Results for:")).toBeVisible();
    expect(getByText("Your search did not match any document")).toBeVisible();
  });

});

describe("results with url params", () => {
  let query;
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/results',
      query: {
        keyword: "test",
        filters: undefined,
      },
    }));

    query = "test";
  });

  it("Items found renders correctly", () => {
    const { getByText, getAllByText } = render(<Results />);
    expect(getByText("Results for:")).toBeVisible();
    expect(getByText(`Found 3 results for "${query}"`)).toBeVisible();
    searchIndex.forEach(file => {
      expect(getByText(file.title).closest("a")).toHaveAttribute("href", `/${file.id}`);
      expect(getByText(file.description)).toBeVisible();
      file.tags.forEach(tag => {
        expect(getByText(tag)).toBeVisible();
      })
    });
  });
});

describe("results with keyword and filter", () => {
  let query;
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      pathname: '/results',
      query: {
        keyword: "test",
        filters: "test number one",
      },
    }));

    query = "test";
  });

  it("Items found renders correctly with the given filter", () => {
    const { getByText, getAllByText } = render(<Results />);
    expect(getByText("Results for:")).toBeVisible();
    expect(getByText(`Found 3 results for "${query}"`)).toBeVisible();
    getAllByText("test number one").forEach(elem => expect(elem).toBeVisible());
    searchIndex.forEach(file => {
      expect(getByText(file.title).closest("a")).toHaveAttribute("href", `/${file.id}`);
      expect(getByText(file.description)).toBeVisible();
    });
  });
});