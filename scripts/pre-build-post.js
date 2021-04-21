const fs = require('fs');
const path = require('path');
const remark = require('remark');
const remarkFrontMatter = require('remark-frontmatter');
const transformer = require('./transformer');
const matter = require('gray-matter');


function languageArrayToLunrFormat(arr){
    let LunrFormat = [];
    arr.forEach(elem => {
        let object = {
            id: elem,
            name: elem
        };
        object = JSON.stringify(object);
        LunrFormat.push(object);
    });
    return `export const languageIndex = [${LunrFormat.toString()}]`;
}



function saveParsedFiles(){
    const files = fs.readdirSync(path.join("..", "posts"));
    let languages;
    let filesMetadata = []
    let tags = {};
    files.forEach((filename, i) => {
        const id = filename.replace(/\.md$/, '')
        let file = fs.readFileSync(path.join("..", 'posts', filename)).toString();
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
                tags[tag] = 1;
            }else{
                tags[tag]+=1;
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
        try {
            fs.writeFileSync(path.join("..","parsedMd", filename), `${postTransform}`)
        } catch (error) {
            fs.mkdirSync(path.join("..", "parsedMd"));
            fs.writeFileSync(path.join("..","parsedMd", filename), `${postTransform}`);
        }
    });
    console.log(tags);
    fs.writeFileSync(path.join("..","search", "tags-index.js"), `export const tagsIndex = ${JSON.stringify(tags)}`);
    fs.writeFileSync(path.join("..","search","language-index.js"), languageArrayToLunrFormat(languages));
    fs.writeFileSync(path.join("..","search","search-index.js"), `export const searchIndex = ${JSON.stringify(filesMetadata)}`);


}

saveParsedFiles();