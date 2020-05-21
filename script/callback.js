function doSomething(parameter,callback){
    if(typeof callback !== "function")  return
  
    switch(parameter){
        case 'success':
            callback()
        case 'fali':
            callback()
    }

}

doSomething('success',77)