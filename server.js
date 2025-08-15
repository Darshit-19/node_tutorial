const express = require("express");
const db = require("./db");
const bodyparser = require("body-parser");
const personRoutes = require('./routes/personRoutes.js')
const menuItemRoutes = require('./routes/menuItemRoute.js')
const app = express();

app.use(bodyparser.json());

app.use("/person", personRoutes);
app.use('/menu',menuItemRoutes)


app.listen(3000, () => {
  console.log("server staretd at port 300");
});
