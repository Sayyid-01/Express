import express from "express";
const router = express.Router();
const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];
router.get('/', (req, res) => {
    res.send(`Courses: ${courses.map(course => course.name).join(', ')}`);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const course = courses.find((course) => course.id === id);
    if (!course) res.status(404).send('Course not found.');
    res.send(`Course: ${course.name}, Description: ${course.description}`);
});

export default router;