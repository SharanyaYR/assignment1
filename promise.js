let promise = new Promise((resolve,reject)=>{
    let text = 'hello1';
    if(text==='hello'){
        resolve('promise is resolved');
    }else{
        reject('promise is rejected');
    }
})

promise.then((res) =>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})