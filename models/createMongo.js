
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let PersonSchema = new Schema({
    img: String,
    name: String
});
  
mongoose.connect('mongodb://localhost:27017/hotdogDBs',{ useNewUrlParser: true });
const Person = mongoose.model('hotdog',PersonSchema);
module.exports = async(req,res)=>{
    try {
        let keys = Object.keys(req.body);
    const person =  new Person ({
        img: keys[0],
         name: keys[0]
    });
    await person.save(function(err){
      /*  mongoose.disconnect();  // отключение от базы данных */
          
        if(err) return console.log(err);
        console.log("Сохранен объект", person);

    });
    } catch (error) {
        console.log(error)
    }
    
}