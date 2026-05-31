class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let currentIndex = 0;

        while(currentIndex < nums.length) {
            if(nums[currentIndex] === val) {
                nums.splice(currentIndex, 1);
            } else {
                currentIndex++;
            }
        }

        return nums.length;
    }
}
