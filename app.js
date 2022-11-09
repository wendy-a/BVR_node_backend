const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const DB = "my_first_db";

// ---- middleware ----
app.use(cors(), express.json(), express.urlencoded({extended:true}))
// --------------------
// database connection

require("./server/config/mongoose")(DB);
// connect the routes
require("./server/routes/routes")(app)
// start the server
app.listen(port, () => console.log(`server up on port: ${port}`))
