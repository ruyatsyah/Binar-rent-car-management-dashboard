const express = require("express");
const isAdmin = require("./src/middleware/isAdmin");
const handleLogger = require("./src/middleware/handleLogger");
const carRouter = require("./src/routes/carRouter");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());

app.use(handleLogger)

app.use("/v1/cars", carRouter)


app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});

