class NumArray {
    /**
     * @param {number[]} nums
     */
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.nums.slice(left, right + 1).reduce((acc, value) => acc + value, 0);
    }
}
