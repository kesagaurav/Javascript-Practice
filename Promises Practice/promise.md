# what are promises
# promises are the better way to handle call blacks in a human reable format and also we can chain multiple promises and also promises are bettor approcach for call backs.
# in promises we have two kinds of parameters such as reslove and reject

# resolve=> for success message,logic

# reject=> for error handing

# to handle these types we have the 
# below scneraios

# so promise has two types of methods
# 1. then() and 2. catch() 
# 1.then()
# here we will write the logic / success 
# messages.
# 2.catch()
# here we can throw erros
# the order of catch is not imp
# because after the catch if there is more than then methods it will execute
# otherwise it will go into SETTLED Phase which is final stage


# PENDING => bewteen the then() and catch()

# RESOLVED => then()

# REJECTED => catch()


# SETTLED => finally() // rarely used not an imp.


# what is async await
# can use async await in the functions only and async will return promise and await is waits for the promise to reslove or to fail and the nextline will only execute the data might be resolved and one more important is we should use await only inside the async function u cannot use await outside of fucntion

# Promise.race()
# It will take array of promises
# ex: Promise.race([ getPosition(),setTimer(1000)]).then(data=>{console.log(data);})


# Promise.allSettled()
# and this function when it will fail it will tell that which promise is failing and which is passing promise function and also this function it will exceute all the promises there in an array is one of them is not then it will not stop the excution rather it will show the reject promise and executes all the promises with success.And also it will wait for all the promises to finish and gives us the detailed report

