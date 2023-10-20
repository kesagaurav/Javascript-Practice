
const store=document.getElementById('store-btn');
const retrive=document.getElementById('retrieve-btn');


const userId='u123';

localStorage.setItem('uid',userId);

const user={
    name:'Gaurav',
    age:25,
    hobbies:['Watching Tv','Coding','Reading Books','Interested in Spritual Teachings']
 }


store.addEventListener('click',()=>{
    localStorage.setItem('uid',userId);
    localStorage.setItem('user',JSON.stringify(user));
    sessionStorage.setItem('uid',userId);
});

retrive.addEventListener('click',()=>{
    const extractedId=localStorage.getItem('uid');
    if(extractedId){
        console.log('Got the Id ' + extractedId);
    }else{
        console.log('Couldnot find id');
    }
})



