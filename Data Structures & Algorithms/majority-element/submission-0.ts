class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]]) {
                map[nums[i]]++;
            } else {
                map[nums[i]] = 1;
            }

            if (map[nums[i]] * 2 > nums.length) {
                return nums[i];
            }
        }

        return 0;
    }
}
