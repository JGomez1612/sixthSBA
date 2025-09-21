import express from 'express';
const router = express.Router();
import review from '../models/reviewSchema.mjs'

// Create
router
    .route('/')
    .post(async (req, res) => {

        try {
            // Perform Action
            let newReview = await review.create(req.body);

            // Return Response
            res.json(newReview);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `Error - ${err.message}` })
        }

    })

    // Read
    .get(async (req, res) => {
        try {
            let allReviews = await review.find({})

            res.json(allReviews);
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
                let updatedReview = await review.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true } 
                );

                res.json(updatedReview);
            } catch (err) {
                console.error(err);
                res.status(500).json({ msg: `Error - ${err.message}` });
            }
        })
// Delete
    .delete(async (req, res) => {
        try {
            let deleteReview = await review.findByIdAndDelete(
                req.params.id
            );

            res.json(deleteReview)
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: `Error - ${err.message}` });
        }
    });

export default router

