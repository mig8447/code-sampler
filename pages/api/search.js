import { posts } from '../../cache/data';
import lunr from 'lunr';
export default (req, res) =>{
    // const param = req.query.q.toLowerCase().trim();
    // const results2 = param ? posts.filter((post) => 
    //     post.title.toLowerCase().includes(param) ||  
    //     post.description.toLowerCase().includes(param)  || 
    //     post.tags.toLocaleString().toLowerCase().split(",").includes(param)  )  : []


    
    
    
    //console.log(posts)
    
    const resultsRef = idx.search(req.query.q);
    console.log(resultsRef)

    let results = posts.map((post) => {

      let isIn = false;
      resultsRef.forEach(function(result){
        console.log(result.ref+" "+post.id)
        if(result.ref == post.id){
          isIn = true;
        }

      })
      
      if(isIn){
        return post;
      }
      return "";
    })
    results = results.filter(function (el) {
      return el != "";
    });

   
    
    

   
    
    console.log(req.query.q)
    //console.log(results)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(  {results}  ));
}


const idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('tags')
    this.field('description')
    
      posts.forEach(function (doc) {
        this.add(doc)
      }, this)
})