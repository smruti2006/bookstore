const express = require('express');
const dotenv = require('dotenv');
const cors=require('cors')
const app = express();
const Book = require("./Model/book.mode.js");
const { default: connectDB } = require('./Model/Dbconnection.js');
const bookroute=require("./Route/book.route.js")
const signup=require('./Route/user.route.js')
dotenv.config();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000;
//Database Connection
connectDB();
app.use('/bookroute',bookroute)
app.use('/user',signup)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
