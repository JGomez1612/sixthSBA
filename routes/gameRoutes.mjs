import express from 'express';
const router = express.Router();
import game from '../models/gameSchema.mjs'

// Create
router
    .route('/')
    .post(async (req, res) => {

        try {
            // Perform Action
            let newGame = await game.create(req.body);

            // Return Response
            res.json(newGame);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Error - ${err.message}` })
        }

    })

    // Read
    .get(async (req, res) => {
        try {
            let allGames = await game.find({});

            res.json(allGames);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Error - ${err.message}` });
        }
    });

// Update
router
    .route("/:id")
    .put(
        async (req, res) => {
            try {
                let updatedGame = await game.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true } 
                );

                res.json(updatedGame);
            } catch (err) {
                console.error(err);
                res.status(500).json({ msg: `Error - ${err.message}` });
            }
        })
// Delete
    .delete(async (req, res) => {
        try {
            let deleteGame = await game.findByIdAndDelete(
                req.params.id
            );

            res.json(deleteGame)
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: `Error - ${err.message}` });
        }
    });

export default router

