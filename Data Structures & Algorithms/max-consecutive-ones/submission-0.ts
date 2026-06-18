class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCount = 0;
        let tempCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                tempCount++;

                maxCount = maxCount > tempCount ? maxCount : tempCount;
            } else {
                tempCount = 0;
            }
        }

        return maxCount;
    }
}
