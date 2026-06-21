class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums: number[]): boolean {
        let isOddFirst = (nums[0] % 2) === 1

        for (let i = 0, j = i + 1; i < nums.length - 1; i++, j++) {
            const firstNumMod = nums[i] % 2;
            const secondNumMod = nums[j] % 2;
            
            if (firstNumMod !== secondNumMod) {
                continue;
            }

            return false;
        }

        return true;
    }
}
