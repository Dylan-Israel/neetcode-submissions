class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr: number[]): number {
        const countMap = arr.reduce((acc, value) => {
            if (acc[value]) {
                acc[value] = acc[value] + 1;
            } else {
                acc[value] = 1;
            }

            return acc;
        }, {});
        let maxValue = -1;

        for (const key in countMap) {
            const isSame = parseInt(key) === countMap[key];

            if (isSame) {
                maxValue = Math.max(maxValue, countMap[key]);
            }
        }

        return maxValue;
    }
}
