const express = require("express");
const app = express();
const path = require("path");
const redditData = require('./data.json');

app.set("view engine", "ejs");
// app.set('Views',path.join(__dirname,'/Views'));
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get('/cats',(req,res)=>{
    const cats = [
        'Blue' , 'Rocket' , 'Crimsy' , 'SarasWati' , 'Winston'
    ]
    res.render('cats',{cats})
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notFound', { subreddit })
    }
})

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { rand: num });
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
