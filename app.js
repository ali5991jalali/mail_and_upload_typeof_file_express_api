const express=require('express');
const bodyparser=require('body-parser');



//imporing config
const {port}=require('./config');
//end of importig config


const app=express();



//setting of requirements
app.use(bodyparser.json({limit: '50mb',parameterLimit:100000}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true,parameterLimit:100000}));
//end of seting requirements





//requiring routers
app.use('/mail',require('./routes/mail'));
app.use('/upload',require('./routes/upload'));
//end of requiring routres



app.get('/',(req,res)=>{

res.send('welcom to mail and upload api');

})





app.listen(port,()=>{

console.log(`server is running on port ${port}...`)
    
})