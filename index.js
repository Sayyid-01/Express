/*Create a server using Express that listens on port 3000 and handles the following endpoints with appropriate responses:





GET /orders - Respond with "Here is the list of all orders."



POST /orders - Respond with "A new order has been created."



GET /users - Respond with "Here is the list of all users."



POST /users - Respond with "A new user has been added."




Requirements:





Test each endpoint to confirm it works as expected when accessed via a browser (for GET) or a tool like Postman (for POST).



Use console.log to indicate when the server is successfully running (e.g., "Server is running on http://localhost:3000").*/













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

app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders.");
});

app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});

app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
});

app.post("/users", (req, res) => {
  res.send("A new user has been added.");
});

app.listen(PORT, () => {    
  console.log(`Server is running on http://localhost:${PORT}`);
});