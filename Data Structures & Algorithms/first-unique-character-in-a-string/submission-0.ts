class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s: string): number {
        const map: Record<string, { count: number, index: number }> = s.split('').reduce((acc, value, index) => {
            if (acc[value]) {
                acc[value].count++;
            } else {
                acc[value] = {
                    count: 1,
                    index
                }
            }
            return acc;
        }, {});

        let index = s.length + 1;

        for (const char in map) {
            if (map[char].count === 1) {
                index = Math.min(index, map[char].index);
            }
        }


        return index === s.length + 1 ? -1 : index;
    }
}
