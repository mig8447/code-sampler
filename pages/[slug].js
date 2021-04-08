import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import remark from 'remark';
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import transformer from '../scripts/transformer';
import remark2react from 'remark-react';
import CodeSnippets from "../components/CodeSnippets";

const Post = ({ metaData, content }) => {
    const [theme, setTheme] = useState(a11yDark);
    const [selected, setSelected] = useState();
    let labels = [];

    const addLabel = (labels, newLabels) => {
        if(labels.length === 0) return newLabels;
        for(let i = 0; i< newLabels.length; i++){
            let newLabel = true;
            for(let j = 0; j<labels.length; j++){
                if(newLabels[i] === labels[j]){
                    newLabel = false;
                    break;  
                }
            }
            if(newLabel){
                labels.push(newLabels[i])
            }
        }
        return labels;
    }


    function getMetaData(metadataString) {
        let temp;
        if (metadataString) {
            temp = metadataString.split("&");
        } else {
            temp = [];
        }

        let metadata = {
            env: "",
            version: ""
        };
        temp.forEach(element => {
            let data = element.split("=");
            if (data.length == 2) {
                switch (data[0]) {
                    case "env":
                        metadata.env = data[1];
                        break;
                    case "version":
                        metadata.version = data[1];
                        break;
                    default:
                        break;
                }
            }
        });

        return metadata;
    }

    function getLabels(props){
        const snippetData = JSON.parse(props.children);
        let labels = snippetData.items.map(code => {
            let metadata = getMetaData(code.meta);
            if (metadata.env !== "" && metadata.version !== "") {
                return `${code.lang} ${metadata.version} (${metadata.env})`;
            } else if (metadata.env === "" && metadata.version !== "") {
                return `${code.lang} ${metadata.version}`;
            } else if (metadata.env !== "" && metadata.version === "") {
                return `${code.lang} (${metadata.env})`;
            }
            else {
                return code.lang;
            }
        });
        return labels;
    }

    const toggleTheme = () => {
        theme === a11yDark ? setTheme(a11yLight) : setTheme(a11yDark);
    }

    const markDownContent = remark()
        .use(transformer)
        .use(remark2react, {
            remarkReactComponents: {
                code: props => {
                    let currentLabels = getLabels(props);
                    labels = addLabel(labels, currentLabels);
                    return <CodeSnippets {...props} theme={theme} toggleTheme={toggleTheme} labels={currentLabels} selected={selected} setSelected={setSelected} />
                }
            }
        }).processSync(content).result;

        useEffect(() => {
            setSelected(labels[0]);
        }, [])

        console.log(markDownContent);

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

    const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + ".md")).toString();
    const parsedMarkwdown = matter(markdownWithMetadata);
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