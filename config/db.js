//Mongoose
const mongoose = require("mongoose");
//Database
const db_connection = () => {
     mongoose
    .connect(
       'mongodb+srv://admin:admin@cluster0.q79uc.mongodb.net/test?retryWrites=true&w=majority'
            )
    .then(() => {
      console.log("data_base connected");
    })
    .catch(() => {
      console.log("error bch tetarcheg");
    });
};
// Export Database
module.exports = db_connection;