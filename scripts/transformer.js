
// available utilities are: "unist-util-is", "unist-util-visit", and "unist-util-visit-parents"
const visit = require("unist-util-visit");

const transform = (node) => {
    let tmpSampleNode = {};
    let previousChildrenIsCode = false;
    let transformed = [];
    let numberChildren = node.children.length;
    node.children.forEach((node,i) => {
        if(node.children && node.children.length > 0 ){
            node.children = transform(node);
        }
        if (node.type === 'code') {
            if (!previousChildrenIsCode) {
                tmpSampleNode = {};
                tmpSampleNode.type = 'code';
                tmpSampleNode.lang = 'sample';
                tmpSampleNode.value = '';
                tmpSampleNode.object = { type: 'sample' };
                tmpSampleNode.object.items = []
            }
            let temp = {
                lang: node.lang,
                type: node.type,
                value: node.value,
              	meta: node.meta
            };
            tmpSampleNode.object.items.push(temp);
            previousChildrenIsCode = true;
            if(numberChildren-1 === i){

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
}



module.exports = function attacher(options) {
    return function transformer(tree, vfile) {
        visit(tree, "root", (node) => {
            let transformed = [];
            transformed=transform(node, []);
            node.children = transformed;
            return node;
        });
        return tree;
    };
};
