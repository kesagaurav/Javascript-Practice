const request=new XMLHttpRequest();


request.onload=function() {
    const request=new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/posts');
    request.send(JSON.stringify(request));
    console.log(request);
    

}

 function loadDoc(){
    const promise=new Promise((resolve, reject) => {
        const http=new XMLHttpRequest();
        http.responseType='text';
        //http.setRequestHeader('Content-type','application/json');

    http.onload=function(a){
    resolve(http.response);
    
    if(http.status>=200 && http.status<300){
       const a= document.getElementById('button').innerText=this.responseText;
       console.log(a);

    }else{
        reject(new Error('wrong credentials'));
    }

    
    };
    http.open('GET','./test.txt');
    http.send();
    });
    return promise;
    






}





function loadDoc2(){
    const xhr=new XMLHttpRequest();
    xhr.responseType='text';
    const promise=new Promise((resolve, reject) => {
        xhr.onload=function(){
            if(xhr.status>=200){
            const a= document.getElementById('button2').innerText=this.responseText;
            resolve(xhr.response);
             console.log(a);
             
            }else if(xhr.status!=200){
                reject('error');
            }else{
                reject('error2');

            }
         };
         xhr.open('GET','./text2.txt');
    xhr.send();
});
return promise;
    };
    

    
    function loadDoc3(){
        const xhr=new XMLHttpRequest();
        xhr.responseType='text';
        const promise=new Promise((resolve, reject) => {
            xhr.onload=function(){
                if(xhr.status==200){
                const a= document.getElementById('button3').innerText=this.responseText;
                resolve(xhr.response);
                 console.log(a);
                 
                }else if(xhr.status!=200){
                    reject('error');
                }else{
                    reject('error2');
    
                }
             };
             xhr.open('GET','./text3.txt');
        xhr.send();
    });
    return promise;
        };