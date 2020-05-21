Function.prototype.method=function(role,fn){
    this.prototype[role]=fn;
    return this;
}

Array.method('forEachEpx',function (fn,obj) {
    /**
     * fn是回掉函数
     * obj是传来的对象,若无就只windos
     */
    const scope=obj||window;
    // console.log(scope,this)
    for(var i=0;i<this.length;i++){
        fn.call(scope,this[i],i,this)
    }
})


const arr=[9,15,20,6,47,5,75,36,3,68,42,14,53];
const arrs=['a','b','d','e','f'];

/**
 * scope --> arrs
 * method里面@this --> arr
 * 但是当前函数的this指的是 window
 * 因为箭头函数指定了@this 指向
 */
// arr.forEachEpx(item=>{
//     console.log(item,this)
// },arrs)

/**
 * scope --> @arrs
 * method里面@this --> @arr
 * 而此时当前函数的@this--->@window
 */
// arr.forEachEpx(function(item) {
//     console.log(item,this)
// },arrs)

/**
 * @读取浏览器尾巴参数
 */

let url='www.xxx.com/id=10?name=naruto';

function getBrowser(url) {
    const length=url.indexOf('/')+1;
    const urls=url.substring(length)
    const arrUrl=urls.split('?')
    const obj={}
    arrUrl.forEach(item=>{
        const arr=item.split('=');
        obj[arr[0]]=arr[1]
    })
    return obj
}

const canshu=getBrowser(url);
console.log(canshu)


Array.method('buBle',function(){
    for(let i=0;i<this.length;i++){
        for(let n=0;n<this.length;n++){
            let c=this[i];
            if(this[i]>this[n]){
                this[i]=this[n];
                this[n]=c;
            }
        }
    }
    console.log(this)
    return this
})

