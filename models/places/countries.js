const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
    name: String,
    countryCode: String,
    coordinates: Array,
    bbox: Array

});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;