import app from './config/custom-express';
import connection from './database/connection';
import Table from './database/table';


connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        Table.init(connection);
        app.listen(3000,()=>{
            console.log("server start localHost:3000");
        })
        
    }
})
