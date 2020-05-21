const url1='http://jsonplaceholder.typicode.com/users';
const url2='http://jsonplaceholder.typicode.com/posts';

/**
 * 工厂函数封装
 */

let ajaxResource=function(params) {
    this.url=params.url;
    this.method=params.method;
    this.xmlhttp=null
}

ajaxResource.prototype={
    loadxml:function () {
        if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
            this.xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (this.xmlhttp != null) {
            this.xmlhttp.onreadystatechange = this.state_Change.bind(this);
            this.xmlhttp.open(this.method, this.url, true);
            this.xmlhttp.send(null);
            setTimeout(function closeAjax() {
                if (this.xmlhttp.readyState !== 4) {
                    //  中断ajax请求
                    this.xmlhttp.close();
                    alert('请求时间过长')
                }
            },3000,this)
        }
        else {
            throw "你的浏览器不支持 XMLHTTP."
        }
    },
    
    state_Change:function () {
        if (this.xmlhttp.readyState == 4) {// 4 = "loaded"
            if (this.xmlhttp.status == 200) {// 200 = "OK"
                // document.getElementById('T1').innerHTML = xmlhttp.responseText;
                console.log(this.xmlhttp.responseText)
            }
            else {
                throw("Problem retrieving data:" + this.xmlhttp.statusText)
            }
        }
    }
}



// const getDatas=new ajaxResource({url:url1,method:'GET'});

// getDatas.loadxml()
// console.log(getDatas)




/**
 * @Class封装
 * @封装成功
 */

class AjaxData{

    constructor(options){
        console.log(options)
        this.url=options.url;
        this.method=options.method;
        this.callBack=options.callback
        this.xmlhttp=null
    }
    
    loadXMLDoc () {
        if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
            this.xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {// code for IE6, IE5
            this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (this.xmlhttp != null) {
            console.log(this.xmlhttp)
            const that=this;
            this.xmlhttp.onreadystatechange = this.state_Change.bind(this);
            this.xmlhttp.open(this.method, this.url, true);
            this.xmlhttp.send(null);
            setTimeout(function() {
                if (that.xmlhttp.readyState !== 4) {
                    //  中断ajax请求 closeAjax
                    this.xmlhttp.close();
                    alert('请求时间过长')
                }
            },3000,this)
        }
        else {
            throw "你的浏览器不支持 XMLHTTP."
        }
    }
    
    state_Change() {
        if (this.xmlhttp.readyState == 4) {// 4 = "loaded"
            if (this.xmlhttp.status == 200) {// 200 = "OK"
                // document.getElementById('T1').innerHTML = xmlhttp.responseText;
                this.callBack(this.xmlhttp.responseText)
            }
            else {
                throw("Problem retrieving data:" + this.xmlhttp.statusText)
            }
        }
    }
}


// const getData=new AjaxData({url:url2,method:'GET',callback:function (data) {
//     console.log(data)
// }})
// getData.loadXMLDoc()

const getTxt=new AjaxData({url:'script/txt.txt',method:'GET',callback:function (data) {
        document.write(data)
    }})
    getTxt.loadXMLDoc()

/**
 * @Promise 封装
 * @封装成功
 */

 function promiseAjax(options) {
     return new Promise((resolve,reject)=>{
        let xmlhttp=null;
        if (window.XMLHttpRequest) {// code for Firefox, Opera, IE7, etc.
            xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp != null) {
            xmlhttp.onreadystatechange = state_Change;
            xmlhttp.open(options.method, options.url, true);
            xmlhttp.send(null);
        }
        else {
            throw "你的浏览器不支持 XMLHTTP."
        }

        function  state_Change() {
            if (xmlhttp.readyState == 4) {// 4 = "loaded"
                if (xmlhttp.status == 200) {// 200 = "OK"
                    // document.getElementById('T1').innerHTML = xmlhttp.responseText;
                    resolve(xmlhttp.responseText)
                }
                else {
                    reject("Problem retrieving data:" + xmlhttp.statusText)
                }
            }
        }

     })
 }

//  promiseAjax({url:url1,method:'get'}).then(res=>{
//      console.log(res)
//  })