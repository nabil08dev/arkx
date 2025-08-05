let orderPizza = new Promise((resole,reject)=>{
    let order=true;
    if(order){
        resolve("pizza is ready ")
    }else{
        reject("not ready ")
    }
})