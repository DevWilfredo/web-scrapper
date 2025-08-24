require('dotenv').config();

const express = require('express');
const cors = require('cors');
const scraper = require('./utils/scraper')
const app = express();

const PORT = process.env.PORT || 3001
const corsOptions = {
    origin: [process.env.FRONTEND_URL]
};

app.use(cors(corsOptions));

app.get('/api/v1/news', async (req, res) => {
    try {
        const data = await scraper();
        res.status(200).json({ 'message': 'Entries succesfully scrapped', entries: data });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ 'message': 'Error scrapping entries' });
    }
})

app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});