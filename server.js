const express = require("express");
const db = require("./db");
const bodyparser = require("body-parser");
const personRoutes = require('./routes/personRoutes.js')
const menuItemRoutes = require('./routes/menuItemRoute.js')
require('dotenv').config()


const PORT = process.env.PORT || 3000 

const app = express();

app.use(bodyparser.json());

app.use("/person", personRoutes);
app.use('/menu',menuItemRoutes)


app.listen(PORT, () => {
  console.log("server staretd at port 3000");
});
