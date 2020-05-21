var closure;

(function(a,b){
    console.log('立即执行',a+b)
    name='西葫芦'
    closure=function(){
        console.log('闭包执行')
    }
})(10,5)

/**
 * 函数虽然有作用域，但是作用域里面的变量没有用@var 命名的话，就是全局变量，会影响到全局代码
 */
console.log(name)
closure()

console.log('---------------------------------------------------------------------------------------')

/**
 * @闭包
 * 利用js的作用域执行。
 * 当从外部获取到函数@return 回来的函数，此时当前变量就获取到返回函数的作用域，只能当前操作进行改变
 * 不和别的变量冲突
 */

/**
 * @作用域
 * javascript只有函数拥有作用域，有些数据需要只有作用域内部的代码才可以调用，被称为@信息隐藏 
 * @私有内容 命名时变量前应加 @下划线 以示提醒
 */


/*
作用域中(本例中是foo内部的作用域)，而不是运行在调用它们的作用域中。只要bar被定义在foo中，它就能访问在foo中定义的所有变量，即使foo的执行 已经结束。

这就是闭包的一个例子。在foo返回后，它的作用域被保存下来，但只有它返回的那个函数能够访问这个作用域。在前面的示例中，baz和blat各 有这个作用域及a的一一个副本，而且只有它们自已能对其进行修改。返回一个内嵌函数是创建闭包最常用的手段。

用闭包实现私用成员
现在回过来看手头的那个问题:你需要创建一一个只能在对象内部访问的变量。闭包用于这个
目的看来是再合适不过了，因为借助于闭包你可以创建只允许特定函数访问的变量，而且这些变
量在这些函数的各次调用之间依然存在。为了创建私用属性，你需要在构造器函数的作用域中定
义相关变量。这些变量可以被定义于该作用域中的所有函数访问，包括那些特权方法:

*/


function foo(){
    let a=10;
    function bar(){
        return a*=10
    }
    return bar
}


let baz=foo();
console.log(baz())//100
console.log(baz())//1000
console.log(baz())//10000

console.log('---------------------------------------------------------------------------------------')

let bay=foo();
console.log(bay())//100
console.log(bay())//1000
console.log(bay())//10000


const Book=function(price){

    this.setPrice(price)

    var titile='雪中悍刀行',author,bookid;


    this.getTitle=function(){
        console.log(titile)
    }

    this.getAuthor=function(){
        console.log(author)
    }

    this.getBookid=function(){
        console.log(bookid)
    }

}

Book.prototype={
     setPrice:function(price){
        this.price=price
    }
}

const book=new Book();

book.getTitle()


