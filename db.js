const {MongoClient}=require('mongodb');
const client=new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('server connected');

   const db=client.db('kits');
   console.log('database connected');
   const collection=db.collection('facultyinfo');
   console.log('collection selected');
   const result=await collection.find({"name":"beuhla"}).toArray();
   console.log(result);
   return result;
}

module.exports={
    main
};