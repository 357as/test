//接口请求
//引入axios
import axios from "axios"

//qs:在登录是axios请求数据传参时无法正常的获取数据，原因是传递参数要将参数序列化
//qs.stringfy() 是将对象序列化成URL的形式 以&进行拼接
//qs.stringfy({name:'allen',age:18}) 结果为 " name=allen&age=18"
//qs.parse(name=allen&age=18) 结果为 {name:'allen',age:18}

//引入qs
import qs from 'qs'

//首先 使用create方法创建axios实例  根据指定配置创建一个新的 axios
const http = axios.create({
    //timeout:7000, //请求超时时间
    baseURL: 'http:', //默认路径  公共网址
    /* headers: { 'Content-Type': 'application/json;charset = UTF - 8' } //请求头的第一种方式 这个看后端解析内容的方式 */
})
/* axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded;charset = UTF - 8';//请求头的第一种方式 这个看后端解析内容的方式 */


/*第二：请求拦截器   我们在发送请求前可以进行一个请求的拦截，为什么要拦截呢，我们拦截请求是用来做什么的呢？比如，有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据。这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。*/
/* 这里说一下token，一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过。*/

//在请求发送后拦截下来，进行一些操作后，在进行请求
http.interceptors.request.use((config) => {
    //判断请求类型
    if (config.method == 'post') {
        //再次可以给传递的数据对象添加字段
        //config.data['roleid']
        console.log('此次请求方式为post');
        config.data = qs.stringify(config.data)
        console.log(config.data);
    }
    if (config.method == 'get') {
        //具体操作
        // console.log('此次请求方式为get');
    }
    return config
}, (error) => {
    //对请求错误做些什么 方法返回一个带有拒绝原因的(error参数)的promise对象
    return Promise.reject(error)
})


//响应式拦截器 
http.interceptors.response.use((response) => {
    // 对响应的数据做点什么
    // 在此处可进行后端的状态码判断
    const status = response.status
    //状态码为200 表示成功 返回数据
    if (status == 200) {
        //  console.log('对接成功');
        //  console.log(response.data);
        return response.data.data
    } else {
        console.log('响应数据状态码对不上！！');
        return response
    }

}, (error) => {
    //错误时做点什么
    return Promise.reject(error)

})

//抛出
export default http

