// imports
import express from  "express";
import dotenv from "dotenv";

import mongoose from 'mongoose';
import MovieModel from "./models/movies.js";

dotenv.config()
let db;

// configurations
const app = express();
// await mongoose.connect(process.env.MONGO_URI);
// imports
//Code From https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html


 
// export default function connectDB() {
  const url = process.env.MONGO_URI;
 
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
//   return;

// }
// connectDB()











const PORT = process.env.PORT || 3000;




// middleware
app.use(express.json());

let movies=[{
    title:"The Kid",
    year:1921,
    director:"Charlie Chaplin",
},{
    title:"Jaws",
    year:1975,
    director: "Stephen Speilberg",
},{
    title:"Rope",
    year:1948,
    director:"Alfred Hitchcock",
},{
    title:"Raisen in the Sun",
    year:1961,
    director:"Daniel Petrie",
},{
    title:"Carmen Jones",
    year:1954,
    director:"Otto Premminger",
},{
    title:"Claudine",
    year:1974,
    director:"John Berry",
},{
    title:"The Wiz",
    year:1978,
    director:"Sidney Lumet",
},{
    title:"Hollywood Shuffle",
    year:1987,
    director:"Robert Townsend",
},{
    title:"Cooley High",
    year:1975,
    director:"Michael Schultz",
},{
    title:"Malcolm X",
    year:1992,
    director:"Spike Lee",
},{
    title:"What's Love Got to Do With It",
    year:1993,
    director:"Brian Gibson",
},{
    title:"Modern Times",
    year:1936,
    director:"Charlie Chaplin",
},{
    title:"Who's Afraid of Virginia Woolf?",
    year:1966,
    director:"Moke Nichols",
},{
    title:"The Good, the Bad and the Ugly",
    year:1966,
    director:"Sergio Leone",
},{
    title:"The Producers",
    year:1967,
    director:"Mel Brooks",
},{
    title:"2001:A Space Odyssey",
    year:1968,
    director:"Stanley Kubrik",
},{
    title:"Monty Python's Life of Brian",
    year:1979,
    director:"Terry Jones",
},{
    title:"1984",
    year:1984,
    director:"Michael Radford",
},{
    title:"Young Frankenstein",
    year:1974,
    director:"Mel Brooks",
},{
    title:"High and Low",
    year:1963,
    director:"Akira Kurosawa",
}]
let comments=[{
    message:"Loved it!",
},{
    message:"Hated it!",
},{
    message:"Would see it again!",
},{
    message:"Oscar Winner!",
},{
    message:"Bravo!",
}]
let IMBD=[{
    ratings:"8.0",
},{
    ratings:"9.0",
},{
    ratings:"8.5",
},{
    ratings:"8.5",
},{
    ratings:"7.9",
}]
// routes: CRUD



// done
// create: app.post
app.post("/movies", async (req, res) => {
    const movie = new MovieModel({
        title:"Rope",
                year:1948,
             director:"Alfred Hitchcock",
    })
    // let collection = await db.collection("Movies");
    // let result=await collection.insertMany(
    //     [{
    //         title:"The Kid",
    //         year:1921,
    //         director:"Charlie Chaplin",
    //     },{
    //         title:"Jaws",
    //         year:1975,
    //         director: "Stephen Speilberg",
    //     },{
    //         title:"Rope",
    //         year:1948,
    //         director:"Alfred Hitchcock",
    //     },{
    //         title:"Raisen in the Sun",
    //         year:1961,
    //         director:"Daniel Petrie",
    //     },{
    //         title:"Carmen Jones",
    //         year:1954,
    //         director:"Otto Premminger",
    //     },{
    //         title:"Claudine",
    //         year:1974,
    //         director:"John Berry",
    //     },{
    //         title:"The Wiz",
    //         year:1978,
    //         director:"Sidney Lumet",
    //     },{
    //         title:"Hollywood Shuffle",
    //         year:1987,
    //         director:"Robert Townsend",
    //     },{
    //         title:"Cooley High",
    //         year:1975,
    //         director:"Michael Schultz",
    //     },{
    //         title:"Malcolm X",
    //         year:1992,
    //         director:"Spike Lee",
    //     },{
    //         title:"What's Love Got to Do With It",
    //         year:1993,
    //         director:"Brian Gibson",
    //     },{
    //         title:"Modern Times",
    //         year:1936,
    //         director:"Charlie Chaplin",
    //     },{
    //         title:"Who's Afraid of Virginia Woolf?",
    //         year:1966,
    //         director:"Moke Nichols",
    //     },{
    //         title:"The Good, the Bad and the Ugly",
    //         year:1966,
    //         director:"Sergio Leone",
    //     },{
    //         title:"The Producers",
    //         year:1967,
    //         director:"Mel Brooks",
    //     },{
    //         title:"2001:A Space Odyssey",
    //         year:1968,
    //         director:"Stanley Kubrik",
    //     },{
    //         title:"Monty Python's Life of Brian",
    //         year:1979,
    //         director:"Terry Jones",
    //     },{
    //         title:"1984",
    //         year:1984,
    //         director:"Michael Radford",
    //     },{
    //         title:"Young Frankenstein",
    //         year:1974,
    //         director:"Mel Brooks",
    //     },{
    //         title:"High and Low",
    //         year:1963,
    //         director:"Akira Kurosawa",
    //     }]  
    //  )
  try{
    await movie.save()
    res.send(Movie)
  }catch(error){
    res.status(500).send(error)
  }
    // newDocument .date = new Date();
    // let result = await collection. inserOne(newDocument);
    // res.send(result).status(204);
})





// read: app.get
app.get(`/`, async (req, res) => {
    try{

    const allMovies = await MovieModel.find({});
    console.log("All Movies", allMovies)
    res.json(allMovies);
 } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error`});
 }
})

// update: app.put
// app.put("/comment/:id", async (req, res) => {
//     const query = { _id: ObjectId("65e510309f60756548eb8fdc") };
//     const updates = {
//         $push: { comments: req.body },
//     };
//     let collection = await db.collection("post");
//     let result = await collection. updateOne(query, updates);
//     res.send(result).status(200);
// });



// // delete: app.delete
// app.delete("/:id", async (req, res) => {
//     const query = { _id: ObjectId("65e510309f60756548eb8fdc") };

//     const collection = MovieModel();
//     let result = await collection.deleteOne(query);

//     res.send(result).status(200);
// });


// error handling middleware
app.use((err, _req, res, next) => {
    res.status(500).send(`snafu`);
});




// listener
app.listen(PORT,() => {
    console.log(`server is listening on: ${PORT}`);
});