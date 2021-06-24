let buildProject=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let isDone=true;
    if(isDone){
        resolve('P roject is Finished');
    }
    else{
        reject('Project is not Finished');
    }
    },1000);
});
let attendtTechnicalRound=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let isDone=true;
    if(isDone){
        resolve('Technical Raound is Finished');
    }
    else{
        reject('Technical Raound is not Finished');
    }
    },2000);
});
let attendtManagerRound=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let isDone=true;
    if(isDone){
        resolve('Manager Raound is Finished');
    }
    else{
        reject('Manager Raound is not Finished');
    }
    },3000);
});
let attendtHrRound=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let isDone=true;
    if(isDone){
        resolve('HR Raound is Finished,got job');
    }
    else{
        reject('HR Raound is not Finished');
    }
    },4000);
});
buildProject.then((message)=>{
    let result=`${message}->`;
    attendtTechnicalRound.then((message)=>{
        let result=`${message}->`;
        console.log(result);
        attendtManagerRound.then((message)=>{
            let result=`${message}->`;
            console.log(result);
            attendtHrRound.then((message)=>{
                let result=`${message}->`;
                console.log(result);
            }).catch((err)=>{
                  console.log(err);
            });
        }).catch((err)=>{
            console.log(err);
        });
    }).catch((err)=>{
        console.log(err);
    });
});
