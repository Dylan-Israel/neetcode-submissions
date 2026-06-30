class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        const squaredNums = nums.map((num) => {
            return num * num;
        });

        squaredNums.sort((a, b) => a - b);

        return squaredNums;
    }
}
