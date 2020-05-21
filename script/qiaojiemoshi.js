// console.log(Array.prototype)
// if(!Array.prototype.forEachs){

// }

Function.prototype.method=function(role,fn){
    this.prototype[role]=fn
    return this
}

Array.method('forEachs',function (fn,thisObj) {
    const scope=thisObj||window;
    /**
     * 为什么不直接使用@this?
     * 此时的this指的是当前@数组
     * @scope 指的是@forEach 的第二个参数，若没有默认为@window
     */
    for(var i=0;i<this.length;i++){
        /**
         * 这样默认的回掉函数默认@this。为scope,第二个参数为@Array [index] ，第三个参数为@index
         * 刚好符合 @forEach
         */
        fn.call(scope,this[i],i,this) 
    }
})

const arr=[15,4,3,7,8,6,5,1,9,10];
const singer={
    name:'周杰伦',
    works:['青花瓷','本草纲目','听妈妈的话']
}

// arr.forEachs(item=>{
//     console.log(item)
// },singer)


Array.method('Filters',function(fn,obj) {
    const scope=obj||window
    const arr=[]
    for(var i=0;i<this.length;i++){
        /**
         * fn.call(scope,this[i],i,this)返回的值是 @true @false
         */
        if(fn.call(scope,this[i],i,this)){
            arr.push(this[i])
            return arr
        }
        
    }
     
})

const num=arr.Filters(item=>item==7)
console.log(num)

/**
 * @冒泡排序
 */

for(let i=0;i<arr.length;i++){
    let item;
    for(let n=0;n<arr.length;n++){
        if(arr[i]<arr[n]){
            item=arr[i]
            arr[i]=arr[n];
            arr[n]=item;
        }
    }
}


Array.method('bubbling',function(fn) {
    for(let i=0;i<this.length;i++){
        let item;
        for(let n=0;n<this.length;n++){
            if(this[i]<this[n]){
                item=this[i];
                this[i]=this[n];
                this[n]=item;
            }
        }
    }
    fn.call(window,this)
})

arr.bubbling(function(item){
    console.log(item)
})

