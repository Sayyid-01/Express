
import express from "express";
import orderRouter from "./routes/order.js";
import userRouter from "./routes/user.js";

const app = express();
const PORT = 3000;

app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});