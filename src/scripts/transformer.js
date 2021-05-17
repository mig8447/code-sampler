// available utilities are: "unist-util-is", "unist-util-visit", and "unist-util-visit-parents"
const visit = require("unist-util-visit");

function getMetaData(metadataString) {
    
    let temp;
    if (metadataString) {
        metadataString.trim();
        temp = metadataString.split("&");
    } else {
        temp = [];
    }
    let metadata = {
        env: "",
        version: ""
    };
    temp.forEach(element => {
        let data = element.split("=");
        if (data.length == 2) {
            let value = data[1];
            value = value.charAt(0).toUpperCase() + value.slice(1).trim();
            switch (data[0].trim().toLowerCase()) {
                case "env":
                    metadata.env = value;
                    break;
                case "version":
                    metadata.version = value;
                    break;
                default:
                    break;
            }
        }
    });

    return metadata;
}

function getLabel(language, metaData) {
    language = language.charAt(0).toUpperCase()+language.slice(1);
    let metadata = getMetaData(metaData);
    if (metadata.env !== "" && metadata.version !== "") {
        return `${language} (${metadata.env} ${metadata.version})`;
    } else if (metadata.env === "" && metadata.version !== "") {
        return `${language} (${metadata.version})`;
    } else if (metadata.env !== "" && metadata.version === "") {
        return `${language} (${metadata.env})`;
    } else {
        return language;
    }
}

let languages = {};
let labels = {};
let matter;
const transform = (node) => {
    let tmpSampleNode = {};
    let previousChildrenIsCode = false;
    let transformed = [];
    let numberChildren = node.children.length;
    node.children.forEach((node, i) => {
        if (node.children && node.children.length > 0) {
            node.children = transform(node);
        }
        if (node.type === "yaml") {
            matter = node;
        }
        if (node.type === "code") {
            if (!previousChildrenIsCode) {
                tmpSampleNode = {};
                tmpSampleNode.type = "code";
                tmpSampleNode.lang = "sample";
                tmpSampleNode.value = "";
                tmpSampleNode.object = { type: "sample" };
                tmpSampleNode.object.items = [];
            }
            let temp = {
                lang: node.lang.toLowerCase(),
                type: node.type,
                value: node.value,
                meta: node.meta,
            };
            
            if (!languages[temp.lang]) {
                languages[temp.lang] = true;
            }
            let label = getLabel(node.lang, node.meta);
            temp.label = label
            if(!labels[label]){
                labels[label] = true;
            }
            tmpSampleNode.object.items.push(temp);
            previousChildrenIsCode = true;
            if (numberChildren - 1 === i) {
                tmpSampleNode.value = JSON.stringify(tmpSampleNode.object, null, 4);
                transformed.push(tmpSampleNode);
            }
        } else {
            if (previousChildrenIsCode) {
                tmpSampleNode.value = JSON.stringify(tmpSampleNode.object, null, 4);
                transformed.push(tmpSampleNode);
            }
            transformed.push(node);
            tmpSampleNode = undefined;
            previousChildrenIsCode = false;
        }
        
    });
    return transformed;
};

module.exports = function attacher(options) {
    
    labels = {};
    return function transformer(tree, vfile) {
        visit(tree, "root", (node) => {
            let transformed = [];
            transformed = transform(node);
            node.children = transformed;
            return node;
        });
        let labelsArray = Object.keys(labels);
        matter.value += `\nlabels: [${labelsArray}]`;
        let languagesArray = Object.keys(languages);
        return [tree, languagesArray];
    };
};
