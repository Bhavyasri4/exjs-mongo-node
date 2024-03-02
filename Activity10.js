const{main}=require('./db3');
const express=require('express');

var api=express();
api.get('/',function(req,res){
res.send('API server started');
});

api.get('/update1',async function(req,res){
    var result=await main();
    res.send(result);
});

api.listen(1045,function(){

    console.log('Api server started');
});