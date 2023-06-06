// 中国标准时间 转换成 年月日

const timeTranfrom = function getSimpleDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var s = date.getSeconds();
    s = s < 10 ? '0' + s : s;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s;
}
export default timeTranfrom
