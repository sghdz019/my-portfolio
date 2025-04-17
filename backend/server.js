const express = require('express');
const path = require('path');

const app = express();

// Serve the React static files after build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Example API route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Handle all other requests by serving React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
