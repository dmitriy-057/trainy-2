const makeOrder = (dish)=> {
    const DELAY = 1000;

    return new Promise((resolve, reject)=> {
    const passed = Math.random() > 0.5;
    console.log('passed -->', passed);

    setTimeout(()=> {
        if(passed) {
            resolve('Your order have cooked');
        } else {
            reject("Sorry! We cannot cook your order")
        }
        
    }, DELAY)
    })
  
};

makeOrder("KEBAB") 
.then((result)=> {
    console.log(result)
})
.catch((error)=> {
    console.log(error)
})
.finally(()=> {
    console.log('This log will appear anytimes')
})
