import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { posts } from "./posts.js";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home', { posts });
});

app.listen(port, () => {
    console.log('Server running on Port:' + port);
})