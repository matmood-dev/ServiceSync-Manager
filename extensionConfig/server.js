const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(err => console.log('Error connecting to MongoDB:', err));

const extensionSchema = new mongoose.Schema({
    number: String,
    username: String,
    password: String,
    employee: String
});
const Extension = mongoose.model('Extension', extensionSchema);

app.get('/extensions', async (req, res) => {
    try {
        const extensions = await Extension.find();
        res.json(extensions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

app.put('/extensions/:number', async (req, res) => {
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
