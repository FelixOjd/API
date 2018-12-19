var mongoose = require('mongoose');

//conectar a la base de datos
mongoose.connect("mongodb://User01:User01@cluster0-shard-00-00-aaso8.mongodb.net:27017,cluster0-shard-00-01-aaso8.mongodb.net:27017,cluster0-shard-00-02-aaso8.mongodb.net:27017/customer?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",{ useNewUrlParser: true })

//esquemas de la base de datos
var user = {
    _id: String,
    name: String,
    last_name:String,
    date: Date,
    hobbie:String,
    profession:String,
    photo:String,
    email:String,
};

var users = mongoose.model('users',user);
exports.all = function(req,res){
    users.find(function(error,respon){
        res.send(respon);
    });
}