import express from "express";

const articleInfo = [
  {
    name: "learn-react",
    upvote: 0,
    Comment: [],
  },
  {
    name: "learn-node",
    upvote: 0,
    Comment: [],
  },
  {
    name: "mongodb",
    upvote: 0,
    Comment: [],
  },
];

const app = express();
app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const name = req.params.name;
  const article = articleInfo.find((artc) => artc.name === name);
  if (article) {
    article.upvote += 1;
    res.send(`This ${name} article now has ${article.upvote} upvotes!!!`);
  } else {
    res.send("This article doesn't exist");
  }
});

app.post("/api/articles/:name/Comments", (req, res) => {
  const name = req.params.name;
  const { postedBy, text } = req.body;
  //can also be writting as const {name}= req.params;
  const article = articleInfo.find((a) => a.name === name);
  if (article) {
    article.Comment.push({ postedBy, text });
    res.send(`"${postedBy}" wrote "${text}"`);
  } else {
    res.send("This article doesn\'t exist");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000!");
});
