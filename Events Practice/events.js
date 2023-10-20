 const button=document.querySelector('button');


// button.onclick=function(){

// }


// const buttonClick=()=>{
//     alert('button is clicked !')
//     console.log('button is clicked !');
// };

// button.onclick=buttonClick;
// const buttonClick=event=>{
//     console.log(event);
//     //event.target.disabled=true;
// }


// button.addEventListener('click',buttonClick);

// setTimeout(()=>{
// button.removeEventListener('click',buttonClick);
// },2000)


// const button2=event=>{
//     console.log(event);
// }





    // buttons.forEach((btn)=>{
    //     btn.addEventListener('click',buttonClick);
    // });





    const form=document.querySelector('form');

    form.addEventListener('submit',event=>{
        event.preventDefault();
        console.log(event);
    })


    const div=document.querySelector('div');

    // div.addEventListener('click',event=>{
    //     console.log('clicked DIV');
    //     console.log(event);
    // },true) //capturning phase

    div.addEventListener('click',event=>{
        console.log('clicked DIV');
        console.log(event);
    })
    button.addEventListener('click',function(event){
        event.stopPropagation();
        console.log('clicked BUTTON');
        console.log(event);
        console.log(this); 
    });



    const listItems=document.querySelectorAll('li');

    // listItems.forEach(listItem=>{
    //     listItem.addEventListener('click',event=>{
    //         event.target.classList.toggle('highlight');
    //     })
    // })


    const list=document.querySelector('ul');

    list.addEventListener('click',event=>{
        // console.log(event.currentTarget);
        // event.target.classList.toggle('highlight');
        console.log(event);
        event.target.closest('li').classList.toggle('highlight');
        //form.submit();
        button.click();

    })

    