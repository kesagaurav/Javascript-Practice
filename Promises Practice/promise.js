const button=document.querySelector('button');

const getPosition=(opts)=>{
    const promise=new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            success=>{
                resolve(success);
            },error=>{
                reject(error);
            },opts
        )
   
        });
        return promise;
    
}




async function trackHandler() {
    //let positionData;
    let posData;
    let timerData;
    try {
         posData=await getPosition();
         timerData=await setTimer();
    } catch (error) {
        console.log(error);
    }
   
    console.log(timerData,posData);
    // getPosition().then(posData=>{
    //     positionData=posData;
    //     return setTimer(1000);
    // })
    // .catch(err=>{
    //     console.log(err);//even though catch is throw error after catch all the then blocks will exceute and order dosenot matter
    //     return 'on we go ...';
    // })
    // .then(data=>{
    //     console.log(data,positionData);
    //     console.log('i am in anthor then');
    // });
    // setTimer(1000).then(()=>{
    //     console.log('Timer Done');
    // })
    // console.log('Getting position.....');
}

button.addEventListener('click',trackHandler);


const setTimer=(duration)=>{
    const promise=new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve('Done!');//browser will execute for us
        },duration)
    })
    return promise;
    
}


// Promise.race([
//     getPosition(),
//     setTimer(1000)
// ]).then(data=>{
//     console.log(data);
// })

//getPosition().then().catch().then().then().catch()

// Promise.all([
//     getPosition(),
//     setTimer(1000)
// ]).then(promiseData=>{
//     console.log(promiseData);
// })


Promise.allSettled([
    getPosition(),
    setTimer(1000)
]).then(promiseData=>{
    console.log(promiseData);
})


