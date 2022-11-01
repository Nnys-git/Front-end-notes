let example = new Promise((resolve,reject)=>{
    resolve({name:"Johnny",age:20});
    reject(new Error("not allowed"));
})
//promise的功能在於，你連接到的資料庫，他應該要回傳給你一個Promise object
//Promise Object 裡面包含resolve,reject
//resolve就會是資料庫同意存取，你將收到你所想要的資料 (對應到.then())
//reject就會是資料庫拒絕存取，你會收到一個error function(對應到.catch())
//這也是為什麼前面mongoose在CRUD資料庫的時候要串.then().catch()

example.then((e)=>{ //.then()對應到的是resolve
    console.log(e);
}).catch((err)=>{ //.catch()對應到的是reject
    console.log(err);
})