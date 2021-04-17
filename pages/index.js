import fs from "fs";
import path from 'path';
import Link from "next/link";
import matter from 'gray-matter';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import PostCard from '../components/PostCard/PostCard';
import ContentCards from '../components/ContentCards/ContentCards';
import Head from 'next/head';
import { Container } from "react-bootstrap";
import TopCategoryCard from "../components/TopCategoryCard/TopCategoryCard";
import { useEffect, useState } from "react";

const Index = ({ slugs, recentContent }) => {

  const [favorites, setFavorites] = useState();

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")))
  }, [])

  const deleteKeyFromObject = (key) => {
    const { [key]: tmp, ...rest } = favorites
    console.log(rest)
    setFavorites(rest);
    localStorage.setItem("favorites", JSON.stringify(rest));
  }

  const onClickFavorite = (action, filename) => {
    console.log("actions", action)
    if (action === "delete") {
      deleteKeyFromObject(filename);
    } else if (action === "add") {
      let newFavorites = { ...favorites }
      newFavorites[filename] = true;
      console.log(newFavorites)
      setFavorites(newFavorites)
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  }


  return (
    <div>
      <Head>
        <title>Code Sampler</title>

      </Head>
      <Navbar />
      <Searchbar />
      <Container fluid className="mt-3 mb-3">
        <h2>Recent content</h2>
        <ContentCards className="{mt-5}">
          {recentContent.map(metaData => (
            <PostCard
              key={metaData.filename}
              filename={metaData.filename}
              title={metaData.title}
              description={metaData.description}
              tags={metaData.tags}
              onClickFavorite={onClickFavorite}
              favorite={favorites && favorites[metaData.filename]}
            />
          ))}

        </ContentCards>
      </Container>

      <Container fluid>
        <h2>Top Categories</h2>
        <ContentCards >
          <TopCategoryCard />
          <TopCategoryCard />
          <TopCategoryCard />
          <TopCategoryCard />
          <TopCategoryCard />
        </ContentCards>
      </Container>

      <h1>Hello World</h1>
      {slugs.map(slug => {
        return (
          <div key={slug.filename} className="slug">
            <Link href={"/" + slug.filename}>
              <a>{"/" + slug.title}</a>
            </Link>
          </div>
        );

      })}
    </div>
  )


}

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  const slugs = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(path.join('posts', filename)).toString();
    const parsedMarkdown = matter(markdownWithMetadata);
    const metaData = {
      filename: filename.replace(".md", ""),
      title: parsedMarkdown.data.title,
      created: parsedMarkdown.data.created.toString(),
      lastUpdated: parsedMarkdown.data.lastUpdated.toString(),
      tags: parsedMarkdown.data.tags,
      description: parsedMarkdown.data.description,
      published: parsedMarkdown.data.published
    }

    return metaData

  });

  const recentContent = slugs.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return dateB - dateA;
  });

  return {
    props: {
      slugs,
      recentContent: recentContent.slice(0, 3)
    }
  };
};

export default Index;


