const app = require('./app');
const Database = require('./data-sourcee');
const port = 5000;


(async()=> { 
    try{
        await Database.connect();
        console.log('Db Connection Open')
        app.listen(port, ()=>{
            console.log(`server running on port ${port}`);
        });
    }
    
    catch(err){
        console.error(err)
    }
})();
//from line 5 to 14 is a example of iife(imediate invoke function express)