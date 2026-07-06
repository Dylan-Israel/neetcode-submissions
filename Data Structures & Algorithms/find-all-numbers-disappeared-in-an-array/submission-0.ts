class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums: number[]): number[] {
        const max = Math.max(...nums);
        const missingNums = [];
        const numsMap = nums.reduce((acc, value) => {
            if(acc[value] === undefined) {
                acc[value] = value;
            }

            return acc;
        }, {});

    for(let i = 1; i <= nums.length; i++) {
        if(numsMap[i] === undefined) {
            missingNums.push(i);
        }
    }

    return missingNums;
    }
}
