import express from 'express';

const articleInfo= [
  {
    name: 'learn-react',
    upvote: 0,
  },
  {
    name: 'learn-node',
    upvote: 0,
  },
  {
    name: 'mongodb',
    upvote: 0,
  }
]

const app = express();
app.use(express.json())

app.put('/api/articles/:name/upvote', (req, res)=> {
  const name = req.params.name;
  const article = articleInfo.find(artc => artc.name === name);
  if (article) {
    article.upvote += 1;
    res.send(`This ${name} article now has ${article.upvote} upvotes!!!`);
  } else {
    res.send("This article doesn\'t exist");
  }
  
})

app.listen(8000, () => {
  console.log('Server is listening on port 8000!');
});