import { posts } from '../../cache/data';

export default (req, res) =>{
    const param = req.query.q.toLowerCase().trim();
    const results = param ? posts.filter((post) => 
        post.title.toLowerCase().includes(param) ||  
        post.description.toLowerCase().includes(param)  || 
        post.tags.toLocaleString().toLowerCase().split(",").includes(param)  )  : []
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(  {results}  ));
}