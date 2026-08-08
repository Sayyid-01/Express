import  express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  req.user = "Fuuggi";
  next();
});

app.get("/welcome", (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
}); 

app.listen(PORT, () => {    
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});