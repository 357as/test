const deepcopy = function (obj) {
    if (typeof (obj) != "object") {
        return obj
    }
    let result;
    if (Array.isArray(obj)) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        result[key] = this.deepCopy(obj[key])
    }
    return result
}

export default deepcopy