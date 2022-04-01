const debounce = (func, timeout) =>{
    let timeoutId
    return(...args)=>{
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        }, timeout);
    }
    
}

