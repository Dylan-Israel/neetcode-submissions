class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums: number[]): number {
        const uniqueSet: Set<number> = new Set();
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) {
                uniqueSet.delete(nums[i]);
            } else {
                map[nums[i]] = true;
                uniqueSet.add(nums[i]);
            }
        }
        
        const max = Math.max(...uniqueSet.values());

        return uniqueSet.size >= 1 ? max : -1;
    }
}
