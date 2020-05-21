const Student=function(name,sex,number,match){
    console.log(arguments,typeof number)

    /**
     * 也可以结合正则判断当前参数格式
     */
    if(number==undefined||typeof number !== 'string'){
        throw ('没有学生学号，无法查询')
    }
    // 命名不能与之后方法重复
    this.name=name;
    this.sex=sex;
    this.number=number;
    this.match=match;
}

Student.prototype={
    match:function(){
        console.log(this.match)
    }
}

Student.prototype.start=function(a,b){
    console.log('学生开始学习'+a+b)
    /**
     * @arguments
     * 可以获取到当前函数的参数数组，若之后为空，则不显示undefined，有几个参数显示几个参数
     * 好处是可以在调用函数的时候判断当前函数传参值是否存在漏传，以及当前函数参数类型是否正确满足需求
     */
    console.log(arguments)//[a,b],[a],[]。不含undefined
}

Student.prototype.stop=function(){
    console.log('学生结束学习')
}

Student.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    return fn
}

Student.prototype.message=function(){
    console.log(`这个学生的名字是${this.name}，性别${this.sex}`)
}

const mike=new Student('mike','boy','bg-985471');


/**
 * 继承
 */

function extend(subClass,superClass){
    var F=function(){};
    F.prototype=superClass.prototype;
    subClass.prototype=new F();
    subClass.prototype=subClass;
}


const Person=function(){

}

Person.prototype={
    getName:function(name){
        console.log(name)
    },
    getSex:function(sex){
        console.log(sex)
    },
    getAge:function(age){
        console.log(age)
    },
    getSkill:function(skill){
        console.log(skill)
    }
}


const Author=function(){

}

Author.prototype={
    getTime:function(time){
        console.log(`从${time}年的时候开始学习`)
    },
    getLevel:function(level){
        console.log(`从${level}年的时候开始学习`)
    }
}

extend(Author,Person);
const author=new Author()
console.log(author)
