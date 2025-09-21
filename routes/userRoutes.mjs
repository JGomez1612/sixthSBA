import express from 'express';
const router = express.Router();
import user from '../models/userSchema.mjs';

// Create
router
    .route('/')
    .post(async (req, res) => {
        try {
            let newUser = await user.create(req.body);

            res.json(newUser);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msg: `Error - ${error.message}`})
        }
    })

// Read
    .get(async (req, res) => {
        try {
            let allUsers = await user.find({});

            res.json(allUsers);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msg: `Error - ${error.message}`});
        }
    });


// Update
router
    .route('/:id')
    .put(async (req, res) => {
        try {
            let updateUser = await user.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new: true}
            );

            res.json(updateUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: `Error - ${error.message}`})
        }
    })

// Delete
    .delete(async (req, res) => {
        try {
            let deleteUser = await user.findByIdAndDelete(
                req.params.id
            );

            res.json(deleteUser)
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: `Error - ${error.message}`})
        }
    });

export default router