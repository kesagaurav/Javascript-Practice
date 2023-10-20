const store=document.getElementById('store-btn');
const retrive=document.getElementById('retrieve-btn');


store.addEventListener('click',()=>{
    const userId='u123';
   document.cookie=`uid=${userId}`;
});

retrive.addEventListener('click',()=>{
   
})
