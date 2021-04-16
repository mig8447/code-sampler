const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function postData() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      title: matterResult.data.title,
      tags: matterResult.data.tags,
      description: matterResult.data.description
    }
  });
  return `export const searchIndex = ${JSON.stringify(posts)}`;
}

try {
  fs.readdirSync('search')
} catch (e) {
  fs.mkdirSync('search')
}

fs.writeFile('search/search-index.js', postData(), function (err) {
  if (err) return console.log(err);
  console.log('Search index generated.');
})