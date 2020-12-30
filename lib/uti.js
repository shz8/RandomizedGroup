module.exports = {
    dateAdd(type, num, date) {
        if (!(date instanceof Date)) {
            date = new Date(date)
        }
        if (!date.getTime()) {
            return null
        }
        if (['s', 'm', 'h', 'd'].indexOf(type)) {
            let d = num
            switch (type) {
                case 'd':
                    d = d * 24;
                case 'h':
                    d = d * 60;
                case 'm':
                    d = d * 60;
                case 's':
                    d = d * 1000;
            }
            return new Date(date.getTime() + d)
        }
        return null
    },
    addPreZero(num, l) {
        num = (num || 0) + ''
        return num.length >= l ? null : ('00000000000000' + num).slice(-15).substr(15 - l, l);
    },
    clone(obj) {
        var o;
        // 如果  他是对象object的话  , 因为null,object,array  也是'object';
        if (typeof obj === 'object') {

            // 如果  他是空的话
            if (obj === null) {
                o = null;
            }
            else {

                // 如果  他是数组arr的话
                if (obj instanceof Array) {
                    o = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        o.push(this.clone(obj[i]));
                    }
                }
                // 如果  他是对象object的话
                else {
                    o = {};
                    for (var j in obj) {
                        o[j] = this.clone(obj[j]);
                    }
                }

            }
        }
        else {
            o = obj;
        }
        return o;
    }
}