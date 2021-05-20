import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import remark from 'remark';
import remark2react from 'remark-react';
import CodeSnippets from "../components/CodeSnippets/CodeSnippets";
import Tags from '../components/UI/Tags';
import { Container, Row, Col } from "react-bootstrap";
import AlertNotification from '../components/UI/AlertNotification';
import classes from '../styles/CodeSample.module.css';

const Post = ({ metaData, content, filename }) => {
    const [theme, setTheme] = useState();
    let labels = metaData.labels;
    const [selected, setSelected] = useState(labels[0]);
    const toggleTheme = () => {
        theme === "a11yDark" ? setTheme("a11yLight") : setTheme("a11yDark");
    }
    const [favorites, setFavorites] = useState({});
    const icon = favorites && favorites[filename] ? "fa fa-bookmark fa-lg fa-2x text-warning" : "fa fa-bookmark-o fa-lg fa-2x text-light";
    const action = favorites && favorites[filename] ? "delete" : "add";
    const isFavorite = favorites ? "favorite bookmark selected" : "favorite bookmark";

    useEffect(() => {
        setTheme(localStorage.getItem("theme") || "a11yLight");
        setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }, []);

    const deleteKeyFromObject = (key) => {
        const { [key]: tmp, ...rest } = favorites

        setFavorites(rest);
        localStorage.setItem("favorites", JSON.stringify(rest));
    }

    const [alerts, setAlerts] = useState([]);

    const addAlert = (description) => {
        let tempAlerts = alerts;
        const newAlerts = [...tempAlerts, description];
        setAlerts(newAlerts);
    }


    const onClickFavorite = (action, filename, metadata) => {
        if (action === "delete") {
            deleteKeyFromObject(filename);
            addAlert("Bookmark removed succesfully!");
        } else if (action === "add") {
            let newFavorites = { ...favorites }
            newFavorites[filename] = {
                ...metadata
            };

            setFavorites(newFavorites)
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            addAlert("Bookmark added succesfully!");
        }
    }

    const markDownContent = remark()
        .use(remark2react, {
            remarkReactComponents: {
                code: props => {
                    return <CodeSnippets {...props} theme={theme} toggleTheme={toggleTheme} labels={labels} selected={selected} setSelected={setSelected} addAlert={addAlert} />
                },
                h1: props => (
                    <>
                        <Container fluid>
                            <Row>
                                <Col xs={9} sm={10} md={8} >
                                    <h1 className={classes.sampleTitle}>{props.children}</h1>
                                    <Tags tags={metaData.tags} />
                                </Col>
                                <Col className="d-flex justify-content-end" xs={3} sm={2} md={4}>
                                    <button aria-label={isFavorite} tabIndex="0" onClick={() => onClickFavorite(action, filename, metaData)} style={{ backgroundColor: "transparent" }} className="border-0" >
                                        <span className={[icon, classes.iconButton].join(" ")} aria-hidden="true"></span>
                                    </button>

                                </Col>

                            </Row>

                        </Container>
                    </>
                ),
                h2: props => (
                    <h2 className="ml-0">{props.children}</h2>
                )
            }
        }).processSync(content).result;


    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <meta title='description' content={metaData.description}></meta>
            </Head>
            <div style={{ width: "80%", margin: "auto" }} className="text-light">
                {markDownContent}
            </div>
            <div style={{ "position": "fixed", "top": "4rem", "right": "2rem" }}>
                {alerts ? alerts.map((desc, key) => <AlertNotification key={key} description={desc} />) : ""}
            </div>

        </>
    )
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('src/posts')
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

    const markdownWithMetadata = fs.readFileSync(path.join("src",'parsedMd', slug + ".md")).toString();
    const parsedMarkdown = matter(markdownWithMetadata);
    const metaData = {
        title: parsedMarkdown.data.title,
        created: parsedMarkdown.data.created.toString(),
        lastUpdated: parsedMarkdown.data.lastUpdated.toString(),
        tags: parsedMarkdown.data.tags,
        published: parsedMarkdown.data.published,
        labels: parsedMarkdown.data.labels,
        description: parsedMarkdown.data.description
    }
    return {
        props: {
            metaData,
            filename: slug,
            content: parsedMarkdown.content
        }
    }
}
export default Post;