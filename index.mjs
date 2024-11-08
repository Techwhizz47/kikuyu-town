import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/articles', (req, res) => {
    res.render("articles.ejs");
})
app.get('/about', (req, res) => {
    res.render("about.ejs");
})
app.get('/contact', (req, res) => {
    res.render("contact.ejs");
})
app.get('/droneview', (req, res) => {
    res.render("page1.ejs");
})
app.get('/wetland', (req, res) => {
    res.render("page2.ejs");
})






app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})