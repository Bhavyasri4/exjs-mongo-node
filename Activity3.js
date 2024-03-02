const express=require('express');

var api=express();

api.get('/',function(request,response){
    response.send('API server started');

})
api.get('/father',function(request,response){
    response.send('balakrishna');
})
api.get('/mother',function(request,response){
    response.send('anupama');
})



api.listen(9701,function(){
    console.log('api server started');
})