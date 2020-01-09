// require mongoose
var mongoose = require("mongoose");

// get schema stuff
var Schema = mongoose.Schema;

var Schema1 = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const myDB1 = mongoose.connection.useDb("myDB1");

// variable for exporting the model schema thing
const Model1Test = myDB1.model("Model1", Schema1);

// export
module.exports = Model1Test;