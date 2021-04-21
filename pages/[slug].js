import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import remark from 'remark';
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remark2react from 'remark-react';
import CodeSnippets from "../components/CodeSnippets";

const Post = ({ metaData, content }) => {
    const [theme, setTheme] = useState(a11yDark);
    let labels = metaData.labels;
    const [selected, setSelected] = useState(labels[0]);
    const toggleTheme = () => {
        theme === a11yDark ? setTheme(a11yLight) : setTheme(a11yDark);
    }

    const markDownContent = remark()
        .use(remark2react, {
            remarkReactComponents: {
                code: props => {
                    return <CodeSnippets {...props} theme={theme} toggleTheme={toggleTheme} labels={labels} selected={selected} setSelected={setSelected} />
                }
            }
        }).processSync(content).result;


    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <meta title='description' content={metaData.description}></meta>
            </Head>
            {markDownContent}

        </>
    )
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts')
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({ params: { slug } }) => {

    const markdownWithMetadata = fs.readFileSync(path.join('parsedMd', slug + ".md")).toString();
    const parsedMarkwdown = matter(markdownWithMetadata);
    const metaData = {
        title: parsedMarkwdown.data.title,
        created: parsedMarkwdown.data.created.toString(),
        lastUpdated: parsedMarkwdown.data.lastUpdated.toString(),
        tags: parsedMarkwdown.data.tags,
        published: parsedMarkwdown.data.published,
        labels : parsedMarkwdown.data.labels
    }
    return {
        props: {
            metaData,
            content: parsedMarkwdown.content
        }
    }
}
export default Post;