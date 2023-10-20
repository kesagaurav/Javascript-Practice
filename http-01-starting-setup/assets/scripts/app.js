const xhr=new XMLHttpRequest();

const listElement=document.querySelector('.posts');
const postTemplate=document.getElementById('single-post');

const form=document.querySelector("#new-post form");

const fetchButton=document.querySelector('#available-posts button');


const postList=document.querySelector('ul');


    function sendHttpRequests(method,url,data){
        
  //      const promise=new Promise((resolve, reject) => {

           
        //     const xhr=new XMLHttpRequest();

        
        //     xhr.open(method,url);



        //     xhr.responseType='json';
        //     xhr.onload=function() {
        //     //console.log(xhr.response);
        //     resolve(xhr.response);
        
        //     //const listOfPosts=JSON.parse(xhr.response);

        //     if(xhr.status>=200 && xhr.status<300){
        //         resolve(xhr.response);
        //     }else{
        //         reject(new Error('Something Went Wrong !'));
        //     }

        // };

        // xhr.onerror=function(){
        //    reject(new Error('Failed to send the request !'));
        // }

        // xhr.send(JSON.stringify(data));





//    });
    //return promise;

    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',

        }
    }).then(res=>{
        if(res.status>=200 && res.status<300){
            return res.json();
        }else{
           return res.json().then(errData=>{
            console.log(errData);
            throw new Error('Something went Wrong !');
            });
        }
        
    }).catch(err=>{
        console.log('something went wrong');
    });
}

async function fetchPosts(){
    try {
        const responseData=await sendHttpRequests('GET','https://jsonplaceholder.typicode.com/posts')
        const listOfPosts=responseData;
        
            console.log(listOfPosts);
        
            for(const post of listOfPosts){
                const postEl=document.importNode(postTemplate.content,true);
                postEl.querySelector('h2').textContent=post.title.toUpperCase();
                postEl.querySelector('p').textContent=post.body;
                postEl.querySelector('li').id=post.id;
                listElement.append(postEl);
            }
    } catch (error) {
        alert(error.message);
    }
    

    
}

fetchPosts();



//POST

async function createPost(title,content){
    const userId=Math.random();
    const post={
        title:title,
        body:content,
        userId:userId
    };
    sendHttpRequests('POST','https://jsonplaceholder.typicode.com/posts',post);
}

createPost('DUMMY','A Title Post !!!');


fetchButton.addEventListener('click',fetchPosts);
form.addEventListener('submit',event=>{
    event.preventDefault();
    const enteredTitle=event.currentTarget.querySelector('#title').value;
    const content=event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle,content);
})



//DELETE

postList.addEventListener('click',event=>{
    if(event.target.tagName=='BUTTON'){
        console.log('Clicked on BUTTON !');
        const postId=event.target.closest('li').id;
        sendHttpRequests('DELETE',`https://jsonplaceholder.typicode.com/posts${postId}`)

    }
})