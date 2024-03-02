const express=require('express');

var api=express();

api.get('/',function(request,response){
    response.send('API server started');

})
api.listen(9030,function(){
    console.log('api server statred');
})