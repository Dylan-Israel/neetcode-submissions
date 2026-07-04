class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    isMajorityElement(nums: number[], target: number): boolean {
        const map = nums.reduce((acc, value) => {
            if (acc[value]) {
                acc[value] = acc[value] + 1;
            } else {
                acc[value] = 1;
            }

            return acc;
        }, {});

        return map[target] > nums.length / 2;
    }
}
