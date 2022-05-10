const { Schema, model } = require("mongoose")

const dogSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    weight: {
        type: Number
    }
});

const Dog = model("Dog", dogSchema)

module.exports = Dog;