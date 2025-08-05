const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
function readFileAsync (){
    fs.readFile('challenge.js','utf8', (err,data)=>{
       if(err){
            console.log("somthing is wrong",err)
        }
        console.log('access to the file correctly')
    })
}
readFileAsync()
let promise= new Promise(function(resolve,reject){
     fs.readFile('the library challenge/text.txt','utf8', (err,data)=>{
        if(err){
            reject(err)
        }
        resolve(data)
    })


})
promise
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });



let promiser= new Promise(function(resolve,reject){
    fs.writeFile('the library challenge/text.txt','dans la ferme du nabil il y a une grande vache','utf8',(err,data)=>{
       
    if(err) {
        reject(err)
    }
    resolve(data)
      })
})

promiser
.then((data)=>{
    console.log("le contenue:",data)
}).catch((err)=>{
    console.log("l'erreur est :", err)
})