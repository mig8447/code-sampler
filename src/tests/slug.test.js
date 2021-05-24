import { render } from "@testing-library/react";
import Slug from '../pages/[slug]';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const markdownWithMetadata = fs.readFileSync(path.join(__dirname,"mock","parsedMd", "testsample1.md")).toString();
    const parsedMarkdown = matter(markdownWithMetadata);
    const metaData = {
        title: parsedMarkdown.data.title,
        created: parsedMarkdown.data.created.toString(),
        lastUpdated: parsedMarkdown.data.lastUpdated.toString(),
        tags: parsedMarkdown.data.tags,
        published: parsedMarkdown.data.published,
        labels: parsedMarkdown.data.labels,
        description: parsedMarkdown.data.description,
        languages: parsedMarkdown.data.languages
    }
    

describe("Render slug correctly", () => {
    let props;
    beforeEach(() => {
        props = {
            metaData,
            filename: "testsample1.md",
            content: parsedMarkdown.content
        }
    });
    it("Render title and tags correctly", () => {
        const { getByText } = render(<Slug {...props} />);
        expect(getByText(props.metaData.title)).toBeVisible();
        props.metaData.tags.forEach(tag => {
            expect(getByText(tag)).toBeVisible();
        });

    });
    it("Renders labels correctly", ()  => {
        const { getAllByText } = render(<Slug {...props} />);
        props.metaData.labels.forEach(label => {
            getAllByText(label).forEach(elem => {
                expect(elem).toBeVisible();
            });
        });
    });
});