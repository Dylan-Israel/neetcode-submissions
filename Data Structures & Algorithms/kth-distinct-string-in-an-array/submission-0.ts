class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr: string[], k: number): string {
        const map: Record<string, { index: number, count: number }> = {};

        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]]) {
                map[arr[i]].count++;
            } else {
                map[arr[i]] = { index: i, count: 1 };
            }
        }

        const filteredDistinct = Object.entries(map).filter(([key, value]) => {
            return value.count === 1;
        }).sort((a, b) => {
            return a[1].index - b[1].index;
        })

        if (filteredDistinct[k - 1]) {
            return filteredDistinct[k - 1][0];
        }


        return "";
    }
}
