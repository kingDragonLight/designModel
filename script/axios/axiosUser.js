const url1='http://jsonplaceholder.typicode.com/users';
const url2='http://jsonplaceholder.typicode.com/posts';

function getUrl(url){
    return axios.get(url)
}

/**
 * 并发请求
 */
axios.all([getUrl(url1),getUrl(url2)]).then(axios.spread( (url1Data, url2Data)=> {
    console.log(url1Data, url2Data)
}));

const axiosPromise=function(url,method='get',data={}){
    return new Promise((reslove,reject)=>{
                axios({
                    url:url,
                    data:data,
                    method:method
                }).then(res=>{
                    reslove(res.data)
                }).catch(err=>{
                    reject(err)
                })
            })
}

axiosPromise(url1).then(data=>{console.log(data)})

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
