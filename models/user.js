const mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var userSchema = Schema({
    masa: String,
    especialidad: String,
    tamaño: String,
    precio: Float32Array
    
});

module.exports = mongoose.model("User", UserSchema);