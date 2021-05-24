import PostCard from '../components/PostCard/PostCard';
import ContentCards from '../components/ContentCards/ContentCards';
import Head from 'next/head';
import { Container } from "react-bootstrap";
import TopTagCard from "../components/TopTagCard/TopTagCard";
import { topTags } from "../search/topTags-index";
import { searchIndex } from '../search/search-index';
import { useEffect, useState } from "react";
import AlertNotification from "../components/UI/AlertNotification";


const Index = ({ recentContent, tags }) => {

  const [alerts, setAlerts] = useState([]);
  const [favorites, setFavorites] = useState();

  const addAlert = (description) => {
    let tempAlerts = alerts;
    const newAlerts = [...tempAlerts, description];
    setAlerts(newAlerts);

  }

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  const deleteKeyFromObject = (key) => {
    const { [key]: tmp, ...rest } = favorites

    setFavorites(rest);
    localStorage.setItem("favorites", JSON.stringify(rest));
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


  return (
    <div>
      <Head>
        <title>Code Sampler</title>

      </Head>
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
        <h2>Top Tags</h2>
        <ContentCards >
          {tags.map(tag => (
            <TopTagCard 
            key={tag} 
            categoryName={tag} 
            posts={topTags[tag].slice(0,5)} 
            countPosts={topTags[tag].length}
            />
          ))}

        </ContentCards>
      </Container>

      <div  style={{"position":"fixed", "top":"2%", "right":"2%"}}>
          {alerts ? alerts.map((desc, key) => <AlertNotification key={key} description={desc}/>) : ""}
      </div>

    </div >
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
      recentContent: recentContent.slice(0, 3),
      tags: Object.keys(topTags)
    }
  };
};

export default Index;


