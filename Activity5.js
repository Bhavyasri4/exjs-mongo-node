const express=require('express');

var api=express();

api.get('/',function(request,response){
    response.send('API server started');

})
api.get('/login',function(request,response){
    response.send('Im login');
})
api.get('/signup',function(request,response){
    response.send('signed in');
})



api.listen(9800,function(){
    console.log('api server statred');
})