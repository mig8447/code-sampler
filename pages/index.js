
import fs from "fs";
import Link from "next/link";
import Navbar from '../components/Navbar/Navbar';
import Searchbar from '../components/Searchbar/Searchbar';
import Head from 'next/head';

const Index = ({slugs}) => (


    <div>
      <Head> 
        <title>Oracle DB Guide</title>
        
      </Head>
      <Navbar/>
      <Searchbar/>
    
      
      
    <h1>Hello World</h1>
    {slugs.map(slug => {
      return (
        <div key={slug} className="slug">
          <Link href={"/"+slug}>
          <a>{"/"+slug}</a>
          </Link>
        </div>
      );

    })}
  </div>
);

export const getStaticProps = async() => {
    const files = fs.readdirSync("posts");
    return {
      props: {
        slugs: files.map(filename => filename.replace(".md", ""))
      }
    };
  }; 

export default Index;


  