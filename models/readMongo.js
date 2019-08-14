
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let HotDogSchema = new Schema({
    img: String,
    name: String
});

mongoose.connect('mongodb://localhost:27017/hotdogDBs',{ useNewUrlParser: true });
const hotdog =  mongoose.model('hotdogs',HotDogSchema);

module.exports.dani = async (req,res)=>{
        try {

            let hatdogDani = await hotdog.find({});
            console.log(hatdogDani);
            if (hatdogDani.length == 0){
             res.render("NotHotdogs",{title: "We do not have hotgogs. Sorry. Please, create hotdog"})
            } else{
             let url =[];
             for (let i=0; i<hatdogDani.length;i++){
                url[i]='../public/img/'+hatdogDani[i].img +'.jpg';
             }
             console.log('url -',url);
             res.render("AllHotdogs",{id: hatdogDani,
                                    name: hatdogDani,
                                      url: url}) 
            }
           //let url =  '../public/img/'+hatdogDani.name+'.jpg';
        } catch (error) {
            console.log('Error read hotdogDB')
        }

        console.log('del_put  - ',req.body);
}

module.exports.delUp=async (req,res)=>{
    let keys = Object.keys(req.body);
    let value = Object.values(req.body);
    console.log('41-',req.body);
    console.log('keys -',keys);
    console.log('value -',value);
   if (value[0]=='Delete'){
       
       await hotdog.findByIdAndRemove(keys[0]);
       console.log('delete key - ',keys[0])
       res.redirect('/readhotdog');
   }
   if (keys[0]=='Update name'){
   
    // let number = Math.floor(Math.random()*100);
    let newName = value[0];
    await hotdog.findByIdAndUpdate(keys[1],{name: newName} , {new: true})
    console.log('Update gre -',newName)
    res.redirect('/readhotdog');
}
    let hatdogDani = await hotdog.find({});
          //  console.log(hatdogDani);
}




