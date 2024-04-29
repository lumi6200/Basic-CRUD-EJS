import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/create", (req, res) => {
    res.render("create.ejs");
})

app.post("/create-post", (req, res) => {
    let title = req.body["title"];
    let content = req.body["content"];
    posts.push({ title, content });
    res.redirect("/");
})

app.get("/post/:i", (req, res) => {
    const post = posts[req.params.i];

    res.render("post.ejs", { title: post.title, content: post.content, i: req.params.i });
})

app.post("/update/:i", (req, res) => {
    let title = req.body["title"];
    let content = req.body["content"];
    posts[req.params.i] = {title: title, content: content};
    res.redirect("/");
})

app.post("/delete/:i", (req, res) => {
    let i = req.params.i;
    if (i == 0) posts = [];
    posts.splice(i, i);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})

var posts = [
    // { id: 1, title: "Title 1", content: "Content 1" },
    // { id: 2, title: "Title 2", content: "Content 2" },
    // { id: 3, title: "Title 3", content: "Content 3" }
];