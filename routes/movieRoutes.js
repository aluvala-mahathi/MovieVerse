const express = require("express");

const router = express.Router();

const Movie = require("../models/Movie");
const movieRoutes = require("./routes/movieRoutes");

router.get("/", async (req,res)=>{

const movies = await Movie.find();

res.json(movies);

});


router.post("/", async (req,res)=>{

const movie = new Movie(req.body);

await movie.save();

res.json(movie);

});


module.exports = router;