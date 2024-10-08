const express = require('express');
const path = require('path');

const app = express();
const gamesRouter = require('./routes/games');

app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Mount routers
app.use('/api/games', gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
