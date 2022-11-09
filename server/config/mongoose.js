const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect("mongodb+srv://wendy:xls110110@cluster0.ocxxy.mongodb.net/" +
            DB + "?retryWrites=true&w=majority")
        .then(() => console.log("Established a connection to the database"))
        .catch(err => console.log("Something went wrong when connecting to the database", err))
}
