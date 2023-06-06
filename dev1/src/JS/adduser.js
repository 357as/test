
const data = []

let id = 0
const getid = (str) => {
    var id = []
    str = str.split('')
    str.map((item, index) => {
        id[index] = item.charCodeAt(0)
    })
    return id.join('')
}
const letters = []
for (let i = 65; i < 65 + 26 + 26 + 6; i++) {
    if (i >= 91 && i <= 96) { } else {
        letters.push(String.fromCharCode(i))
    }
}

const names = `志尚、风睿、振荣、嘉慕、宏远、子瑜、英逸、翔飞、英才、鸿博、志专、弘方、飞雨、天成、天空、开霁、文言、光明、巍奕、文斌、斌斌、致远、建安、阳舒、明珠、长逸、智刚、天逸、宏胜、意远、高达、英才、景天、高昂、奇思、博新、志强、高峰、瀚钰、星文、俊豪、承福、君博、昆明、昆琦、彬炳、宏阔、睿广、鹏运、瀚彭、景彰、泰清、厉辉、昌瀚、彬彬、高邈、泰河、俊英、辰阳、景平、晋宁、广君、君轩、腾逸、明知、成益、永贞、宏博、高格、华清、俊良、力夫、安康、鸿骞、礼骞、越彬、涵涵、星火、奇正、昊硕、辰钊、建木、光远、思聪、星腾、博宇、俊逸、元忠、稷骞、范明、英睿、光耀、安宜、茂彦、锦程、翰学、远骞、智晖、阳州、昂雄、学海、英资、新曦、俊拔、阳州、昂雄、和安、蕴和、鸿运、勇男、辉城、博康、和同、玉涛、学智、高翰、向阳、宾白、锐翰、元白、茂典、景明、远航、昊乾、宏胜、晨涛、振强、新翰、德义、和韵、苑霖、俊名、彭魄、德曜、良翰、鸿才、嘉致、鹏天、和洽、思淼、永寿、逸仙、旭彬、胜天、温纶、星剑、昆雄、毅然、泰然、经武、温谨、振锐、乐水、高峻、嘉石、华清、`
let a = names.split('、')

for (let index = 0; index < 66; index++) {
    let obj = {
        date: `${Math.floor(Math.random() * (2022 - 2010) + 2010)}-${Math.floor(Math.random() * (12 - 1) + 1)}-${Math.floor(Math.random() * (28 - 1) + 1)}`,
        name: a[index],
        age: Math.floor(Math.random() * (60 - 18) + 18),
        address: '上海市普陀区金沙江路 1518 弄',
        gender: Math.floor(Math.random() * 100) % 2 == 0 ? '女' : '男',
    }
    obj.id = id++ + String(getid(obj.name)) + letters[Math.floor(Math.random() * letters.length - 1)]
    data.push(obj)
}
export default data


