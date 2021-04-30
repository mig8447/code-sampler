import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import './mock/searchMock/topTags-index';
import {topTags} from './mock/searchMock/topTags-index';

describe("Index", () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      recentContent: [{
        id: "filename1",
        title: "titleFile1",
        created: "2021-03-02T13:05:00.000Z",
        lastUpdated: "2021-03-02T13:05:00.000Z",
        tags: ["tag1", "tag2"],
        published: true,
        description: "this is the description of the recent content"
      }],
      tags:["topTag", "topTag2", "topTag3"]
    };
  });

  it("renders without crashing", () => {
    const {getByRole}  = render(<Index recentContent={expectedProps.recentContent} 
      tags={expectedProps.tags} />);
    
    expect(
      getByRole("heading", { name: "Code Sampler" })
    ).toBeInTheDocument();
    expect(
      getByRole("heading", { name: "Recent content" })
    ).toBeInTheDocument();
    expect(
      getByRole("heading", { name: "Top Tags" })
    ).toBeInTheDocument();
  });
  
  it("renders recent content", () => {
    const { getByText } = render(<Index recentContent={expectedProps.recentContent} 
    tags={expectedProps.tags} />);
    expectedProps.recentContent.forEach(recent => {
      expect(getByText(recent.description)).toBeVisible();
      recent.tags.forEach(tag => {
        expect(getByText(tag)).toBeVisible();
      });
    });
  });

  it("Top tags renders correctly", () => {
    const { getByText } = render(<Index recentContent={expectedProps.recentContent} tags={expectedProps.tags} />)
    expectedProps.tags.forEach(tag => {
      expect(getByText("count: "+topTags[tag].length))
      expect(getByText(tag)).toBeVisible();
      topTags[tag].slice(0,5).forEach(file => {
        expect(getByText(file.title)).toBeVisible();
        expect(getByText(file.title).closest("a")).toHaveAttribute("href", `/${file.filename}`);
      });
    });
  });

});