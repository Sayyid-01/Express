import express from 'express';

const app = express();
const PORT = 3000;

app.get('/welcome/:username', (req, res) => {
    const username = req.params.username;
    const role = req.query.role;
    
    res.send(`Welcome ${username}, your role is ${role}`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});