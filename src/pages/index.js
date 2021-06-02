import PostCard from '../components/PostCard/PostCard';
import ContentCards from '../components/ContentCards/ContentCards';
import Head from 'next/head';
import { Container } from "react-bootstrap";
import TopTagCard from "../components/TopTagCard/TopTagCard";
import { topTags } from "../search/topTags-index";
import { searchIndex } from '../search/search-index';
import { useEffect, useState } from "react";
import AlertNotification from "../components/UI/AlertNotification";

/**
 * Render the Index page - Display the recent
 * @param {Object} props
 * @param {Object} props.recentContent - Object with information of the 3 recent content cards to display
 * @param {Array<string>} props.tags - Top tags with most main posts links
 */
const Index = ({ recentContent, tags }) => {
/**
 * Alert states to map, notification.
 * @constant {Array<string>} alerts - State list of strings alerts.
 */
  const [alerts, setAlerts] = useState([]);
  
/**
 * @constant {Object} favorites - Current favorite posts information saved on your local storage.
 */
  const [favorites, setFavorites] = useState();

/**
 * addAlert() - Function for add an alert.
 * @param {!string} description - String that will be displayed in he alert.
 */
  const addAlert = (description) => {
    let tempAlerts = alerts;
    const newAlerts = [...tempAlerts, description];
    setAlerts(newAlerts);
  }

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

/**
 * deleteKeyFromObject() - Function for delete an element form favorites.
 * @param {!number} key - Variable key to accessed and deleted.
 */
  const deleteKeyFromObject = (key) => {
    const { [key]: tmp, ...rest } = favorites

    setFavorites(rest);
    localStorage.setItem("favorites", JSON.stringify(rest));
  }

/**
 * onClickFavorite() - Function that controls the click of an element to delete it or add it to favorites.
 * @param  {!string} action - Action that will be executed.
 * @param  {!string} filename - Name of the element.
 * @param  {!Object} metaData - Metadata of the element.
 */
  const onClickFavorite = (action, filename, metadata) => {

    if (action === "delete") {
      deleteKeyFromObject(filename);
      addAlert("Bookmark removed successfully!");
    } else if (action === "add") {
      let newFavorites = { ...favorites }
      newFavorites[filename] = {
        ...metadata
      };

      setFavorites(newFavorites)
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      addAlert("Bookmark added successfully!");
    }
  }


  return (
    <div>
      <Head>
        <title>Code Sampler</title>

      </Head>
      <Container fluid className="mt-3">
        <h2>Recent content</h2>
        <ContentCards>
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

      <div style={{ "position": "fixed", "top": "4rem", "right": "2rem" }}>
          {alerts ? alerts.map((desc, key) => <AlertNotification key={key} description={desc}/>) : ""}
      </div>

    </div >
  )


}

export const getStaticProps = async () => {
/**
 * Sorting by date in most recent to late order, for the recent content.
 */
  const recentContent = searchIndex.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return dateB - dateA;
  });

  return {
    props: {
      recentContent: recentContent.slice(0,3),
      tags: Object.keys(topTags)
    }
  };
};

export default Index;


