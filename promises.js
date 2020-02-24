function doStuff(data, callback){
    callback("Done");
}

doStuff(true, (result)=>console.log(result));

//promise

function doStuffPromise(data){
    return new Promise((resolve, reject)=>{
        let successMessage = {
            status: 'sucess',
            message: 'OK'
        };

        let errorMessage = {
            status: 'error',
            message: 'Bad'
        };


        if (typeof data === 'boolean' && data === true){
            resolve(successMessage);
        }else{
            reject(errorMessage);
        }
    });
}

doStuffPromise(true).then(
    (successMessage) =>{
        console.log(successMessage);
    },
    (errorMessage) =>{
        console.log(errorMessage);
    }
);

//Promise just run once
doStuffPromise(true).then(
    ()=>{
        console.log("1er");
        return doStuffPromise(true);
    }
).then(
    ()=>{
    console.log("2do");
    }
).catch(
    ()=>{
        console.log("Error")
    }
)

doStuffPromise(true).then(
    ()=>{
        console.log("1era");
        return doStuffPromise(false);
    }
).then(
    ()=>{
    console.log("2doa");
    }
).catch(
    ()=>{
        console.log("Error")
    }
)