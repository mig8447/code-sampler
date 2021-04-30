const fs = require('fs');
const path = require('path');
const remark = require('remark');
const remarkFrontMatter = require('remark-frontmatter');
const transformer = require('./transformer');
const matter = require('gray-matter');


function languageArrayToIndexFormat(arr){
    let indexFormat = [];
    arr.forEach(elem => {
        let object = {
            id: elem,
            name: elem
        };
        object = JSON.stringify(object);
        indexFormat.push(object);
    });
    return `export const languageIndex = [${indexFormat.toString()}]`;
}

function getTopTags(tags){
    const numberOfCategories = 6;
    let topTags = {};
    for(let i = 0; i < numberOfCategories; i++) {
        let maxKey = "";
        let maxNumber = 0;
        for (key in tags) {
            if(maxNumber < tags[key].times){
                maxNumber = tags[key].times;
                maxKey = key;
            }
        }
        if(maxKey !== ""){
            topTags = {
                ...topTags,
                [maxKey]: tags[maxKey].files
            };
            delete tags[maxKey];
        }
    }
    return topTags;
}



function saveParsedFiles(){
    const files = fs.readdirSync(path.join( "posts"));
    let languages;
    let filesMetadata = []
    let tags = {};
    if(!fs.existsSync(path.join("parsedMd"))){
        fs.mkdirSync(path.join("parsedMd"));
    }
    files.forEach((filename, i) => {
        const id = filename.replace(/\.md$/, '')
        let file = fs.readFileSync(path.join( 'posts', filename)).toString();
        fileMetaData = matter(file).data;
        let matterResult = {
            id,
            title: fileMetaData.title,
            created: fileMetaData.created.toString(),
            lastUpdated: fileMetaData.lastUpdated.toString(),
            tags: fileMetaData.tags,
            published: fileMetaData.published,
            description: fileMetaData.description
        }
        matterResult.tags.forEach(tag => {
            tag = tag.toLowerCase();
            if(!tags[tag]){
                tags[tag] = {
                    times: 1,
                    files: [{filename: matterResult.id, title: matterResult.title}]
                }
            }else{
                tags[tag].times += 1;
                tags[tag].files.push({filename: matterResult.id, title: matterResult.title});
            }
        });
        filesMetadata.push(matterResult);
        let postTransform = remark()
        .use(remarkFrontMatter)
        .use(()=> tree => {
            let[transformedTree, languagesArray] = transformer()(tree);
            languages = languagesArray;
            return transformedTree;
        })
        .processSync(file).toString();
        fs.writeFileSync(path.join("parsedMd", filename), `${postTransform}`)
    });

   if(!fs.existsSync(path.join("search"))){
       fs.mkdirSync(path.join("search"));
   }
    fs.writeFileSync(path.join("search", "tags-index.js"), `export const tagsIndex = ${JSON.stringify(tags)}`);
    fs.writeFileSync(path.join("search", "topTags-index.js"), `export const topTags = ${JSON.stringify(getTopTags(tags))}`)
    fs.writeFileSync(path.join("search","language-index.js"), languageArrayToIndexFormat(languages));
    fs.writeFileSync(path.join("search","search-index.js"), `export const searchIndex = ${JSON.stringify(filesMetadata)}`);


}

saveParsedFiles();