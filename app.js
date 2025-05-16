import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import path from 'path';
import { fileURLToPath } from "url";
import { posts } from "./posts.js";


const app = express();

// __dirname workaround in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const post = posts;
    res.render('home', { post });
});

app.get('/new', (req, res) => {
    res.render('new');
});

app.get('/post/:title', (req, res) => {
    const postId = req.params.title;
    const post = posts.find(postsObject => postsObject.title === postId);

    if (post) {
        res.render('post', { post });
    }
    else {
        res.status(404).send("Post Not Found!");
    }
});


app.listen(port, () => {
    console.log('Server running on Port:' + port);
})