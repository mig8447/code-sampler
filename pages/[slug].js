import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import unified from "unified";
import remark, { stringify } from 'remark';
import parse from 'remark-parse';
import transformer from '../scripts/transformer';
import remark2react from 'remark-react';
import CodeSnippets from "../components/CodeSnippets";

const Post = ({metaData, content}) => {
    const markDownContent = remark()
    .use(transformer)
    .use(remark2react, {
        remarkReactComponents:{
            code: CodeSnippets
        }
    })
    .processSync(content).result;
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

export const getStaticProps = async ({params: {slug} }) => {

    const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + ".md")).toString();
    const parsedMarkwdown = matter(markdownWithMetadata);
    console.log(parsedMarkwdown.data);
    const metaData = {
        title: parsedMarkwdown.data.title,
        created: parsedMarkwdown.data.created.toString(),
        lastUpdated: parsedMarkwdown.data.lastUpdated.toString(),
        tags: parsedMarkwdown.data.tags,
        published: parsedMarkwdown.data.published
    }

    


    return {
        props: {
            metaData,
            content: parsedMarkwdown.content
        }
    }
}
export default Post;