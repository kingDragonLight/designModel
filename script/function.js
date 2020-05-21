/**
 * fn.call(); // 普通模式下this是window，在严格模式下this是undefined
 * fn.call(null); // 普通模式下this是window，在严格模式下this是null
 * fn.call(undefined); // 普通模式下this是window，在严格模式下this是undefined
 */
var obj = {name:'iceman'};

function fns(num1, num2) {
    console.log(num1 + num2);
    console.log(this);
}
fns.call(obj , 100 , 200); // 100,200--->num1,num2
fns.apply(obj , [100, 200]); 

function fn() {
    console.log('this',this);
    console.log('this.name',this.name);
    console.log('------------------------------');
}

/**
 * this --> window
 * this.name --> 空
 */

// fn(); 

/**
 * this --> obj
 * this.name --> iceman
 */

// fn.call(obj);

/*------------------------------------------------------------------------------------------------------------------------*/


function fn1() {
    this.name='这是函数一'
    console.log('this.name:',this.name,'函数fn2的名字');
}

function fn2() {
    this.name='这是函数二'
}

/**
  * 此时fn1.call的@this 是@fn2  
 * 首先fn1通过原型链查找机制找到Function.prototype上的call方法，并且让call方法执行，此时call这个方法中的this就是要操作的fn1。在call方法代码执行的过程过程中，
 * 首先让fn1中的“this关键字”变为fn2，然后再让fn1这个方法执行。
 * 注意：在执行call方法的时候，fn1中的this的确会变为fn2
 */

fn1.call(fn2);    

/**
 * 此时的this是@fn1 .call
 * @fn2 并没有@call 某个单位
 * 首先fn1通过原型链找到Function.prototype上的call方法，然后再让@call 方法通过原型再找到Function原型上的@call （因为call本身的值也是一个函数，所以同样可以让Function.prototype），
 * 在第二次找到call的时候再让方法执行，方法中的this是fn1.call，首先让这个方法中的this变为fn2，然后再让fn1.call执行。
 */

// fn1.call.call(fn2) // window，这是函数二

