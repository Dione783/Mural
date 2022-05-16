const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/api");



app.use("/api",routes);
app.use(express.static(path.join(__dirname,"public")));
app.listen(3000,()=>{
    console.log("rodando na porta:"+ 3000);
});
