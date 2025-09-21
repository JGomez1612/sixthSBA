import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    developer: { type: String },
    publisher: { type: String },
    releaseDate: { type: String },
    genre: { type: String,
        enum: {
            values: [
                'action',
                'adventure',
                'horror',
                'shooter',
                'fighting',
                'platformer',
                'racing',
                'rpg',
                'puzzle',
            ],
            message: `{VALUE} is not supported`
        },
        required: true },
});

export default mongoose.model("Game", gameSchema);