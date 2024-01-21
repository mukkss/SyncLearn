const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Mock database (replace this with a real database)
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
