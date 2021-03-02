import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import unified from "unified";
import parse from 'remark-parse';
import remark2react from 'remark-react';

const Post = ({metaData, content}) => {
    const markDownContent = unified().use(parse).use(remark2react).processSync(content).result;
    
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
    
    return {
        props: {
            metaData: parsedMarkwdown.data,
            content: parsedMarkwdown.content
        }
    }
}
export default Post;