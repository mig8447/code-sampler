
import fs from "fs";
import path from 'path';
import Link from "next/link";
import matter from 'gray-matter';
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import RecentContentCard from '../components/RecentContent/RecentContentCard/RecentContentCard';
import ContentCards from '../components/ContentCards/ContentCards';
import Head from 'next/head';
import { Container } from "react-bootstrap";
import TopCategoryCard from "../components/TopCategoryCard/topCategoryCard";

const Index = ({ slugs, recentContent }) => {

  return (
    <div>
      <Head>
        <title>Oracle DB Guide</title>

      </Head>
      <Navbar />
      <Searchbar />
      <Container fluid className="mt-3 mb-3">
        <h2>Recent content</h2>
        <ContentCards className="{mt-5}">
          {recentContent.map(metaData =>(
            <RecentContentCard 
              key={metaData.filename} 
              filename={metaData.filename} 
              title={metaData.title} 
              description={metaData.description}  
              tags={metaData.tags} 
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
    const parsedMarkwdown = matter(markdownWithMetadata);
    const metaData = {
      filename: filename.replace(".md", ""),
      title: parsedMarkwdown.data.title,
      created: parsedMarkwdown.data.created.toString(),
      lastUpdated: parsedMarkwdown.data.lastUpdated.toString(),
      tags: parsedMarkwdown.data.tags,
      description: parsedMarkwdown.data.description,
      published: parsedMarkwdown.data.published
    }

    return metaData

  });

  const recentContent = slugs.sort((a, b) =>{
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return dateB - dateA;
  });

  return {
    props: {
      slugs,
      recentContent: recentContent.slice(0,3)
    }
  };
};

export default Index;


