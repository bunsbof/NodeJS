const express = require("express");
const { route } = require("./routes/tasks");
const app = express();
const tasks = require("./routes/tasks");

// Middleware
app.use(express.json())

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
app.listen(port, console.log(`server is listening on port ${port} ...`));
