const mainHandler = require('./mainHandler.js')
const UserModel = require('../model/userModel.js')

module.exports.allUsers = mainHandler.getAllDoc(UserModel);
module.exports.getUser = mainHandler.getOneDoc(UserModel);
module.exports.createUser = mainHandler.createOne(UserModel);
module.exports.updateUser = mainHandler.updateOne(UserModel);
