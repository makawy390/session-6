const mongoose = require('mongoose');
// Schema is Structure by mongo db
const courseSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
});
const modelSchema = mongoose.model("Course" , courseSchema);
module.exports = modelSchema;   