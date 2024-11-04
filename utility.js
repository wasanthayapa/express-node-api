
require('dotenv').config();
const PORT=process.env.PORT;
const {APP}=require('./index');

const listenPort=async ()=>{
    APP.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
 }

module.exports={
    listenPort
};