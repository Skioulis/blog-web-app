import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const allPosts = [
    {
        id: 1,
        title: "First Day of Learning",
        body: "Today I started my journey in web development. It's exciting and challenging!"
    },
    {
        id: 2,
        title: "JavaScript Fundamentals",
        body: "Learning about variables, functions, and objects in JavaScript. The basics are crucial."
    },
    {
        id: 3,
        title: "Express.js Introduction",
        body: "Started working with Express.js framework. It makes server-side development much easier."
    },
    {
        id: 4,
        title: "Database Design",
        body: "Understanding the importance of proper database structure and relationships."
    },
    {
        id: 5,
        title: "API Development",
        body: "Creating RESTful APIs and understanding HTTP methods and status codes."
    },
    {
        id: 6,
        title: "Frontend Frameworks",
        body: "Exploring different frontend frameworks and their advantages."
    },
    {
        id: 7,
        title: "Security Best Practices",
        body: "Learning about web security, authentication, and authorization."
    },
    {
        id: 8,
        title: "Testing Strategies",
        body: "Implementing unit tests and integration tests for better code quality."
    },
    {
        id: 9,
        title: "Performance Optimization",
        body: "Exploring ways to improve application performance and user experience."
    },
    {
        id: 10,
        title: "Deployment Process",
        body: "Understanding different deployment strategies and hosting solutions."
    }
];

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: allPosts,
    });
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.get("/post/:id", (req, res) => {
    const post = allPosts.find(post => post.id === parseInt(req.params.id));
    res.render("post.ejs", {
        post: post
    });
})

app.get("/create", (req, res) => {
    res.render("create.ejs");
})

app.post("/create", (req, res) => {
    const post = {
        id: allPosts.length + 1,
        title: req.body.title,
        body: req.body.body
    };
    allPosts.push(post);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});