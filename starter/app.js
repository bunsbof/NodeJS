const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()

// Middleware
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

/*
app.get('/api/v1/tasks')
app.post('/api/v1/tasks')
app.get('/api/v1/tasks/:id')
app.path('/api/v1/tasks/:id')
app.delete('/api/v1/tasks/:id')
*/

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MYSQL_HOST, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, process.env.DB);
    app.listen(port, console.log(`server is listening on port ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
