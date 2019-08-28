/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.Plates = [];
    this.Capacity = capacity;
    this.min = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {

    if (this.Plates[this.min] === undefined) {
        this.Plates[this.min] = [];
    }

    this.Plates[this.min].push(val);
    
    if (this.Plates[this.min].length === this.Capacity) {
        for (let i = this.min + 1; i < 100001; i ++) {
            if (this.Plates[i] === undefined || this.Plates[i].length < this.Capacity) {
                this.min = i;
                break;
            }
        }
    }
    
    return null;
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    let res = -1;

    for (let i = this.Plates.length - 1; i >= 0; i--) {
        if (this.Plates[i].length === 0) {
            this.Plates.pop();
            continue;
        }

        res = this.Plates[i].pop();
        this.min = Math.min(this.min, i);

        while (i >= 0 && this.Plates[i].length === 0) {
            i--;
            this.Plates.pop();
        }

        break;
    }
    

    return res;
    
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    let res = -1;

    if (this.Plates[index] !== undefined && this.Plates[index].length !== 0) {
        res = this.Plates[index].pop();
        this.min = Math.min(index, this.min);
    }
    
    return res;
    
};

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */