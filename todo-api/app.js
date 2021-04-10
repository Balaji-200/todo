const express = require("express");
const logger = require("morgan");
const connectDb = require("./src/db");
const cors = require("cors");
const http = require("http");
const app = express();
const indexRouter = require("./routes/index");
const todoRouter = require("./routes/todo");
require("dotenv").config({ path: "./config.env" });

if(process.env.NODE_ENV == 'development'){
    const delay=require('express-delay');
    app.use(delay(2000));
}
connectDb();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/todo", todoRouter);

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT);
