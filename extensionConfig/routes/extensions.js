const express = require('express');
const router = express.Router();
const Extension = require('../models/Extension');

router.get('/', async (req, res) => {
    try {
        const extensions = await Extension.find();
        res.json(extensions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

router.put('/:number', async (req, res) => {
    const { number } = req.params;
    const { employee } = req.body;

    try {
        const extension = await Extension.findOneAndUpdate(
            { number },
            { employee },
            { new: true }
        );

        if (!extension) {
            return res.status(404).json({ message: 'Extension not found' });
        }

        res.json(extension);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
