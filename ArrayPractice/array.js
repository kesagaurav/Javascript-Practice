// const numbers=new Array(); //[] the perfomance is higher
// console.log(numbers); 

// const numbers1=new Array('Hi','welcome'); //[ 2 values , 'Hi','welcome']
// console.log(numbers1); 


// const numbers2=new Array(5); // return 5 empty items this is a special case and also it is same without using new or not will give u same
// console.log(numbers2); 


// const moreNumbers=Array.of(1,2)// this is slower
// console.log(moreNumbers);



// const numbers3=Array.from('hi!');//for split the strings or numbers we can use Array.from
// console.log(numbers3);


// const numbers31=Array.from(123);//for split the strings or numbers we can use Array.from
// console.log(numbers31);




// const hobbies=['Sports','Cooking'];
// hobbies.push('Videogames');//push will add the elments as last
// hobbies.unshift('codingPractice');//unshift will add the elments as first
// hobbies.pop();//delete the values at the last
// hobbies.shift();//delete the values at the first
// console.log(hobbies);


// hobbies.splice(1,0,'Good Developer');
// console.log(hobbies);//we can add the elements


// hobbies.splice(0,1);
// console.log(hobbies);//we can remove the elmensts as well



//slice
// const numbers=[1,4,6,7,8,9];
// const slice=numbers.slice(1,5);
// const slice1=numbers.slice(-3,-1);

// console.log(slice,slice1);



//indexof,lastindexof
// const numbers=[1,2,3,4,5,6,8,9,1.5,1.6];
// console.log(numbers.indexOf(1.5));
// console.log(numbers.lastIndexOf(1.6));
// console.log(numbers.lastIndexOf(9));



const names=['gaurav','joshn','jousha','max','ben'];
  //console.log(names.find('gaurav'));
  console.log(names.includes('gaurav'));

  names.map(a=>a.match('gaurav')).values;

