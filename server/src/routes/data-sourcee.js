const mongoose = require('mongoose');
class Database{
    static async connect(){
        try{
            await mongoose.connect('localhost:27017/food-app');
        }
        catch(err){
            console.error(err);
        }
    } 
    async disconnect(){
        try{
            await mongoose.disconnect();
        }
        catch (err){
            console.error(err);
        }
    }
}
module.exports = Database;
