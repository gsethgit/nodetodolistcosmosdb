var mongoose = require("mongoose");
mongoose.connect('mongodb://caddocdbmongo:sHKsf8wq8NbH19S8mIQ5AecnwGMxZd64vkYXhb1yjLM20U2MPRF1PElrSkOZlcaCaJW0ZH1IDsN7hxyUG1wlKg==@caddocdbmongo.documents.azure.com:10255/?ssl=true&replicaSet=globaldb');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var userSchema = {
    "userEmail": String,
    "userPassword": String
};
// create model if not exists.
module.exports = mongoose.model('userLogin', userSchema);