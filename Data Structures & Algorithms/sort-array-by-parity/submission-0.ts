class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums: number[]): number[] {
        const evenOddPairs = nums.reduce((acc, value) => {
            if (value % 2 === 0) {
                acc.even.push(value);
            } else {
                acc.odd.push(value);
            }

            return acc;
        }, { even: [], odd: [] })

        return evenOddPairs.even.concat(evenOddPairs.odd);
    }
}
