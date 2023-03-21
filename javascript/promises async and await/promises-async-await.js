const moneyPromises = new Promise ((resolve,reject)=>{

    setTimeout(()=>{
    const moneyGiven=true;
    if(moneyGiven){
        return resolve("money given");
    }
    else{
        reject("money not given");
    }
},300)
})
console.log("first");
moneyPromises.then(()=>conaololw.log)



