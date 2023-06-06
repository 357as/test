import http from './http';
const axiosApi = {
    get1() {
        return http({
            // url: '//openapiv2.dataoke.com/open-api/goods/list-super-goods?type=0&pageId=1&pageSize=56&keyWords=%E6%89%8B%E6%9C%BA&appKey=622b674f76e31'
            url: 'https://openapi.dataoke.com/api/goods/get-goods-list?version=v1.2.4&appKey=612bcfe884763&pageId=1&pageSize=10l'
        })
    },
    post1(param) {
        return http({
            url: '//jsonplaceholder.typicode.com/posts/',
            method: 'post',
            data: param
        })
    }
}
export default axiosApi