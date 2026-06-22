class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr: number[]): number {
        let count = 0;
        const map = arr.reduce((acc, value) => {
            if (acc[value]) {
                acc[value]++;
            } else {
                acc[value] = 1;
            }
            return acc;
        }, {});


        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];

            if (map[current + 1]) {
                count += 1;
            }
        }

        return count;
    }
}
