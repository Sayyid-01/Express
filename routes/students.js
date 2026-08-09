import express from "express";
const router = express.Router();

const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
router.get('/', (req, res) => {
    res.send(`Students: ${students.map(student => student.name).join(', ')}`);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find((student) => student.id === id);
    if (!student) res.status(404).send('Student not found.');
    res.send(`Student: ${student.name}`);
});

export default router;