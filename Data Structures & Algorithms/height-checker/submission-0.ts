class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights: number[]): number {
        const sortedHeights = [...heights].sort((a, b) => a - b);
        let count = 0;

        for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== sortedHeights[i]) {
                count++;
            }
        }

        return count;
    }
}
