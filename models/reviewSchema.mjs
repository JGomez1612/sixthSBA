import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    game: { type: String, required: true },
    rating: { type: Number, min: 1, max: 10, required: true },
    comment: { type: String, minlength: 10, required: true },
    createdAt: { type: String }
});

export default mongoose.model("Review", reviewSchema);