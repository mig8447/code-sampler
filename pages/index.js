
import fs from "fs";
import Link from "next/link";
import Search from "../components/Search"

const Index = ({slugs}) => (
    <div>
    <h1>Hello World</h1>
    <Search/>
    {slugs.map(slug => {
      return (
        <div key={slug}>
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


  