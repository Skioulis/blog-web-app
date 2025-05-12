import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// will use this later for the list of posts in main query

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