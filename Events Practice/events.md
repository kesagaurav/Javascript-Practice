# by default all the events are used bubbling phase


#button.addEventListener('click',function(event){

    #event.stopPropagation();
     #console.log('clicked BUTTON');
      #console.log(event);
       #console.log(this); 
    }); //  If we use an normal function which is above it will gives us thw button tag which was there in HTML file.


    #button.addEventListener('click',event=>{
    #event.stopPropagation();
     #console.log('clicked BUTTON');
      #console.log(event);
       #console.log(this); 
    });
    #so in this case when we keep
    arrow function the o/p will shown as window.Which is shown aboce