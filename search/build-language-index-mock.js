const fs = require("fs");

const languageIndex = [{'id':'Python', 'name':'Python'}, {'id':'Java', 'name':'Java'}, {'id':'Javascript', 'name':'Javascript'},{'id':'Golang','name':'Golang'}, {'id':'Ruby', 'name':'Ruby'}];



try {
    fs.readdirSync('search')
  } catch (e) {
    fs.mkdirSync('search')
  }
  
  fs.writeFile('search/languageIndex.js', `export const languageIndex = ${JSON.stringify(languageIndex)}`, function (err) {
    if (err) return console.log(err);
    console.log('Language index generated.');
  })