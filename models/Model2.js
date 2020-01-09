// require mongoose
var mongoose = require("mongoose");

// get schema stuff
var Schema = mongoose.Schema;

var Schema2 = new Schema({
    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const myDB2 = mongoose.connection.useDb("dungeon-master-logins");

// variable for exporting the model schema thing
const Model2Test = myDB2.model("Model2", Schema2);

// export
module.exports = Model2Test;