import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        director: String,
})
const MovieModel = mongoose.model("Movie", MovieSchema)
export default MovieModel;