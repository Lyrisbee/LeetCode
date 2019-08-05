/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.length = length;
    this.tempSnap = [];
    this.snapA = [];
    
    return null;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.tempSnap[index] = val;

    return null;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapA.push(this.tempSnap.slice());
    
    return this.snapA.length - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    return (this.snapA[snap_id] === undefined || this.snapA[snap_id][index] === undefined) ? 0 : this.snapA[snap_id][index];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */