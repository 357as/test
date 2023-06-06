const homedata = () => {
    const obj = {
        mobilePhoneManufacturer: [],
        //手机出货量,当日,当月 总计
        mobilePhoneShipmentVolume: [{
            name: 'oppo',
        }, {
            name: 'vivo',
        }, {
            name: 'XiaoMi',
        }, {
            name: 'HUAWEI',
        }, {
            name: 'iPhone',
        }, {
            name: 'SAMSUNG',
        },],
        //最近七天
        lastSevenDays: [],
        //折线图数据
        mylineChart_data: {},
        //饼图数据
        salesProportionInThePastMonth: [],
        //柱状图数据
        barChart: {
            legend: ['新增用户', '活跃用户'],
            data: [

            ]
        },
        //订单状态
        orderStatus: [{
            day: 6548,
            month: 43548,
        }, {
            day: 135,
            month: 845,
        }, {
            day: 5647,
            month: 33548,
        }]
    }
    //手机出货量,当日,当月 总计 数据随机生成
    for (let i = 0; i < obj.mobilePhoneShipmentVolume.length; i++) {
        obj.mobilePhoneShipmentVolume[i].day = Math.floor(Math.random() * 250)
        obj.mobilePhoneShipmentVolume[i].month = Math.floor(Math.random() * (5000 - 2000) + 2000)
        obj.mobilePhoneShipmentVolume[i].total = Math.floor(Math.random() * (20000 - 5000) + 5000)
    }

    // 获取最近七天
    var date = new Date();
    var base = Date.parse(date); // 转换为时间戳
    var oneDay = 24 * 3600 * 1000
    for (var i = 0; i < 7; i++) { //前七天的时间
        var now = new Date(base -= oneDay);
        var month = now.getMonth() + 1;
        var mday = now.getDate()
        obj.lastSevenDays.unshift([month >= 10 ? month : '0' + month, mday >= 10 ? mday : '0' + mday].join('-'))
    }

    //折线图数据随机生成
    for (let i = 0; i < obj.mobilePhoneShipmentVolume.length; i++) {
        obj.mylineChart_data[obj.mobilePhoneShipmentVolume[i].name] = []
        for (let j = 0; j < obj.lastSevenDays.length; j++) {
            var number = Math.floor(Math.random() * (900 - 300) + 300)
            obj.mylineChart_data[obj.mobilePhoneShipmentVolume[i].name].push(number)
        }

    }
    //柱状图
    obj.barChart.data[0] = ['product', obj.barChart.legend[0], obj.barChart.legend[1]]
    for (let i = 1; i < obj.lastSevenDays.length + 1; i++) {
        var arr = [obj.lastSevenDays[i - 1], Math.floor(Math.random() * (300 - 150) + 150), Math.floor(Math.random() * (1200 - 800) + 800)]
        obj.barChart.data.push(arr)
    }

    // 饼图数据随机生成
    for (let i = 0; i < obj.mobilePhoneShipmentVolume.length; i++) {
        let item = {
            value: obj.mobilePhoneShipmentVolume[i].month,
            name: obj.mobilePhoneShipmentVolume[i].name
        }
        //手机厂商
        obj.mobilePhoneManufacturer.push(obj.mobilePhoneShipmentVolume[i].name)
        obj.salesProportionInThePastMonth.push(item)
    }

    return obj
}
export default homedata