class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false;
        }

        const map1 = this.mapper(s);
        const map2 = this.mapper(t);

        for(const key in map1) {
            if(map1[key] !== map2[key]) {
                return false;
            }
        }

        return true;
    }

    private mapper(str: string): Record<string, number> {
        const map = {};

        for(let char of str) {
            if(map[char]) {
                map[char]++;
            } else{
                map[char]= 1;
            }
        }

        return map;
    }
}
