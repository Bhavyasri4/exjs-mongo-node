const express=require('express');
var api=express();

api.listen(3000,function()
{
    console.log('api server started');
})