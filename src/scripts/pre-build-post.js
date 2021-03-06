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
    if(indexFormat){
        return `export const languageIndex = [${indexFormat.toString()}]`;
    }
    return `export const languageIndex = []`;
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

function validateMetaData(metadata){
    if(!metadata.title){
        throw `Error file ${metadata.id} doesn't have a title`
    }
    if(!metadata.created || Object.prototype.toString.call(metadata.created) !== "[object Date]"){
        throw `Error file ${metadata.id} doesn't have a created date`
    }
    if(!metadata.lastUpdated || Object.prototype.toString.call(metadata.lastUpdated) !== "[object Date]"){
        throw `Error file ${metadata.id} doesn't have a last updated date`
    }
    if(!metadata.tags || Object.prototype.toString.call(metadata.tags) !== "[object Array]"){
        throw `Error file ${metadata.id} doesn't have an array of tags`
    }
    if(!metadata.published || typeof(metadata.published) !== "boolean"){
        throw `Error file ${metadata.id} doesn't have a published date`
    }
    if(!metadata.description){
        throw `Error file ${metadata.id} doesn't have a description`
    }
}



function saveParsedFiles(){
    const srcPath = path.join(__dirname,"..");
    const files = fs.readdirSync(path.join(srcPath, "posts"));
    let languages;
    let filesMetadata = []
    let tags = {};
    if(!fs.existsSync(path.join(srcPath,"parsedMd"))){
        fs.mkdirSync(path.join(srcPath,"parsedMd"));
    }
    files.forEach((filename, i) => {
        const id = filename.replace(/\.md$/, '')
        let file = fs.readFileSync(path.join( srcPath, "posts", filename)).toString();
        fileMetaData = matter(file).data;
        let matterResult = {
            id,
            title: fileMetaData.title,
            created: fileMetaData.created,
            lastUpdated: fileMetaData.lastUpdated,
            tags: fileMetaData.tags,
            published: fileMetaData.published,
            description: fileMetaData.description
        }
        try {
            validateMetaData(matterResult);
        } catch (error) {
            console.log(error);
            return error;
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
        fs.writeFileSync(path.join(srcPath,"parsedMd", filename), `${postTransform}`)
    });

   if(!fs.existsSync(path.join(srcPath,"search"))){
       fs.mkdirSync(path.join(srcPath,"search"));
   }
    fs.writeFileSync(path.join(srcPath, "search", "tags-index.js"), `export const tagsIndex = ${JSON.stringify(tags)}`);
    fs.writeFileSync(path.join(srcPath, "search", "topTags-index.js"), `export const topTags = ${JSON.stringify(getTopTags(tags))}`)
    fs.writeFileSync(path.join(srcPath, "search","language-index.js"), languageArrayToIndexFormat(languages));
    fs.writeFileSync(path.join(srcPath, "search","search-index.js"), `export const searchIndex = ${JSON.stringify(filesMetadata)}`);


}

saveParsedFiles();