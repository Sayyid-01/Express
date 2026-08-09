
import express from "express";
import userRouter from "./routes/books.js";

const app = express();
const PORT = 3000;

app.use("/books", userRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});