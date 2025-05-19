function setTimeoutPromisified(ms){
    const promise = new Promise(resolve=>setTimeout(resolve(ms),ms));
    return promise;
}

function callback(ms){
    console.log(`${ms} seconds have passed !`);
}

const ms=3000;
setTimeoutPromisified(ms).then(callback);


    // async function getRecentPost(){
    //     console.log("Before sending response :-");
    //     const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    //     const data=await response.json();
    //     console.log(data);
    //     console.log("Request has been processed!!");
    //     document.getElementById('posts').innerHTML=JSON.stringify(data);
    // }