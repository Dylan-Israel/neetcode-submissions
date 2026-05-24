class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = nums.reduce((acc, value, index) => {
            acc[value] = index;
            return acc;
        }, {});

        for(let i = 0; i < nums.length; i++) {
            const valueNeeded = target - nums[i];

            if(map[valueNeeded] && map[valueNeeded] !== i) {
                return [map[valueNeeded], i];
            }
        }

        return [];
    }
}
