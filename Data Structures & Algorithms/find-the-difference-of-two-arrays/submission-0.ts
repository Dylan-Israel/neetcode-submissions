class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1: number[], nums2: number[]): number[][] {
        const set1 = new Set(nums1);
        const set2 = new Set(nums2);
        const uniqueNums1 = [];
        const uniqueNums2 = [];

        this.helper(set1, set2, uniqueNums1);
        this.helper(set2, set1, uniqueNums2);

        return [uniqueNums1, uniqueNums2];
    }

    private helper(setToIterate: Set<number>, setToCheck: Set<number>, uniqueArray: number[]) {
        for (const item of setToIterate) {
            if (setToCheck.has(item) === false) {
                uniqueArray.push(item);
            }
        }
    }
}
