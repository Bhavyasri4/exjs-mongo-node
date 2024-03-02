const{main}=require('./db1');
const express=require('express');

var api=express();
api.get('/',function(req,res){
res.send('API server started');
});

api.get('/data',async function(req,res){
    var result=await main();
    res.send(result);
});

api.listen(1031,function(){

    console.log('Api server started');
});