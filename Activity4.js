const express=require('express');

var api=express();

api.get('/',function(request,response){
    response.send('API server started');

})
api.get('/products',function(request,response){
    response.send('mobile,dresses,rakhis,furniture,electronics');
   
})

api.get('/payment',function(request,response){
    response.send('UPI,credit card,net banking,cash on delivery');
})

api.get('/kidswear',function(request,response){
    response.send('frocks,skirts,shampoos,powders,diapers,jeans');
})

api.get('/menswear',function(request,response){
    response.send('shoes,shirts,shorts,watches,T-shirts');
})

api.get('/womenswear',function(request,response){
    response.send('kurtis,jeans,shorts,watches,chudidars,tops,handbags,slippers');
})

api.get('/groceries',function(request,response){
    response.send('salt,sugar,coffee powders,garlic,maida,wheat,flour,tea powders');
})

api.get('/electronics',function(request,response){
    response.send('oven,pressure cooker,induction stove,mobile,TV,computer,fridge,AC,laptop,toaster');
})


api.get('/furniture',function(request,response){
    response.send('sofas,dining tables,chairs,tables,stands,beds,dressing tables');
})



api.listen(4748,function(){
    console.log('api server statred');
})