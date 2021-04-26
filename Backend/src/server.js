// This file starter a new server with express

const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes");
const Error = require("./middlewares/Error");


app.use(express.json());
app.use(cors());

app.use(routes);
app.use(Error)


app.listen(3333, () => console.log("Server is running!! 🔥🔥"));