
import express from "express";
import courseRoutes from "./routes/course.js";
import studentRoutes from "./routes/students.js";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Student and Course API!');
});

app.use('/courses', courseRoutes);
app.use('/students', studentRoutes);

app.use((req, res) => {
    res.status(404).send('Page not found.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});