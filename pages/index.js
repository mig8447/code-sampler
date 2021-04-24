import Link from "next/link";
import matter from 'gray-matter';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import PostCard from '../components/PostCard/PostCard';
import ContentCards from '../components/ContentCards/ContentCards';
import Head from 'next/head';
import { Container } from "react-bootstrap";
import TopCategoryCard from "../components/TopCategoryCard/TopCategoryCard";
import {topCategories} from "../search/topCategories-index";
import { searchIndex } from '../search/search-index';
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
  const onClickFavorite = (action, filename, metadata) => {
    console.log("actions", action)
    if (action === "delete") {
      deleteKeyFromObject(filename);
    } else if (action === "add") {
      let newFavorites = { ...favorites }
      newFavorites[filename] = {
        ...metadata
      };
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
              key={metaData.id}
              filename={metaData.id}
              title={metaData.title}
              description={metaData.description}
              tags={metaData.tags}
              onClickFavorite={onClickFavorite}
              favorite={favorites && favorites[metaData.id]}
            />
          ))}

        </ContentCards>
      </Container>

      <Container fluid>
        <h2>Top Categories</h2>
        <ContentCards >
          {Object.keys(topCategories).map(category => (
            <TopCategoryCard key={category} categoryName={category} posts={topCategories[category].slice(0,5)} />
          ))}

        </ContentCards>
      </Container>

      <h1>Hello World</h1>
      {slugs.map(slug => {
        return (
          <div key={slug.id} className="slug">
            <Link href={"/" + slug.id}>
              <a>{"/" + slug.title}</a>
            </Link>
          </div>
        );

      })}
    </div>
  )


}

export const getStaticProps = async () => {
  
  const recentContent = searchIndex.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return dateB - dateA;
  });

  return {
    props: {
      slugs: searchIndex,
      recentContent: recentContent.slice(0, 3)
    }
  };
};

export default Index;


