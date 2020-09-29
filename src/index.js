exports.min = function min(array) {

    if (!checkArray(array)) {
        return 0;
    }

    function getMin(obj) {
        let a = obj[0];
        for (let i = 1; i < obj.length; i++) {
            if (obj[i] < a) {
                a = obj[i];
            }
        }
        return a;
    }

    return getMin(array);
};

exports.max = function max(array) {
    
    if (!checkArray(array)) {
        return 0;
    }


    function getMax(obj) {
        let a = obj[0];
        for (let i = 1; i < obj.length; i++) {
            if (obj[i] > a) {
                a = obj[i];
            }
        }
        return a;
    }

    return getMax(array);
};

exports.avg = function avg(array) {
    
    if (!checkArray(array)) {
        return 0;
    }

    function getAvg(obj) {
        let a = 0;
        for (let i = 0; i < obj.length; i++) {
                a = a + (+obj[i]);
        }
        return a / obj.length;
    }

    return getAvg(array);
};

const checkArray = (array) => {
    if (array === null || array === undefined || isNan(array)) {
        return false;
    }

    if (array.constructor !== Array) {
        return false;
    }

    if (array.length === 0) {
        return false;
    }

    return true;
};

function isNan(value) {
    return value !== value;
}
