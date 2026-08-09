import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Here is the list of all orders.");
});

router.post('/', (req, res) => {
    res.send("A new order has been placed.");
});

export default router;