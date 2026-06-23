class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    findTheDifference(s: string, t: string): string {
        const map1 = this.buildMap(s);
        const map2 = this.buildMap(t);

        for (let [key, value] of map2.entries()) {
            if (!map1.has(key)) {
                return key;
            }

            if (map1.get(key) !== value) {
                return key;
            }
        }

        return '';
    }

    private buildMap(s: string): Map<string, number> {
        const chars = s.split('');
        const map: Map<string, number> = new Map();

        for (const char of chars) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }

        return map;
    }
}
