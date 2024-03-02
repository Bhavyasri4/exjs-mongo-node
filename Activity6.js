const{main}=require('./db');
const express=require('express');

var api=express();
api.get('/',function(req,res){
res.send('API server started');
});

api.get('/data',async function(req,res){
    var result=await main();
    res.send(result);
});

api.listen(1023,function(){

    console.log('Api server started');
});