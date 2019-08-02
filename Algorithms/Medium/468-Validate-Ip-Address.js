/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if (IP.indexOf('.') !== -1) {
        return validIPv4Address(IP) ? 'IPv4' : 'Neither';
    } else if (IP.indexOf(':') !== -1) {
        return validIPv6Address(IP) ? 'IPv6' : 'Neither';
    }

    return 'Neither';
};

var validIPv4Address = function(IP) {
    const aNum = IP.split('.');

    //檢查數量
    if (aNum.length !== 4) {
        return false;
    }

    for (let i = 0; i < aNum.length; i++) {
        const v = aNum[i];

        // 長度不能超過 3 必須大於 1，開頭為 0 禁止
        if (v.length > 3 || v.length < 1 || (v.length !== 1 && v.charAt(0) === '0')) {
            return false;
        }

        // 數字
        for (let j = 0; j < v.length; j++) {
            if ('0' > v.charAt(j) || v.charAt(j) > '9') {
                return false;
            }
        }

        // 不能超過 255 且大於 0
        if (parseInt(v) > 255 || parseInt(v) < 0) {
            return false;
        }
    }

    return true;
};

var validIPv6Address = function(IP) {
    const aNum = IP.split(':');

    if (aNum.length !== 8) {
        return false;
    }

    for (let i = 0; i < aNum.length; i++) {
        let v = aNum[i].toLowerCase();

        // 長度不能超過 4 且大於 1
        if (v.length > 4 || v.length < 1) {
            return false;
        }

        // 0-9a-f
        for (let j = 0; j < v.length; j++) {
            if ('0' > v.charAt(j) || (v.charAt(j) > '9' && v.charAt(j) < 'a') || v.charAt(j) > 'f') {
                return false;
            }
        }

        // 不能超過 65535 且大於 0
        if (parseInt(v, 16) > 65535 || parseInt(v) < 0) {
            return false;
        }
    }

    return true;
};
